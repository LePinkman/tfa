const section = document.querySelectorAll("section");
const nav = document.querySelector("nav__menu");
const navList = document.querySelectorAll(".nav__menu li");

const options = {
    threshold: "0.1"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
        if (e.isIntersecting) {
            navList.forEach(link => {
                link.classList.remove("active");
                if (e.target.id === link.dataset.nav) {
                    link.classList.add("active");
                }
            })
        }
    });

}, options);

section.forEach(section => {
    observer.observe(section);
})




var BurgOpenElement = document.querySelector(".burger__close");
var BurgElement = document.querySelector(".burger__lines");
var BurgNav = document.querySelector(".nav__menu");
BurgElement.addEventListener("click", Menuburger);
BurgNav.addEventListener("click", Menuburger);

function Menuburger() {
    BurgOpenElement.classList.toggle("burger__close");
    BurgElement.classList.toggle("burger__lines__croix");
}
