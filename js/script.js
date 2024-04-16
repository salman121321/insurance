//  Owl Carousel
$(".owl-carousel").owlCarousel({
  autoplay: true,
  center: true,
  items: 2,
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
});

document.querySelectorAll(".flip-container").forEach((elemet) => {
  elemet.addEventListener("mouseover", () => {
    var card = document.getElementById(elemet.getAttribute("data-card"));
    card.style.transform = "rotateY(180deg)";
  });

  elemet.addEventListener("mouseleave", () => {
    var card = document.getElementById(elemet.getAttribute("data-card"));
    card.style.transform = "rotateY(0deg)";
  });
});

// WOW JS
new WOW().init();

//  Accordian Script close one when open another script start
var accordion = function () {
  $(".tn_accordion-header").on("click", function () {
    var nextBody = $(this).next(".tn_accordion-body");
    nextBody.slideToggle();
    $(".tn_accordion-body").not(nextBody).slideUp();
    $(this).toggleClass("active");
    $(".tn_accordion-header").not(this).removeClass("active");
  });
};
accordion();
// Accordian close one when open another script end
// about us counter start
let count = 0;
const maxCount = 40;
const counterDiv = document.getElementById("counterabout");
const updateCounter = () => {
  count++;
  counterDiv.innerText = count;

  if (count < maxCount) {
    setTimeout(updateCounter, 50);
  }
};
updateCounter();
// about us counter end
// about testimonial start
$(document).ready(function () {
  new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 3,
    paginationClickable: true,
    pagination: ".swiper-pagination",
    paginationClickable: true,
    breakpoints: {
      1920: {
        slidesPerView: 3,
      },
      1028: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 1,
      },
    },
  });
});
// about testimonial end
