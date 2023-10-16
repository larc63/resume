
const setInnerText = (elementId, text) => {
    const e = document.getElementById(elementId);
    if (e) {
        e.innerText = text;
    }
}

const setInnerHTML = (elementId, html) => {
    const e = document.getElementById(elementId);
    if (e) {
        e.innerHTML = html;
    }
}

