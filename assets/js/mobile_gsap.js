var section1Top = document.querySelector(".section1").offsetTop - 50;
var section2Top = document.querySelector(".section2").offsetTop / 2;
var section3Top = document.querySelector(".section3").offsetTop / 1.5;
var section4Top = document.querySelector(".section4").offsetTop / 1.5;
var section5Top = document.querySelector(".section5").offsetTop / 1.3;
var section6Top = document.querySelector(".section6").offsetTop / 1.1;
var section8Top = document.querySelector(".section8").offsetTop / 1.1;
var articleBox1 = document.querySelector(".articleBox1").offsetTop;
var articleBox2 = document.querySelector(".articleBox2").offsetTop / 1.1;
var articleBox3 = document.querySelector(".articleBox3").offsetTop / 1.1;
var articleBox4 = document.querySelector(".articleBox4").offsetTop / 1.1;
var articleBox5 = document.querySelector(".articleBox5").offsetTop / 1.1;

//section1
setTimeout(function () {
    let tl = gsap.timeline();
    gsap.to(".section1 .sec1_bg", {
        opacity: 1,
        duration: 2,
    });
    gsap.to(".section1 .text_box p:nth-child(7)", {
        opacity: 1,
        y: 0,
    });
    gsap.to(".section1 .text_box p:nth-child(6)", {
        opacity: 1,
        y: 0,
    });
    gsap.to(".section1 .text_box p:nth-child(1)", {
        opacity: 1,
        x: 0,
        duration: 1,
    });
    gsap.to(".section1 .text_box p:nth-child(2)", {
        opacity: 1,
        x: 0,
        duration: 1.25,
    });
    gsap.to(".section1 .text_box p:nth-child(3)", {
        opacity: 1,
        x: 0,
        duration: 1.5,
    });
    gsap.to(".section1 .text_box p:nth-child(4)", {
        opacity: 1,
        x: 0,
        duration: 1.75,
    });
    gsap.to(".section1 .text_box p:nth-child(5)", {
        opacity: 1,
        x: 0,
        duration: 2,
    });
}, 1000);

//scroll animation
window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    //section2
    if (scrollTop > section2Top) {
        gsap.to(".section2 h2", {
            opacity: 1,
            y: 0,
            duration: 1.5,
        });
    }
    //section3
    if (scrollTop > section3Top) {
        gsap.to(".section3 h2", {
            opacity: 1,
            y: 0,
            duration: 1,
        });
        gsap.to(".section3 .bottom_arrow", {
            opacity: 1,
            y: 0,
            delay: 0.5,
        });
    }
    //section4
    if (scrollTop > section4Top) {
        let adj = document.querySelector(".section4.adj");
        adj.classList.add("show");
    }
    //section5
    if (scrollTop > section5Top) {
        let adj = document.querySelector(".section5.adj");
        adj.classList.add("show");
    }
    //section6
    if (scrollTop > section6Top) {
        let adj = document.querySelector(".section6.adj");
        adj.classList.add("show");
    }
    //section8
    if (scrollTop > section8Top) {
        gsap.to(".section8 h2", {
            opacity: 1,
            y: 0,
        });
        gsap.to(".section8 .bottom_arrow", {
            opacity: 1,
            y: 0,
            delay: 0.5,
        });
    }
    if (scrollTop > articleBox1) {
        gsap.to(".articleBox1", {
            opacity: 1,
        });
    }
    if (scrollTop > articleBox2) {
        gsap.to(".articleBox2", {
            opacity: 1,
        });
    }
    if (scrollTop > articleBox3) {
        gsap.to(".articleBox3", {
            opacity: 1,
        });
    }
    if (scrollTop > articleBox4) {
        gsap.to(".articleBox4", {
            opacity: 1,
        });
    }
    if (scrollTop > articleBox5) {
        gsap.to(".articleBox5", {
            opacity: 1,
        });
    }
});
