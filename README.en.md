# OpenClaw USB Clean Dual Platform

A dual-platform portable OpenClaw package for Windows and Apple Silicon macOS.

[中文 README](./README.md)

## Download

For regular users, download the complete package from GitHub Releases:

- `openclaw-usb-clean-dual-platform.zip`

After downloading, unzip it to a USB drive, portable SSD, or local directory and run the launcher for your platform.

## Features

- One package for both Windows and macOS.
- Shared `openclaw-data/` across both platforms.
- Windows launcher runs directly from the package.
- macOS launcher uses a local runtime cache for better compatibility on `exFAT`.
- Shared OpenClaw payload.
- Shared WeChat plugin package.

## Included Files

- `OpenClaw USB Clean-0.1.0-Windows-Portable.exe`
  Windows launcher.
- `Launch-OpenClaw-Mac.command`
  macOS launcher entrypoint.
- `Force-Quit-OpenClaw-Mac.command`
  macOS force-stop helper.
- `openclaw/`
  Shared OpenClaw payload.
- `runtime/`
  Bundled Windows Node runtime.
- `mac-payload/`
  Archived macOS app payload and runtime cache source.
- `openclaw-data/`
  Shared persistent data directory.
- `weixin-plugin.zip`
  Shared WeChat plugin package.

## How It Works

### Windows

Run:

```bash
OpenClaw USB Clean-0.1.0-Windows-Portable.exe
```

The Windows launcher runs directly from the USB package and stores data in `openclaw-data/`.

### macOS

Run:

```bash
Launch-OpenClaw-Mac.command
```

The macOS launcher does not run the app directly from the USB package. Instead it:

1. Reads the payload from `mac-payload/`.
2. Builds or refreshes a local cache on the current Mac.
3. Launches the cached app locally.
4. Keeps shared data on the USB package in `openclaw-data/`.

Local cache path on macOS:

```bash
~/Library/Caches/OpenClaw USB Clean Cache
```

## Shared Data

`openclaw-data/` is shared between Windows and macOS.

This allows a user to:

1. Use the package on Windows.
2. Move to macOS with the same USB package.
3. Continue using the same configuration and session data.

## Platform Notes

### Windows

Recommended file systems:

- `NTFS`
- `exFAT` if you also want macOS-readable storage

### macOS

Recommended file system for a Mac-only package:

- `APFS`

For this dual-platform package:

- `exFAT` is recommended
- macOS uses the cached-launch approach to avoid running the app directly from the USB package

## Hardware Recommendations

- Minimum: `32GB`, `USB 3.0`
- Recommended: `64GB+`, `USB 3.0 / 3.1 / 3.2`
- For larger workspaces: `128GB+`
- Best stability: portable SSD

## Keep / Remove by Platform

### Keep Windows only

Keep:

- `OpenClaw USB Clean-0.1.0-Windows-Portable.exe`
- `runtime/`
- `openclaw/`
- `openclaw-data/`
- `weixin-plugin.zip`

You may remove:

- `Launch-OpenClaw-Mac.command`
- `Force-Quit-OpenClaw-Mac.command`
- `mac-payload/`

### Keep macOS only

Keep:

- `Launch-OpenClaw-Mac.command`
- `Force-Quit-OpenClaw-Mac.command`
- `mac-payload/`
- `openclaw/`
- `openclaw-data/`
- `weixin-plugin.zip`

You may remove:

- `OpenClaw USB Clean-0.1.0-Windows-Portable.exe`
- `runtime/`

## Important Notes

- The macOS build is unsigned.
- First macOS launch may require right-click Open or allowing the app in macOS Security settings.
- Do not remove `openclaw/`, `openclaw-data/`, or `weixin-plugin.zip` if you want both platforms to keep working.
- On macOS, local cache files remain on each Mac until manually removed.

## User Guide

See [USER_GUIDE.md](./USER_GUIDE.md) for the full guide.
