
const importmap = {
  "imports": {
    "@quel":       "https://cdn.jsdelivr.net/gh/mogera551/quel@latest/dist/quel.min.js",
    "@app/main":   "./src/main.sfc.html",
    "@app/states": "./src/states.js",
  }
};

const script = document.createElement("script");
script.type = "importmap";
script.textContent = JSON.stringify(importmap);
document.head.appendChild(script);
