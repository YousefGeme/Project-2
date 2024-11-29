let open = document.getElementById("open");
let close = document.getElementById("close");
let nav = document.querySelector(".nav-list");

close.style.display = "none";
nav.style.width = "0";


function toggle() {
    inp.style.height = "0px"
    searcheic.style.display = "block"
    closesearche.style.display = "none"

    if (nav.style.width === "0px" || nav.style.width === "") {
        nav.style.width = "50%";
        open.style.display = "none";
        close.style.display = "block";
    } else {
        nav.style.width = "0";
        open.style.display = "block";
        close.style.display = "none";
    }
}

window.addEventListener("resize", () => {
    nav.style.width = "0";
    open.style.display = "block";
    close.style.display = "none";
})

//searche
let closesearche = document.getElementById("close-searche")
let searcheic = document.getElementById("searche-ic")
let inp = document.getElementById("inp")

closesearche.style.display = "none"


function serche() {
    nav.style.width = "0";
    open.style.display = "block";
    close.style.display = "none";

    if (inp.style.height === "0px" || inp.style.height === "") {
        inp.style.height = "30px"
        searcheic.style.display = "none"
        closesearche.style.display = "block"
    }
    else {
        inp.style.height = "0px"
        searcheic.style.display = "block"
        closesearche.style.display = "none"
    }
}

window.addEventListener("resize", () => {
    inp.style.height = "0px"
    searcheic.style.display = "block"
    closesearche.style.display = "none"
})

window.addEventListener("scroll", () => {
    inp.style.height = "0px"
    searcheic.style.display = "block"
    closesearche.style.display = "none"
})

//counter
let container = document.querySelector(".container");
let counter = document.querySelectorAll(".card-foot .counter");
let start = false;
window.onscroll = function () {
    if (window.scrollY >= container.offsetTop) {
        if (!start) {
            counter.forEach((num) => startCount(num));
        }
        start = true
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 3000 / goal);
}

//swiper
var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
});


//team swiper
var swiper = new Swiper(".mmySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 4000,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 5
        }
    }
});