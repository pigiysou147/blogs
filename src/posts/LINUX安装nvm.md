### 在WSL的Ubuntu上安装NVM

在WSL的Ubuntu中安装Node Version Manager (NVM) 可以按照以下步骤进行：

#### 1. 更新包列表
打开终端并执行以下命令以更新包列表：
```bash
sudo apt update
```

#### 2. 安装curl
如果尚未安装curl，可以使用以下命令进行安装：
```bash
sudo apt install curl
```

#### 3. 下载并运行NVM安装脚本
执行以下命令以下载并运行NVM的安装脚本：
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
```

#### 4. 激活NVM
要在当前会话中激活NVM，可以执行以下命令：
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

#### 5. 验证安装
执行以下命令来验证NVM是否安装成功：
```bash
nvm --version
```

### 提示报错处理

如果在执行第三步时遇到如下错误：
```sh
curl: (7) Failed to connect to raw.githubusercontent.com port 443 after 101 ms: Connection refused
```

这通常表示网络无法连接到GitHub的服务器。以下是一些解决方法：

1. **检查网络连接**
   确保网络正常，可以尝试访问其他网站确认连接。

2. **使用代理**
   如果在某些地区（如中国大陆），可能需要使用代理。可以设置`http_proxy`和`https_proxy`环境变量：
   ```bash
   export http_proxy=http://your-proxy:port
   export https_proxy=https://your-proxy:port
   ```

3. **直接下载脚本**
   如果curl仍然无法连接，可以通过浏览器手动下载NVM的安装脚本。访问以下链接并复制内容到一个文件中：
   - [NVM install script](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh)

   将其保存为`install.sh`，然后在终端中运行：
   ```bash
   bash install.sh
   ```

4. **使用Git克隆NVM**
   如果安装了Git，可以使用以下命令克隆NVM仓库：
   ```bash
   git clone https://github.com/nvm-sh/nvm.git ~/.nvm
   cd ~/.nvm
   git checkout v0.39.5
   ```

### 自动加载NVM配置

为了避免每次开机都手动执行`export`命令，可以将这些命令添加到shell配置文件中。

#### 1. 打开配置文件
根据使用的shell类型，打开相应的配置文件：
- 对于Bash，编辑`~/.bashrc`：
  ```bash
  nano ~/.bashrc
  ```
- 对于Zsh，编辑`~/.zshrc`：
  ```bash
  nano ~/.zshrc
  ```

#### 2. 添加NVM配置
在文件末尾添加以下两行：
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

#### 3. 保存并退出
如果使用`nano`，按`Ctrl + O`保存，按`Enter`确认，然后按`Ctrl + X`退出。

#### 4. 使更改生效
运行以下命令以使更改生效：
```bash
source ~/.bashrc
```
或者，如果修改了`~/.zshrc`：
```bash
source ~/.zshrc
```

完成这些步骤后，就可以直接在终端中使用NVM，而无需每次手动导出。