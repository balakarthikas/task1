/* MENU TOGGLE */
$('.side-widget .site-menu ul li a').on('click', function(e) {
    $(this).parent().children('.side-widget .site-menu ul li ul').toggle();
    return true;
});


// SEARCH BOX
$('.navbar .search-button').on('click', function(e) {
    $(this).toggleClass('open');
    $(".search-box").toggleClass('active');
});


// HAMBURGER MENU
$('.hamburger-menu').on('click', function(e) {
    $(this).toggleClass('open');
    $(".side-widget").toggleClass('active');
});


// PAGE TRANSITION
$('body a').on('click', function(e) {

    var target = $(this).attr('target');
    var fancybox = $(this).data('fancybox');
    var url = this.getAttribute("href");
    if (target != '_blank' && typeof fancybox == 'undefined' && url.indexOf('#') < 0) {


        e.preventDefault();
        var url = this.getAttribute("href");
        if (url.indexOf('#') != -1) {
            var hash = url.substring(url.indexOf('#'));


            if ($('body ' + hash).length != 0) {
                $('.page-transition').removeClass("active");


            }
        } else {
            $('.page-transition').toggleClass("active");
            setTimeout(function() {
                window.location = url;
            }, 1000);

        }
    }
});


// MAIN SLIDER
var swiper = new Swiper('.main-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    speed: 600,
    loop: 'true',
    touchRatio: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        prevEl: '.button-prev',
        nextEl: '.button-next',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// SIDE SLIDER
var swiper = new Swiper('.side-slider .slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    loop: 'true',
    speed: 600,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// EXPERTS SLIDER
var swiper = new Swiper('.experts-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    loop: 'true',
    speed: 600,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



// HIGHLIGHT SLIDER
var swiper = new Swiper('.highlight-slider', {
    slidesPerView: '1',
    spaceBetween: 0,
    speed: 600,
    touchRatio: 0,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.custom-pagination',
        clickable: true,
        renderBullet: function(index, className) {
            return '<span class="' + className + '">0' + (index + 1) + '</span>';
        },
    },
});




// CAROUSEL IMAGE BOX
var swiper = new Swiper('.carousel-image-box', {
    slidesPerView: '4',
    spaceBetween: 40,
    speed: 600,
    //touchRatio: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});



// CAROUSEL TESTIMONIALS 
var swiper = new Swiper('.carousel-testimonials', {
    slidesPerView: '2',
    spaceBetween: 0,
    speed: 600,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
    }
});





// DATA BACKGROUND IMAGE
var pageSection = $("*");
pageSection.each(function(indx) {
    if ($(this).attr("data-background")) {
        $(this).css("background", "url(" + $(this).data("background") + ")");
    }
});

// DATA BACKGROUND COLOR
var pageSection = $("*");
pageSection.each(function(indx) {
    if ($(this).attr("data-background")) {
        $(this).css("background", $(this).data("background"));
    }
});


// STELLAR PARALLAX
$.stellar({
    horizontalOffset: 0,
    verticalOffset: 0
});




// COUNTER
$(document).scroll(function() {
    $('.odometer').each(function() {
        var parent_section_postion = $(this).closest('section').position();
        var parent_section_top = parent_section_postion.top;
        if ($(document).scrollTop() > parent_section_top - 300) {
            if ($(this).data('status') == 'yes') {
                $(this).html($(this).data('count'));
                $(this).data('status', 'no');
            }
        }
    });
});



// PRELOADER
$(window).load(function() {
    $("body").addClass("page-loaded");
});
// own
var mySwiper = new Swiper('.swiper-container', {
    loop: true,
  
    breakpoints: {
      1024: {
        slidesPerView: 3,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 15
      },
      500: {
        slidesPerView: 1
      },
    },
  
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
window.addEventListener("load", () => {
    var carousels = document.querySelectorAll(".carousel");
    for (var i = 0; i < carousels.length; i++) {
      carousel(carousels[i]);
    }
  });
  
  function carousel(root) {
    var figure = root.querySelector("figure"),
      nav = root.querySelector("nav"),
      images = figure.children,
      n = images.length,
      gap = root.dataset.gap || 0,
      bfc = "bfc" in root.dataset,
      theta = (2 * Math.PI) / n,
      currImage = 0;
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener("resize", () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    });
  
    setupNavigation();
  
    function setupCarousel(n, s) {
      var apothem = s / (2 * Math.tan(Math.PI / n));
      figure.style.transformOrigin = `50% 50% ${-apothem}px`;
  
      for (var i = 0; i < n; i++) images[i].style.padding = `${gap}px`;
      for (i = 1; i < n; i++) {
        images[i].style.transformOrigin = `50% 50% ${-apothem}px`;
        images[i].style.transform = `rotateY(${i * theta}rad)`;
      }
      if (bfc)
        for (i = 0; i < n; i++) images[i].style.backfaceVisibility = "hidden";
  
      rotateCarousel(currImage);
    }
  
    function setupNavigation() {
      nav.addEventListener("click", onClick, true);
  
      function onClick(e) {
        e.stopPropagation();
  
        var t = e.target;
        if (t.tagName.toUpperCase() != "BUTTON") return;
  
        if (t.classList.contains("next")) {
          currImage++;
        } else {
          currImage--;
        }
  
        rotateCarousel(currImage);
      }
    }
  
    function rotateCarousel(imageIndex) {
      figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
  }
  $(document).ready(function () {
    //rotation speed and timer
    var speed = 5000;
    
    var run = setInterval(rotate, speed);
    var slides = $('.slide');
    var container = $('#slides ul');
    var elm = container.find(':first-child').prop("tagName");
    var item_width = container.width();
    var previous = 'prev'; //id of previous button
    var next = 'next'; //id of next button
    slides.width(item_width); //set the slides to the correct pixel width
    container.parent().width(item_width);
    container.width(slides.length * item_width); //set the slides container to the correct total width
    container.find(elm + ':first').before(container.find(elm + ':last'));
    resetSlides();
    
    
    //if user clicked on prev button
    
    $('#buttons a').click(function (e) {
        //slide the item
        
        if (container.is(':animated')) {
            return false;
        }
        if (e.target.id == previous) {
            container.stop().animate({
                'left': 0
            }, 1500, function () {
                container.find(elm + ':first').before(container.find(elm + ':last'));
                resetSlides();
            });
        }
        
        if (e.target.id == next) {
            container.stop().animate({
                'left': item_width * -2
            }, 1500, function () {
                container.find(elm + ':last').after(container.find(elm + ':first'));
                resetSlides();
            });
        }
        
        //cancel the link behavior            
        return false;
        
    });
    
    //if mouse hover, pause the auto rotation, otherwise rotate it    
    container.parent().mouseenter(function () {
        clearInterval(run);
    }).mouseleave(function () {
        run = setInterval(rotate, speed);
    });
    
    
    function resetSlides() {
        //and adjust the container so current is in the frame
        container.css({
            'left': -1 * item_width
        });
    }
    
});
//a simple function to click next link
//a timer will call this function, and the rotation will begin

function rotate() {
    $('#next').click();
}
var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    //direction: 'vertical',
    loop: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  })
 
function randomQuote() {
  $.ajax({
      url: "https://api.forismatic.com/api/1.0/?",
      dataType: "jsonp",
      data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
      success: function( response ) {
        $("#random_quote").html("<p id='random_quote' class='lead text-center'><q>" +
          response.quoteText + "</q><br/>&dash; " + response.quoteAuthor + " </p>");
        $("#tweet").attr("href", "https://twitter.com/home/?status=" + response.quoteText +
          ' (' + response.quoteAuthor + ')');
      }
  });
}

$(function() {
  randomQuote();
});

$("button").click(function(){
  randomQuote();
});
