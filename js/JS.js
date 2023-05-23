
let lis = document.querySelectorAll(".nav-item");

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
    // Remove Active Class From all Lis
    lis.forEach((li) => {
    li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
});
});

let liServ = document.querySelectorAll(".serv-item");

liServ.forEach((li) => {
    li.addEventListener("click", (e) => {
    // Remove Active Class From all Lis
    liServ.forEach((li) => {
    li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
});
});

let liGall = document.querySelectorAll(".gallery-link");

liGall.forEach((a) => {
    a.addEventListener("click", (e) => {
    // Remove Active Class From all Lis
    liGall.forEach((a) => {
    a.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
});
});

// Add is-visible Class To Current image

let image = document.querySelectorAll(".image");
image.forEach((image)=> {
    image.addEventListener("click", e => {
    let Slider = document.querySelector(".gallerySlider");
    Slider.classList.add("is-Visible");
});
});
document.addEventListener("click", e => {
    if (e.target == document.querySelector(".gallerySlider.is-Visible")) {
    document.querySelector(".gallerySlider.is-Visible").classList.remove("is-Visible");
    }
});

// Add is-visible Class To click subscribeNow
const openEls = document.querySelectorAll("[data-open]");
const isVisible = "is-Visible";

for (const el of openEls) {
    el.addEventListener("click", function() {
    let bg = document.querySelector(".bg");
    bg.classList.add("is-Visible");
    });
};

document.addEventListener("click", e => {
    if (e.target == document.querySelector(".bg.is-Visible")) {
    document.querySelector(".bg.is-Visible").classList.remove(isVisible);
    }
});
// زر غلاق اشترك الان
let closeBtn = document.querySelector(".CloseBtn");
        closeBtn.addEventListener("click", function(){
        document.querySelector(".bg").classList.remove(isVisible);
    });
//  زر الصعود الى اعلى الصفحة
let span = document.querySelector(".up");
window.onscroll = function(){
    if (this.scrollY >= 800){
        span.classList.add("show");
    }else {
        span.classList.remove("show");
    };
};
span.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior :"smooth",
    });
};