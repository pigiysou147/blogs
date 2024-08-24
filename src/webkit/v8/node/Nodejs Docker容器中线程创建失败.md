---
date: 2023-08-18
category: nodejs
tag:
  - dokcer
  - 安全
---
# Node.js Docker容器中线程创建失败

## 问题背景

在部署Node.js应用程序到Docker容器时，遇到了一个奇怪的问题。Node.js进程崩溃并且抛出了一个原生堆栈跟踪（native stack trace），显示了一个断言失败，这表明在创建worker线程时遇到了问题。具体的错误信息如下：

```plaintext
Native stack trace
1:0xcbc9a7 node::Assert(node::AssertionInfo const&)[node]
T
0xd3c44e node :: WorkerThreadsTaskRunner ::WorkerThreadsTaskRunner( int) 「node?
3
0xd3c52c node .: NodePlatform :: NodePlatform( int, v8 :.Tracingcontroller*, v8 :: PageAllocator*) [node]
4·
0xc707d7 [node
5.
0xc71d34 node::Start(int, char**)[node]
6:0x7f0c7244c24a
[/lib/x86_64-linux-gnu/libc.so.6]
7:0x7f0c7244c305
libc start main [/lib/x86 64-linux-gnu/libc.so.6]
8:0xbc6b6e start [node]
../src/node platform.cc:68
#node[1]: std:: unigue ptr<long unsigned int> node :: workerThreadsTaskRunner :: DelayedTaskscheduler : start() at
Assertion failed:(0)=(uv_thread_create(t.get(), start_thread, this))
```

这个错误发生的位置是在Node.js的内部实现中，具体是在`node::WorkerThreadsTaskRunner::DelayedTaskScheduler::start()`函数中。错误消息表明`uv_thread_create()`函数未能成功创建线程。

## 分析过程

### 线程创建失败的原因

通常情况下，这样的错误可能由多种原因引起，包括但不限于内存不足、操作系统级别的限制或者Docker容器的安全策略限制等。在深入调查之后，我们发现这个特定的问题是由Docker容器的资源限制所导致的。

### 资源限制与Seccomp

Docker通过名为Seccomp的安全机制来限制容器内的进程能够执行哪些系统调用。默认情况下，Seccomp配置会阻止一些不安全的系统调用，而这些调用对于Node.js的应用程序来说可能是必要的。在这种情况下，`uv_thread_create()`调用可能被阻止了，从而导致了上述错误。

## 解决方案

为了解决这个问题，我们需要允许容器执行所有必需的系统调用。可以通过向`docker run`命令添加`--security-opt seccomp=unconfined`参数来实现这一点。这会告诉Docker不要对容器应用任何Seccomp策略，从而允许所有的系统调用。

### 修改后的`docker run`命令

修改后的`docker run`命令如下所示：

```sh
docker run --security-opt seccomp=unconfined <other options> <image name>
```

docker compose写法如下：

```yaml
security_opt:    - seccomp=unconfined
```

### 应用示例

假设我们的Node.js应用程序镜像名称为`my-node-app`，并且我们已经定义了一些其他的运行选项（例如端口映射），则完整的`docker run`命令可能看起来像这样：

```sh
docker run --security-opt seccomp=unconfined -p 8080:8080 my-node-app
```

## 结论

通过这种方式，我们可以绕过Seccomp的限制，确保Node.js应用程序能够在Docker容器内正常运行。虽然这解决了当前的问题，但是需要注意的是，禁用Seccomp可能会增加容器的安全风险。因此，在生产环境中，我们建议仅在必要时才使用这种方法，并考虑更细粒度地控制Seccomp策略以满足应用程序的需求，同时保持一定的安全性。

详细参考官方文档：https://docs.docker.com/engine/security/seccomp/