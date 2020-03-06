const selectTab = e => {
  console.log(e);
  console.log(e.getAttribute("for"));
  const tabLinks = document.getElementsByClassName("tab-link");
  console.log(tabLinks);
  Array.from(tabLinks).forEach(tl => {
    if (tl !== e) tl.classList.remove("selected");
  });
  e.classList.add("selected");

  const tabs = document.getElementsByClassName("tab");
  Array.from(tabs).forEach(t => {
    console.log(t.getAttribute("id"));
    if (t.getAttribute("id") !== e.getAttribute("for")) {
      t.classList.add("tab-closed");
      t.classList.remove("tab-open");
      console.log("TEST");
    } else {
      t.classList.remove("tab-closed");
      t.classList.add("tab-open");
    }
  });
};

// Select DOM items
const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-item");
// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    navbar.classList.remove("collapsed");
    navItems.forEach(item => item.classList.add("show"));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    navbar.classList.add("collapsed");
    navItems.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;
  }
}
