#!/bin/bash
set -euo pipefail

echo "Stopping OpenClaw..."

# Try graceful termination first.
pkill -TERM -f "OpenClaw USB Clean" 2>/dev/null || true
pkill -TERM -x openclaw 2>/dev/null || true
pkill -TERM -x openclaw-gateway 2>/dev/null || true

sleep 2

# Force-kill any remaining processes.
pkill -KILL -f "OpenClaw USB Clean" 2>/dev/null || true
pkill -KILL -x openclaw 2>/dev/null || true
pkill -KILL -x openclaw-gateway 2>/dev/null || true

echo "OpenClaw has been stopped. It is now safe to remove the USB drive."
