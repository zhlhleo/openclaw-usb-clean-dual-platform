#!/bin/bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SHARED_ROOT="$SCRIPT_DIR"
PAYLOAD_DIR="$SHARED_ROOT/mac-payload"
MANIFEST_FILE="$PAYLOAD_DIR/manifest.env"

CACHE_ROOT="${OPENCLAW_CACHE_ROOT:-$HOME/Library/Caches/OpenClaw USB Clean Cache}"
APP_NAME="OpenClaw USB Clean.app"
APP_PATH="$CACHE_ROOT/$APP_NAME"
RUNTIME_ROOT="$CACHE_ROOT/runtime-mac"
MARKER_FILE="$CACHE_ROOT/payload-marker.txt"
LOG_FILE="$CACHE_ROOT/launcher.log"

if [ ! -f "$MANIFEST_FILE" ]; then
  echo "Missing macOS payload manifest: $MANIFEST_FILE"
  exit 1
fi

# shellcheck source=/dev/null
. "$MANIFEST_FILE"

mkdir -p "$CACHE_ROOT"

CURRENT_MARKER=""
if [ -f "$MARKER_FILE" ]; then
  CURRENT_MARKER="$(cat "$MARKER_FILE")"
fi

NEEDS_REFRESH=0
if [ "$CURRENT_MARKER" != "$PAYLOAD_MARKER" ]; then
  NEEDS_REFRESH=1
fi

if [ ! -x "$APP_PATH/Contents/MacOS/OpenClaw USB Clean" ]; then
  NEEDS_REFRESH=1
fi

if [ ! -x "$RUNTIME_ROOT/node" ]; then
  NEEDS_REFRESH=1
fi

if [ "$NEEDS_REFRESH" -eq 1 ]; then
  echo "Preparing the local macOS runtime cache..."
  rm -rf "$APP_PATH" "$RUNTIME_ROOT"
  tar -xzf "$PAYLOAD_DIR/$APP_ARCHIVE" -C "$CACHE_ROOT"
  tar -xzf "$PAYLOAD_DIR/$RUNTIME_ARCHIVE" -C "$CACHE_ROOT"
  printf '%s' "$PAYLOAD_MARKER" > "$MARKER_FILE"
fi

export OPENCLAW_SHARED_ROOT="$SHARED_ROOT"
export OPENCLAW_RUNTIME_ROOT="$RUNTIME_ROOT"

if [ "${OPENCLAW_BOOTSTRAP_DRY_RUN:-0}" = "1" ]; then
  echo "Dry run complete."
  echo "Shared data directory: $SHARED_ROOT/openclaw-data"
  echo "Local cache directory: $CACHE_ROOT"
  exit 0
fi

echo "Launching OpenClaw..."
nohup "$APP_PATH/Contents/MacOS/OpenClaw USB Clean" >> "$LOG_FILE" 2>&1 &
echo "OpenClaw started in the background."
echo "Shared data directory: $SHARED_ROOT/openclaw-data"
echo "Local cache directory: $CACHE_ROOT"
