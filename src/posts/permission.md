# 解决 Yarn 依赖安装中的权限错误

在运行 `yarn` 命令时，可能会遇到以下错误：

```sh
yarn dependencies
yarn run v1.22.22
$ ./scripts/update-dependencies
Installing Submodules...error: could not lock config file .git/config: Permission denied
error: could not lock config file .git/config: Permission denied
fatal: Failed to register url for submodule path 'vendor/icons'
error Command failed with exit code 128.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

这个错误通常表示您没有权限访问 Git 配置文件。以下是解决该问题的步骤：

## 解决步骤

1. **检查文件权限**：
   进入项目目录并检查 `.git/config` 文件的权限：
   ```bash
   cd /projects/ui
   ls -l .git/config
   ```

2. **更改文件权限**：
   如果发现权限不足，可以使用 `chmod` 或 `chown` 命令来更改文件的权限或所有权。例如，使用 `chown` 将文件的所有权更改为当前用户：
   ```bash
   sudo chown $(whoami) .git/config
   ```

3. **重新运行 Yarn**：
   在调整权限后，尝试再次运行 Yarn 命令：
   ```bash
   yarn
   ```

通过上述步骤，通常可以解决由于权限问题导致的 Yarn 依赖安装失败。如果问题依然存在，可以考虑检查其他相关文件的权限，或使用 `sudo` 来执行相关命令，但应谨慎使用，以避免潜在的权限问题。