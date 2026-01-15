const numberingEl = document.getElementById("numbering");
const testLine = document.createElement("span");
testLine.innerText = "1";
numberingEl.appendChild(testLine);

const lineHeight = testLine.getBoundingClientRect().height;
numberingEl.removeChild(testLine);

const viewportHeight = window.innerHeight;
const lineCount = Math.floor(viewportHeight / lineHeight);

let pageNumbering = "";
for (let i = 1; i <= lineCount; i++) {
    pageNumbering += i + "<br>";
}

numberingEl.innerHTML = pageNumbering;