---
name: screenshot
description: "Take a screenshot of the Windows desktop and send it to the user via Telegram. Use when: user asks for a screenshot, screen capture, 'what does my screen look like', or wants to see what's on the computer screen. NOT for: camera snapshots (use camsnap), or recording video."
metadata: { "openclaw": { "emoji": "📸", "requires": { "bins": ["powershell"] } } }
---

# Screenshot Skill

Capture the Windows desktop screen and send the image to the user.

## When to Use

✅ **USE this skill when:**
- "Take a screenshot"
- "Screenshot my screen"
- "What's on my screen?"
- "Capture the desktop"
- "Show me what the computer looks like"

## When NOT to Use

❌ **DON'T use this skill when:**
- User wants a camera photo → use camsnap
- User wants to record video
- User asks for a specific window (not supported yet)

## How to Take a Screenshot

### Full screen (primary monitor)
```powershell
powershell -ExecutionPolicy Bypass -File "F:\openclaw\skills\screenshot\screenshot.ps1"
```

This outputs the file path of the saved PNG. Example output:
```
C:\Users\Administrator\AppData\Local\Temp\screenshot_20260308_164512.png
```

### Specific monitor (0 = primary, 1 = second monitor)
```powershell
powershell -ExecutionPolicy Bypass -File "F:\openclaw\skills\screenshot\screenshot.ps1" -Monitor 1
```

### Custom output path
```powershell
powershell -ExecutionPolicy Bypass -File "F:\openclaw\skills\screenshot\screenshot.ps1" -Output "C:\Users\Administrator\Desktop\snap.png"
```

## After Taking Screenshot

After running the command, you will get a file path. Use the `send_file` or file attachment capability to send this image to the user via Telegram:

1. Run the screenshot command → get file path
2. Send the file to the user using the message tool with the file path

## Notes

- Screenshot is saved as PNG in the system temp folder
- File is named `screenshot_YYYYMMDD_HHmmss.png`
- Captures the entire monitor including taskbar
- Multiple monitors: use `-Monitor 0`, `-Monitor 1`, etc.
