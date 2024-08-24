
// mdnBcd being only imported for types
// eslint-disable-next-line no-unused-vars
// const mdnBcd = require('@mdn/browser-compat-data');
// const { default: bcd } = await import('@mdn/browser-compat-data', {
//   with: { type: 'json' },
// });
// const bcd = require('./browserCompat');


const BROWSERS = {
  chrome: 'Chrome',
  firefox: 'Firefox',
  edge: 'Edge',
  safari: 'Safari',
};
let DATA = null;

/**
 * @param {mdnBcd.SimpleSupportStatement | undefined} support
 * @param {mdnBcd.StatusBlock | undefined} status
 * @returns {{aria: string, compatProperty: string, icon: string}}}
 */
function getInfoFromSupportStatement(support, status, locale) {
  if (status && status.deprecated) {
    return {
      aria: 'deprecated',
      compatProperty: 'deprecated',
      icon: '🗑',
    };
  }

  if (support && !support.version_removed) {
    if (support.version_added === 'preview') {
      return {
        aria: 'preview',
        compatProperty: 'preview',
        icon: '👁',
      };
    }

    if (support.flags && support.flags.length > 0) {
      return {
        aria: 'flag',
        compatProperty: 'flag',
        icon: '⚑',
      };
    }

    if (typeof support.version_added === 'string') {
      return {
        aria: 'yes',
        compatProperty: 'yes',
        icon: support.version_added,
      };
    }

    // See https://github.com/GoogleChrome/web.dev/issues/8333
    if (support.version_added === true) {
      return {
        aria: 'yes',
        compatProperty: 'yes',
        icon: '✅',
      };
    }
  }

  return {
    aria: 'no',
    compatProperty: 'no',
    icon: '×',
  };
}


function walk(obj, prefix = '') {
  /** @type {{[id: string]: CompatStatement}} */
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null) {
      const prefix_ = prefix + (prefix ? '.' : '') + key;
      if (value.__compat) {
        result[prefix_] = value.__compat;
        delete value.__compat;
      }
      Object.assign(result, walk(value, prefix_));
    }
  }
  return result;
}
/**
 * @this ShortcodeContext
 * @param {string} featureId
 */
export async function BrowserCompat(featureId) {
  if (!DATA) {
    // throw new Error(
    //   '[BrowserCompat shortcode] Browser Compat data is not available.'
    // );
    const bcd = await fetch('https://unpkg.com/@mdn/browser-compat-data').then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // 将响应体解析为 JSON
    })
    DATA = walk(bcd)
  }
  const shortcodeContext = {};
  shortcodeContext.supportLabel = '浏览器支持'

  const feature = DATA[featureId];
  shortcodeContext.browsers = Object.keys(BROWSERS).map(browser => {
    let support = undefined;
    const status = undefined;
    if (feature && feature.support) {
      support = Array.isArray(feature.support[browser])
        ? feature.support[browser][0]
        : feature.support[browser];
    }

    const supportInfo = getInfoFromSupportStatement(support, status);

    const isSupported = support
      ? support.version_added && !support.version_removed
      : false;

    const ariaLabel = [
      BROWSERS[browser],
      isSupported ? ` ${support.version_added}, ` : ', ',
      supportInfo.aria || '',
    ].join('');

    return {
      name: browser,
      supportInfo,
      ariaLabel,
      compat: supportInfo.compatProperty,
      supportIcon: supportInfo.icon,
    };
  });

  if (feature) {
    shortcodeContext.source = feature.mdn_url;
    shortcodeContext.sourceLabel = '来源';
  }
  return shortcodeContext
}


