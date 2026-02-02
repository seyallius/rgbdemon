# rgbdemon (definitely not daemon 👿)

A minimal, fast, and daemon-friendly **Asus RGB keyboard controller** for Linux, built with **Tauri + Rust + Vanilla JS
**.

No bloated Electron apps.
No Python runtime.
Just sysfs writes and vibes.

---

## ✨ Features

- 🎨 RGB color control
- 💡 Brightness levels (Off → High)
- 🌊 Modes: Static, Breathing, Color Cycle, Strobing*
- 🐢 Speed control
- ⚡ Instant apply (write-only, no polling)

> *Mode availability depends on your laptop firmware.*

---

## 🖥 Supported Devices

Tested on Asus TUF laptops using:

```

/sys/class/leds/asus::kbd_backlight/

````

If your laptop exposes:

- `kbd_rgb_mode`
- `kbd_rgb_state`
- `brightness`

...it should work.

---

## ⚠️ Important Notes

- Linux only
- Requires **write access to sysfs**
- Current values **cannot be read**, only set
- Use `udev` rules or run with proper permissions

---

## 🧠 How It Works

rgbdemon writes directly to:

```bash
/sys/class/leds/asus::kbd_backlight/kbd_rgb_mode
/sys/class/leds/asus::kbd_backlight/brightness
````

Example:

```bash
echo "1 2 255 0 255 1" > kbd_rgb_mode
```

---

## 🛠 Tech Stack

* 🦀 Rust (backend)
* 🪟 Tauri
* 🧼 Vanilla JS (no frameworks)
* 🎨 HTML / CSS

---

## 🚧 Status

- Frontend: ✅ (of course with help of AI - I'm no frontend dev)
- Rust backend: 🚧 (placeholders ready)

---

## 📜 License

[MIT](./LICENSE)
