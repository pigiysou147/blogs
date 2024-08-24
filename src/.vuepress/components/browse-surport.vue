<template>
  <div class="wdi-browser-compat">
    <span class="wdi-browser-compat__label">{{ browserCompat.supportLabel }}</span>
    <ul class="wdi-browser-compat__items"
        v-if="browserCompat.browsers && browserCompat.browsers.length">
      <li v-for="(browser, index) in browserCompat.browsers"
          :key="index"
          class="wdi-browser-compat__version"
          :data-compat="browser.supportInfo.compatProperty">
        <span class="wdi-browser-compat__icon"
              :data-browser="browser.name">
        </span>
        <span v-if="browser.supportInfo.aria === 'yes'">
          {{ browser.supportIcon }}
        </span>
      </li>
    </ul>
    <a v-if="browserCompat.source"
       class="wdi-browser-compat__link"
       :href="`${browserCompat.source}#browser_compatibility`"
       target="_blank">
      {{ browserCompat.sourceLabel }}
    </a>
  </div>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue';
import { BrowserCompat } from "./index.js";
const { code } = defineProps({ code: String });
const id = "css.properties.filter";
const data = BrowserCompat(code);
const browserCompat = data;
</script>

<style scoped>
@import "./styles.scss";
</style>