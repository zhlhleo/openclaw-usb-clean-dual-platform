# OpenClaw USB Clean Dual Platform

Dual-platform portable OpenClaw package for:

- Windows
- Apple Silicon macOS

This repository is organized as a ready-to-share USB package layout.

## Included

- `OpenClaw USB Clean-0.1.0-Windows-Portable.exe`: Windows launcher
- `Launch-OpenClaw-Mac.command`: macOS launcher entrypoint
- `Force-Quit-OpenClaw-Mac.command`: macOS force-stop helper
- `openclaw/`: shared OpenClaw payload
- `runtime/`: bundled Windows Node runtime
- `mac-payload/`: archived macOS app payload and runtime cache source
- `openclaw-data/`: shared persistent data directory
- `weixin-plugin.zip`: shared WeChat plugin package

## How It Works

### Windows

Run:

`OpenClaw USB Clean-0.1.0-Windows-Portable.exe`

The launcher runs directly from the USB package and stores data in `openclaw-data/`.

### macOS

Run:

`Launch-OpenClaw-Mac.command`

The macOS launcher does not run the app directly from the USB package. Instead, it:

1. Reads `mac-payload/`
2. Builds or refreshes a local cache on the current Mac
3. Launches the cached app locally
4. Keeps shared data on the USB package in `openclaw-data/`

Local cache path on macOS:

`~/Library/Caches/OpenClaw USB Clean Cache`

## Shared Data

`openclaw-data/` is shared between Windows and macOS.

That means a user can:

1. Use the package on Windows
2. Move to macOS with the same USB package
3. Continue using the same configuration and session data

## File System Recommendations

- Windows-only: `NTFS`
- macOS-only: `APFS`
- Dual-platform single-drive package: `exFAT`

For the dual-platform `exFAT` setup, macOS uses the cached-launch approach described above.

## Notes

- The macOS build is unsigned.
- The first macOS launch may require right-click Open or an allow action in macOS Security settings.
- Do not remove `openclaw/`, `openclaw-data/`, or `weixin-plugin.zip` if you want both platforms to keep working.

## More Details

See `USER_GUIDE.md` for the full usage guide.
