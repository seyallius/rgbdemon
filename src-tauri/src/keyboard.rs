//! keyboard - exposes keyboard backlight commands to the Tauri frontend.

use tauri::command;

// -------------------------------------------- Public Functions --------------------------------------------

/// Sets the keyboard backlight configuration.
#[command]
pub fn set_keyboard_backlight(
    brightness: u8,
    mode: u8,
    red: u8,
    green: u8,
    blue: u8,
    speed: u8,
) -> Result<(), String> {
    // TODO: Implement sysfs writes here
    Ok(())
}
