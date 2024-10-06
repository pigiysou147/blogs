### 目录的所有权不可信错误解决方案

在使用 Yarn 时，可能会遇到如下错误：

```sh
fatal: detected dubious ownership in repository at '/projects/ui'
```

这个错误表明 Git 认为 `/projects/ui` 目录的所有权不可信。以下是解决此问题的步骤：

#### 1. 添加安全目录
执行以下命令，将目录添加到 Git 的安全目录列表中：
```bash
git config --global --add safe.directory /projects/ui
```

#### 2. 验证设置
确认目录已成功添加，可以使用以下命令查看安全目录列表：
```bash
git config --global --get safe.directory
```

#### 3. 重新运行 Yarn
再次尝试运行 Yarn 命令，以确认问题已解决：
```bash
yarn
```

通过以上步骤，应该能够顺利解决 Git 的安全目录问题。