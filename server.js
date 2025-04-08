"use strict";
// Implementation
function log(message, param) {
    const logList = document.getElementById("logList");
    const li = document.createElement("li");
    let level = "info";
    let time = new Date().toLocaleTimeString();
    if (typeof param === "string") {
        level = param;
    }
    else if (param instanceof Date) {
        time = param.toLocaleTimeString();
    }
    li.textContent = `[${time}] ${level.toUpperCase()}: ${message}`;
    li.classList.add(level);
    logList.appendChild(li);
}
// DOM interaction
const btn = document.getElementById("logBtn");
const input = document.getElementById("messageInput");
const select = document.getElementById("levelSelect");
btn.addEventListener("click", () => {
    const msg = input.value.trim();
    const level = select.value;
    if (msg) {
        log(msg, level);
        input.value = "";
    }
});
