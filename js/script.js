/** menu mobile function */
function openNav() {
    document.querySelector("#nav-mobile").style.width = "100%";

}

function closeNav() {
    document.querySelector("#nav-mobile").style.width = "0%";
}

/** activate menu links */
const linksMenu = document.querySelectorAll(".navbar ul a");
linksMenu.forEach(ativarLink);

function ativarLink(link) {
    const url = location.href;
    const href = link.href;

    if (url.includes(href)) {
        link.classList.add("active");
    }
}

/** config own-carousel */
$('.owl-carousel').owlCarousel({
    autoHeight: true,
    autoplay: false,
    autoplayTimeout: 3000,
    loop: true,
    margin: 40,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});