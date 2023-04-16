
let menu: HTMLElement;
let menuButton: HTMLElement;

let menuOpen = false;

function setMenuOpen(v: boolean){
    menuOpen = v;
    syncMenu();
}
function toggleMenu(){
    menuOpen = !menuOpen;
    syncMenu();
}

function syncMenu(){
    menu.classList.remove("init");

    menu.classList.toggle("hidden", !menuOpen);
    menuButton.classList.toggle("open", menuOpen);
}

export function initMenu(){
    menu = document.getElementById("menu") as HTMLElement;
    menuButton = document.getElementById("menu-button") as HTMLElement;
    let canvas = document.getElementById("canvas") as HTMLElement;

    menuButton.addEventListener("click", () => toggleMenu());
    canvas.addEventListener("click", () => setMenuOpen(false));

    let items = document.querySelectorAll(".menu-item");
    items.forEach(item => {
        item.addEventListener("click", () => setMenuOpen(false));
    });
    

    
    syncMenu();
}