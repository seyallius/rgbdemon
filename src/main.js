const {invoke} = window.__TAURI__.tauri;

const state = {
    brightness: 2,
    mode: 0,
    speed: 0,
    color: "#ff004c",
};

// -------------------------------- Helpers --------------------------------

function hexToRgb(hex) {
    hex = hex.replace("#", "");
    return {
        red: parseInt(hex.slice(0, 2), 16),
        green: parseInt(hex.slice(2, 4), 16),
        blue: parseInt(hex.slice(4, 6), 16),
    };
}

function bindGroup(id, key) {
    document.querySelectorAll(`#${id} button`).forEach(btn => {
        btn.addEventListener("click", () => {
            document
                .querySelectorAll(`#${id} button`)
                .forEach(b => b.classList.remove("active"));

            btn.classList.add("active");
            state[key] = Number(btn.dataset.value);
        });
    });
}

// -------------------------------- Bindings --------------------------------

bindGroup("brightness", "brightness");
bindGroup("mode", "mode");

document.getElementById("speed").addEventListener("input", e => {
    state.speed = Number(e.target.value);
});

document.getElementById("color").addEventListener("input", e => {
    state.color = e.target.value;
    document.documentElement.style.setProperty("--accent", e.target.value);
});

// -------------------------------- Action --------------------------------

document.getElementById("apply").addEventListener("click", async () => {
    const rgb = hexToRgb(state.color);

    await invoke("set_keyboard_backlight", {
        brightness: state.brightness,
        mode: state.mode,
        speed: state.speed,
        ...rgb,
    });
});
