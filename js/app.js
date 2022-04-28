(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    gsap.to(".overlay__title", 2, {
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut
    });
    gsap.to(".overlay__subtitle", 2, {
        delay: .3,
        opacity: 0,
        y: -60,
        ease: Expo.easeInOut
    });
    gsap.to(".overlay", 2, {
        delay: 1,
        top: "-100%",
        ease: Expo.easeInOut
    });
    gsap.from(".main-page__ellipses", 1, {
        delay: 2,
        opacity: 0
    });
    gsap.from(".ellipse__yellow", 1, {
        delay: 3.5,
        opacity: 0
    });
    gsap.from(".ellipse__circle-circle-1", 1, {
        delay: 2.4,
        opacity: 0
    });
    gsap.from(".ellipse__circle-circle-2", 1, {
        delay: 2.6,
        opacity: 0
    });
    gsap.from(".main-page__logo", 1, {
        delay: 3,
        opacity: 0,
        y: -100
    });
    gsap.from(".main-page__item", 1, {
        delay: 3,
        opacity: 0,
        x: -200,
        stagger: .1
    }, .08);
    gsap.from(".main-page__scrolldown", 1, {
        delay: 3.4,
        opacity: 0,
        y: 100
    });
    gsap.from(".main-page__title", 1, {
        delay: 3,
        opacity: 0,
        x: 200
    });
    gsap.from(".main-page__text", 1, {
        delay: 3.2,
        opacity: 0,
        x: 200
    });
    gsap.from(".main-page__watchnow", 1, {
        delay: 3.4,
        opacity: 0,
        x: 200
    });
    gsap.from(".main-page__media span", 1, {
        delay: 3,
        opacity: 0,
        y: 200,
        stagger: .1
    }, .08);
    window["FLS"] = true;
    isWebp();
})();