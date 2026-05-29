# OpenClaw USB Clean 双平台便携包

这是一个面向 Windows 和 Apple Silicon macOS 的 OpenClaw 双平台便携包。仓库内容按照可直接复制到 U 盘或移动硬盘的结构整理，用户可以在 Windows 与 macOS 之间共用同一份 `openclaw-data/` 数据目录。

[English README](./README.en.md)

## 下载

推荐从 GitHub Releases 下载完整 ZIP 包：

- [点击下载完整 ZIP 包：openclaw-usb-clean-dual-platform.zip](https://github.com/zhlhleo/openclaw-usb-clean-dual-platform/releases/download/v0.1.0/openclaw-usb-clean-dual-platform.zip)

也可以打开 [Release 页面](https://github.com/zhlhleo/openclaw-usb-clean-dual-platform/releases/tag/v0.1.0)，在 `Assets` 区域下载 ZIP。

下载后解压到 U 盘、移动硬盘或本地目录即可使用。仓库源码页也包含完整文件结构，但 Releases 中的 ZIP 更适合普通用户直接下载和分发。

## 功能特点

- 同一个包同时支持 Windows 和 Apple Silicon macOS。
- Windows 端可直接运行便携版启动器。
- macOS 端使用本地缓存机制，避免直接从 `exFAT` U 盘运行应用导致的兼容性问题。
- Windows 和 macOS 共用 `openclaw-data/`，便于在不同设备之间继续使用同一份配置和会话数据。
- 内置 OpenClaw 主程序、运行时和微信插件包。
- 可按需删除某个平台不需要的文件，保留单平台版本。

## 支持平台

- Windows x64
- Apple Silicon macOS

macOS 版本未签名，首次运行时可能需要右键打开，或在系统安全设置中允许该应用运行。

## 文件结构

| 路径 | 说明 |
| --- | --- |
| `OpenClaw USB Clean-0.1.0-Windows-Portable.exe` | Windows 便携启动器 |
| `Launch-OpenClaw-Mac.command` | macOS 启动脚本 |
| `Force-Quit-OpenClaw-Mac.command` | macOS 强制退出辅助脚本 |
| `openclaw/` | OpenClaw 主程序文件 |
| `runtime/` | Windows 端内置 Node.js 运行时 |
| `mac-payload/` | macOS 应用和运行时缓存源文件 |
| `openclaw-data/` | Windows 与 macOS 共用的数据目录 |
| `weixin-plugin.zip` | 微信插件包 |
| `USER_GUIDE.md` | 英文用户指南 |

## Windows 使用方法

1. 将完整目录解压或复制到目标位置。
2. 双击运行 `OpenClaw USB Clean-0.1.0-Windows-Portable.exe`。
3. 按启动器提示完成首次配置。
4. 后续使用时继续运行同一个 `.exe` 文件即可。

Windows 端会直接使用当前目录中的文件，并将数据保存在 `openclaw-data/` 中。

## macOS 使用方法

1. 将完整目录解压或复制到目标位置。
2. 双击运行 `Launch-OpenClaw-Mac.command`。
3. 如果系统阻止运行，请右键该脚本并选择“打开”，或在系统安全设置中允许它运行。
4. 首次在某台 Mac 上运行时，脚本会将 macOS 应用和运行时解压到本机缓存。
5. 后续在同一台 Mac 上运行时，通常会复用已有缓存。

macOS 本地缓存路径：

```bash
~/Library/Caches/OpenClaw USB Clean Cache
```

共享数据仍然保存在当前包内的：

```bash
openclaw-data/
```

## 工作原理

Windows 端从当前目录直接启动便携程序，并读取同目录下的 OpenClaw 文件、运行时和共享数据。

macOS 端不会直接从 U 盘运行应用，而是：

1. 读取 `mac-payload/` 中的压缩载荷。
2. 在当前 Mac 上创建或刷新本地缓存。
3. 从本地缓存启动 macOS 应用。
4. 继续把用户数据保存在包内的 `openclaw-data/`。

这种方式更适合双平台 U 盘，尤其是使用 `exFAT` 文件系统时。

## 存储设备建议

- 最低：`32GB`、`USB 3.0`
- 推荐：`64GB+`、`USB 3.0 / 3.1 / 3.2`
- 大型工作区：`128GB+`
- 更稳定的选择：移动固态硬盘

## 文件系统建议

如果只在 macOS 使用，推荐 `APFS`。

如果需要 Windows 和 macOS 共用同一个盘，推荐 `exFAT`。macOS 启动脚本已经采用本地缓存机制，以减少直接从 `exFAT` 运行应用时可能遇到的问题。

## 只保留单个平台

### 只保留 Windows

保留：

- `OpenClaw USB Clean-0.1.0-Windows-Portable.exe`
- `runtime/`
- `openclaw/`
- `openclaw-data/`
- `weixin-plugin.zip`

可以删除：

- `Launch-OpenClaw-Mac.command`
- `Force-Quit-OpenClaw-Mac.command`
- `mac-payload/`

### 只保留 macOS

保留：

- `Launch-OpenClaw-Mac.command`
- `Force-Quit-OpenClaw-Mac.command`
- `mac-payload/`
- `openclaw/`
- `openclaw-data/`
- `weixin-plugin.zip`

可以删除：

- `OpenClaw USB Clean-0.1.0-Windows-Portable.exe`
- `runtime/`

## 注意事项

- 不要在 OpenClaw 运行时拔出 U 盘或移动硬盘。
- 不要删除 `openclaw/`、`openclaw-data/` 或 `weixin-plugin.zip`，否则双平台使用可能失效。
- macOS 本地缓存会保留在每台运行过该包的 Mac 上，需要时可手动清理。
- macOS 应用未签名，首次运行可能需要手动允许。

## 用户指南

更多细节请查看 [USER_GUIDE.md](./USER_GUIDE.md)。
