---
name: wechat
description: "Control WeChat on Windows via WeChatFerry (wcf): send messages, auto-reply, get contacts, get chat history. Use when: user wants to send WeChat messages, auto-reply to customers, check WeChat contacts, or monitor WeChat chats. Requires WeChatFerry to be running."
metadata: { "openclaw": { "emoji": "💬", "requires": { "bins": ["C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe"], "env": [] } } }
---

# WeChat Skill (WeChatFerry)

Control WeChat on Windows using the WeChatFerry Python client.

## Prerequisites

WeChatFerry must be installed and WeChat must be running. Check status:
```powershell
C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe -c "from wcferry import Wcf; w = Wcf(); print('Connected:', w.is_login())"
```

If not installed, refer to the setup instructions below.

## Setup (First Time Only)

### 1. Install WeChatFerry
```powershell
pip install wcferry
```

### 2. Start WeChatFerry service (WeChat must be open and logged in)
```powershell
C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe -c "from wcferry import Wcf; w = Wcf(); input('Press Enter to stop...')"
```

## Commands

### Check login status
```C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe
from wcferry import Wcf
w = Wcf(debug=False)
print("Logged in:", w.is_login())
print("Self wxid:", w.get_self_wxid())
w.cleanup()
```

### Get contacts list
```C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe
from wcferry import Wcf
w = Wcf(debug=False)
contacts = w.get_contacts()
for c in contacts[:20]:
    print(f"{c['name']} ({c['wxid']})")
w.cleanup()
```

### Send message to a contact
```C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe
from wcferry import Wcf
w = Wcf(debug=False)
# wxid can be: "filehelper" (file assistant), "wxid_xxx", or group id ending in @chatroom
w.send_text("Hello!", "filehelper")
w.cleanup()
```

### Send message to a group
```C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe
from wcferry import Wcf
w = Wcf(debug=False)
# Group IDs end with @chatroom
w.send_text("Hello group!", "12345678901@chatroom")
w.cleanup()
```

### Send image
```C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe
from wcferry import Wcf
w = Wcf(debug=False)
w.send_image("C:/path/to/image.png", "filehelper")
w.cleanup()
```

### Get recent messages (receive mode)
```C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe
from wcferry import Wcf
import time
w = Wcf(debug=False)
w.enable_receiving_msg()
for i in range(10):  # Check for 10 seconds
    msg = w.get_msg()
    if msg:
        print(f"From: {msg.sender}, Content: {msg.content}")
    time.sleep(1)
w.cleanup()
```

### Search contact by name
```C:\Users\Administrator\AppData\Local\Programs\Python\Python313\python.exe
from wcferry import Wcf
w = Wcf(debug=False)
contacts = w.get_contacts()
keyword = "客户名字"
results = [c for c in contacts if keyword in c.get('name', '')]
for c in results:
    print(f"{c['name']} - wxid: {c['wxid']}")
w.cleanup()
```

## Auto-Reply Workflow

When user asks to auto-reply to WeChat customers:
1. Get recent messages to see who needs a reply
2. Read the message content
3. Generate an appropriate reply
4. Send the reply using `send_text`

## Important Notes

- WeChat must be open and logged in on this machine
- WeChatFerry hooks into WeChat process (Windows only)
- Do NOT spam messages — WeChat may ban accounts
- Groups IDs end with `@chatroom`
- Personal wxid starts with `wxid_`
- "filehelper" is WeChat's own File Transfer assistant (safe for testing)
- Always call `w.cleanup()` after operations
