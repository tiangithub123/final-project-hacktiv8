function toggle() {
    var header = document.getElementById("header");
    header.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll(".header-menu li a:not([href='#'])");
    for (var x = 0; x < links.length; x++) {
        links[x].onclick = function () {
            document.querySelector(".toggle").click();
        };
    }
});

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination: true,
        slideSpeed:1000,
        singleItem:true,
        transitionStyle:"fadeUp",
        autoPlay:true
    });
});

// Modal JavaScript
var imageContainers = document.querySelectorAll('.galery-flex img');
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal-content');
var closeModal = document.querySelector('.close');

imageContainers.forEach(function(imageContainer) {
  imageContainer.addEventListener('click', function() {
    modal.style.display = 'block';
    modalContent.src = imageContainer.src;
  });
});

closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

modal.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});