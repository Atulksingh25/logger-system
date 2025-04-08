 type LogLevel = "info" | "warning" | "error";

// Function overloading declarations
function log(message: string): void;
function log(message: string, level: LogLevel): void;
function log(message: string, timestamp: Date): void;

// Implementation
function log(message: string, param?: LogLevel | Date): void {
  const logList = document.getElementById("logList") as HTMLUListElement;
  const li = document.createElement("li");

  let level: LogLevel = "info";
  let time = new Date().toLocaleTimeString();

  if (typeof param === "string") {
    level = param;
  } else if (param instanceof Date) {
    time = param.toLocaleTimeString();
  }

  li.textContent = `[${time}] ${level.toUpperCase()}: ${message}`;
  li.classList.add(level);
  logList.appendChild(li);
}

// DOM interaction
const btn = document.getElementById("logBtn") as HTMLButtonElement;
const input = document.getElementById("messageInput") as HTMLInputElement;
const select = document.getElementById("levelSelect") as HTMLSelectElement;

btn.addEventListener("click", () => {
  const msg = input.value.trim();
  const level = select.value as LogLevel;

  if (msg) {
    log(msg, level);
    input.value = "";
  }
});
