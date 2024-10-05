
# 安装 node-sass 失败的 Python 2 解决方案

在使用 `node-sass` 时，可能会遇到以下错误信息：

```sh
error /projects/node_modules/node-sass: Command failed.
Exit code: 1
Command: node scripts/build.js
Arguments: 
Directory: /projects/node_modules/node-sass
Output:
Building: /hom/.nvm/versions/node/v18.20.4/bin/node /projects/node_modules/node-gyp/bin/node-gyp.js rebuild --verbose --libsass_ext= --libsass_cflags= --libsass_ldflags= --libsass_library=
gyp info it worked if it ends with ok
gyp verb cli [
gyp verb cli   '/home/.nvm/versions/node/v18.20.4/bin/node',
gyp verb cli   '/projects/node_modules/node-gyp/bin/node-gyp.js',
gyp verb cli   'rebuild',
gyp verb cli   '--verbose',
gyp verb cli   '--libsass_ext=',
gyp verb cli   '--libsass_cflags=',
gyp verb cli   '--libsass_ldflags=',
gyp verb cli   '--libsass_library='
gyp verb cli ]
gyp info using node-gyp@3.8.0
gyp info using node@18.20.4 | linux | x64
gyp verb command rebuild []
gyp verb command clean []
gyp verb clean removing "build" directory
gyp verb command configure []
gyp verb check python checking for Python executable "python2" in the PATH
gyp verb `which` failed Error: not found: python2
gyp verb `which` failed     at FSReqCallback.oncomplete (node:fs:202:21) {
gyp verb `which` failed   code: 'ENOENT'
gyp verb `which` failed }
```

这个问题通常与缺少 Python 2 相关。以下是解决方案。

### node-sass 与 Node.js 版本对应关系

在安装 `node-sass` 之前，了解它与 Node.js 的版本对应关系是非常重要的：

| NodeJS  | Supported node-sass version | Node Module |
| ------- | --------------------------- | ----------- |
| Node 20 | 9.0+                        | 115         |
| Node 19 | 8.0+                        | 111         |
| Node 18 | 8.0+                        | 108         |
| Node 17 | 7.0+, <8.0                  | 102         |
| Node 16 | 6.0+                        | 93          |
| Node 15 | 5.0+, <7.0                  | 88          |
| Node 14 | 4.14+, <9.0                 | 83          |
| Node 13 | 4.13+, <5.0                 | 79          |
| Node 12 | 4.12+, <8.0                 | 72          |
| Node 11 | 4.10+, <5.0                 | 67          |
| Node 10 | 4.9+, <6.0                  | 64          |
| Node 8  | 4.5.3+, <5.0                | 57          |
| Node <8 | <5.0                        | <57         |

### 解决步骤

#### 1. 安装 Python 2

对于 Node.js 18 及以下版本，可以通过以下命令安装 `node-gyp`：

```sh
npm install -g node-gyp 
```

如果需要手动安装 Python 2.7，可以访问 [Python 2.7 下载页面](https://www.python.org/downloads/release/python-2718/)。

#### 2. 配置环境变量

在 Node.js 18 之前，可以通过以下命令设置 Python 环境变量：

```sh
npm config set python python2.7
```

然而，从 Node.js 16 开始，`npm config set python` 被不再推荐，并在 Node.js 18 及以上版本中完全移除。为了解决 Python 2.7 的需求，可以采取以下方法：

1. **设置环境变量**：
   在运行命令之前设置 `PYTHON` 环境变量：
   ```bash
   export PYTHON=python2.7
   ```

2. **配置 node-gyp**：
   使用以下命令设置 node-gyp 的 Python 路径：
   ```bash
   npm config set node-gyp python /path/to/python2.7
   ```

3. **确保 Python 2.7 已安装**，并能够通过命令行访问。

### 安装 Python 2.7 的方法

不同操作系统的安装步骤如下：

#### Windows
1. **下载安装包**：
   - 前往 [Python 官方网站](https://www.python.org/downloads/release/python-2718/)。
   - 下载适合 Windows 的 Python 2.7 安装包。

2. **运行安装程序**：
   
- 双击下载的 `.exe` 文件，按照提示进行安装，并选择添加 Python 到系统 PATH。
   
3. **验证安装**：
   - 打开命令提示符，输入：
     ```bash
     python --version
     ```
   - 应该显示 `Python 2.7.x`。

#### macOS
1. **使用 Homebrew 安装**：
   - 打开终端，输入：
     ```bash
     brew install python@2
     ```

2. **验证安装**：
   - 输入以下命令：
     ```bash
     python --version
     ```
   - 应该显示 `Python 2.7.x`。

#### Linux
1. **Debian/Ubuntu**：
   - 打开终端，输入：
     ```bash
     sudo apt-get update
     sudo apt-get install python2.7
     ```

2. **CentOS/Fedora**：
   - 输入以下命令：
     ```bash
     sudo yum install python2
     ```

3. **验证安装**：
   - 输入以下命令：
     ```bash
     python2 --version
     ```

如果遇到网络问题，可以设置淘宝镜像源：

```sh
npm config set registry https://registry.npmmirror.com
```

### 总结

通过以上步骤，您应该能够成功解决安装 `node-sass` 时由于缺少 Python 2 的问题。如果您在安装过程中遇到任何问题，请随时查阅相关文档或寻求帮助。