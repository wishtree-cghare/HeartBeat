const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");

/*-------------------------------------------------------
                Header Tabs
----------------------------------------------------------*/

$('.header-tabs').responsiveTabs({
    startCollapsed: 'accordion',
    // animation: 'slide'
  });


// active nav links

$(function(){
  $('.link').each(function(){
      if ($(this).prop('href') == window.location.href) {
          // $(this).addClass('active'); $(this).parents('li').addClass('active');
          $(this).css({
            "color":"#FC3990",
            "border-bottom": "2px solid #FC3990"
          })
      }
  });
});



// collapsible on plus minus
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("collapsible-active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

// Slide the contents
$(function () {
  $("#features").owlCarousel({
    items:3,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<img src='img/down-arrow.jpg'>",

      "<img src='img/up-arrow.jpg'>",
    ],
    
  });
});

// heartbeat tem members slide
$(function () {
  $("#heartbeat-team").owlCarousel({
    items:3,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      "<img src='img/down-arrow.jpg'>",

      "<img src='img/up-arrow.jpg'>",
    ],
    
  });
});

//show sidebar
navBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});


