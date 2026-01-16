// Footer dynamic info
const yearEl = document.querySelector("#year");
const lastModifiedEl = document.querySelector("#lastModified");

yearEl.textContent = new Date().getFullYear();
lastModifiedEl.textContent = document.lastModified;

// Hamburger menu behavior (mobile)
const menuBtn = document.querySelector("#menuBtn");
const menu = document.querySelector("#menu");

function setMenu(open) {
    menu.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.textContent = open ? "✕" : "☰";
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

menuBtn.addEventListener("click", () => {
    const isOpen = menu.classList.contains("open");
    setMenu(!isOpen);
});

// Optional: close menu after clicking a link (mobile UX)
menu.addEventListener("click", (e) => {
    if (e.target.tagName === "A" && window.innerWidth < 760) {
        setMenu(false);
    }
});

// Optional: if resizing to large view, ensure menu isn't stuck hidden
window.addEventListener("resize", () => {
    if (window.innerWidth >= 760) {
        // large view uses CSS to show menu; keep state consistent
        setMenu(false);
    }
});
