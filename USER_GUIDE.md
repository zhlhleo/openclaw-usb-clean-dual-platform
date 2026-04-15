# User Guide

## Overview

This package contains both platform launchers in one portable layout:

- Windows launcher
- Apple Silicon macOS launcher
- Shared OpenClaw payload
- Shared persistent data

## Directory Layout

- `OpenClaw USB Clean-0.1.0-Windows-Portable.exe`
- `Launch-OpenClaw-Mac.command`
- `Force-Quit-OpenClaw-Mac.command`
- `openclaw/`
- `runtime/`
- `mac-payload/`
- `openclaw-data/`
- `weixin-plugin.zip`

## Windows Usage

1. Open the package on Windows.
2. Double-click `OpenClaw USB Clean-0.1.0-Windows-Portable.exe`.
3. Complete first-time setup in the launcher.
4. On later runs, launch it directly the same way.

## macOS Usage

1. Open the package on an Apple Silicon Mac.
2. Double-click `Launch-OpenClaw-Mac.command`.
3. On the first run on a given Mac, the script will extract the local runtime cache.
4. On later runs on the same Mac, the script usually reuses the existing cache.
5. If the payload on the USB package changes, the script will automatically refresh the cache.

## macOS Local Cache Behavior

macOS creates a local cache here:

`~/Library/Caches/OpenClaw USB Clean Cache`

The cache contains the runnable macOS app and runtime.

Shared user data still stays in:

`openclaw-data/`

## Shared Data Behavior

The `openclaw-data/` directory is shared by both platforms.

The launchers repair platform-specific runtime values on startup so the package can move between Windows and macOS without keeping separate user data directories.

## If You Only Want One Platform

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

## Hardware Recommendations

- Minimum: `32GB`, `USB 3.0`
- Recommended: `64GB+`, `USB 3.0 / 3.1 / 3.2`
- For large workspaces: `128GB+`
- For best stability and speed: portable SSD

## Warnings

- Do not unplug the USB device while OpenClaw is running.
- The package should be treated as a portable runtime plus shared data store.
- On macOS, local cache files remain on each Mac that has used the package until they are manually removed.
