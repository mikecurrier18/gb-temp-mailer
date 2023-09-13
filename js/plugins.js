/*============================================================
CUSTOMIZABLE JQUERY FEATURES & PLUGINS
=============================================================*/


/*========== NAVBAR TRANSPARENT TO SOLID ==========*/
function checkScroll() {
   if ($(window).scrollTop() >= 300) {
       $('.navbar').addClass('solid');
   } else {
       $('.navbar').removeClass('solid');
   }
}


/*========== ADD SOLID CLASS TO NAVBAR WHEN TOGGLED ==========*/
$(document).ready(function () { //when document(DOM) loads completely.
   checkScroll();
   $(window).scroll(checkScroll);

   // Add solid class to mobile nav if does not exist on toggle nav
   $('.navbar-toggler').click(function () {
       if ($(window).scrollTop() <= 300) {
           $("nav.navbar").toggleClass("solid");
       }
   });
});


/*========== SMOOTH SCROLLING TO LINKS ==========*/
$(document).on('click', 'a[href^="#"]', function (event) {
   event.preventDefault();

   // Close links container
   $('#mainNav .navbar-toggler').addClass('collapsed');
   $('#navbarResponsive').removeClass('show');

   $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top
   }, 1000);
});


/*========== BOUNCING DOWN ARROW ==========*/
//down arrow at top
$(document).ready(function () {
   $(window).scroll(function () { //browser scroll
       $(".arrow, .home-text").css("opacity", 1 - $(window).scrollTop() / 350); //set opacity css from 1 to -(negative) infinity of element with class 'arrow'
       //250 is fade pixels
   });
});


/*========== COUNTERUP ==========*/
$(document).ready(function () { 
   $('.counter').counterUp({
       delay: 10,
       time: 5000,
       beginAt: 0
   });
});


/*========== OUR DEVELOPERS CAROUSEL ==========*/
$(document).ready(function(){ //when document(DOM) loads completely
   $('#team-slider').owlCarousel({ //owlCarousel settings
       nav: false,
       dots: true,
       autoplay: true, //set to false to turn off autoplay and only use nav
       autoplayHoverPause: true, //set to false to prevent pausing on hover
       loop: true, //set to false to stop carousel after all slides shown
       autoplayTimeout: 8000, //time between transitions
       smartSpeed: 1200, //transition speed
       dotsSpeed: 1000, //transition speed when using dots/buttons
       responsive : { //set number of items shown per screen width
           0 : {
               items: 1 //0px width and up display 1 item
           },
           768 : {
               items: 2 //768px width and up display 2 items
           },
           992 : {
               items: 3 //992px width and up display 3 items
           }
       }
   });
});


/*========== KEEP OUR DEVELOPERS CARDS THE SAME HEIGHT ==========*/
$(document).ready(function () {

   // Select and loop the container element of the elements you want to equalise
   $('.owl-theme').each(function () {

       // Cache the highest
       var highestBox = 0;

       // Select and loop the elements you want to equalise
       $('.card', this).each(function () {

           // If this box is higher than the cached highest then store it
           if ($(this).height() > highestBox) {
               highestBox = $(this).height();
           }

       });

       // Set the height of all those children to whichever was highest
       $('.card', this).height(highestBox);

   });
});


/*========== REVIEWS CAROUSEL ==========*/
$(document).ready(function () {
   $('#reviews-carousel .carousel-wrap .owl-carousel').owlCarousel({
       autoplay: true,
       autoplayHoverPause: true,
       loop: true,
       autoplayTimeout: 8000,
       autoplaySpeed: 2000,
       nav: true,
       navText: [
           "<i class='fas fa-chevron-left'></i>",
           "<i class='fas fa-chevron-right'></i>"
       ],
       navSpeed: 1500,
       responsive: {
           0: {
               items: 1
           }
       }
   });
});


/*========== TOP SCROLL BUTTON ==========*/
$(document).ready(function () { //when document is ready
   $(window).scroll(function () { //when webpage is scrolled
       if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
           $('.top-scroll').fadeIn(); //display element with class 'top-scroll'; opacity increases
       } else { //if not
           $('.top-scroll').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
       }
   });
});


/*========== REFERENCES CAROUSEL ==========*/
$(document).ready(function () {
   $('#references-carousel .carousel-wrap .owl-carousel').owlCarousel({
       autoplay: true,
       autoplayHoverPause: true,
       loop: true,
       autoplayTimeout: 8000,
       autoplaySpeed: 2000,
       nav: true,
       navText: [
           "<i class='fas fa-chevron-left'></i>",
           "<i class='fas fa-chevron-right'></i>"
       ],
       navSpeed: 1500,
       responsive: {
           0: {
               items: 1
           }
       }
   });
});


/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () {
   if ($(window).width() < 768) {
       $("div").attr('data-animation', 'animate__animated animate__fadeInUp');
   }
});


/*========== PROJECT GALLERY NAVBAR COLLAPSE
(so main nav and projects nav don't ipen and close at the same time.) ==========*/
$('#navbarProjects .nav-link').on('click', function () {
   $('.navbar-collapse.collapse').removeClass('show');
});


/*========== PROJECTS GALLERY FILTER (ISOTOPE) INITIALIZATION ==========*/
var $grid = $('.grid').isotope({
   filter: '.web-design',
   itemSelector: '.element-item',
   layoutMode: 'fitRows'
});


/*========== PREVENTS "SCROLL TO ZOOM" MAP MESSAGE (NOTE: DISABLES MOBILE MAP SCROLLING) ==========*/
$(document).ready(function () { //when document(DOM) loads completely.
   // Fix maps scroll
   $('#map').addClass('scrolloff');  // set the mouse events to none when doc is ready

   $('#mapOverlay').on("mouseup", function () {  // lock it when mouse up
       $('#map').addClass('scrolloff');
   });
   $('#mapOverlay').on("mousedown", function () {  // when mouse down, set the mouse events free
       $('#map').removeClass('scrolloff');
   });
   $("#map").mouseleave(function () {  // becuase the mouse up doesn't work...
       $('#map').addClass('scrolloff');  // set the pointer events to none when mouse leaves the map area// or you can do it on some other event
   });
});


/*============================================================
PLUGINS & CUSTOMIZATIONS THAT SHOULD NOT BE CHANGED
=============================================================*/


/*========== MAKE ALL ANIMATION "FADEINUP" ON MOBILE ==========*/
$(document).ready(function () {
   if ($(window).width() < 768) {
      $("div").attr('data-animation', 'fadeInUp');
   }
});


/*========== WAYPOINTS ANIMATION DELAY ==========*/
$(function () { // a self calling function
   function onScrollInit(items, trigger) { // a custom made function
      items.each(function () { //for every element in items run function
         var osElement = $(this), //set osElement to the current
            osAnimationClass = osElement.attr('data-animation'), //get value of attribute data-animation type
            osAnimationDelay = osElement.attr('data-delay'); //get value of attribute data-delay time

         osElement.css({ //change css of element
            '-webkit-animation-delay': osAnimationDelay, //for safari browsers
            '-moz-animation-delay': osAnimationDelay, //for mozilla browsers
            'animation-delay': osAnimationDelay //normal
         });

         var osTrigger = (trigger) ? trigger : osElement; //if trigger is present, set it to osTrigger. Else set osElement to osTrigger

         osTrigger.waypoint(function () { //scroll upwards and downwards
            osElement.addClass('animated').addClass(osAnimationClass); //add animated and the data-animation class to the element.
         }, {
               triggerOnce: true, //only once this animation should happen
               offset: '70%' // animation should happen when the element is 70% below from the top of the browser window
            });
      });
   }

   // onScrollInitCounterUp();
   onScrollInit($('.os-animation')); //function call with only items
   onScrollInit($('.staggered-animation'), $('.staggered-animation-container')); //function call with items and trigger
});


/*========== ISOTOPE FILTER PROJECT GALLERY ==========*/
// filter functions
var filterFns = {
   // show if number is greater than 50
   numberGreaterThan50: function () {
      var number = $(this).find('.number').text();
      return parseInt(number, 10) > 50;
   },
   // show if name ends with -ium
   ium: function () {
      var name = $(this).find('.name').text();
      return name.match(/ium$/);
   }
};
// bind filter button click
$('.filters-button-group').on('click', 'a.filter', function () {
   var filterValue = $(this).attr('data-filter');
   // use filterFn if matches value
   filterValue = filterFns[filterValue] || filterValue;
   $grid.isotope({ filter: filterValue });
});
// change is-checked class on menu
$('.button-group').each(function (i, buttonGroup) {
   var $buttonGroup = $(buttonGroup);
   $buttonGroup.on('click', 'a.filter', function () {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $(this).addClass('is-checked');
   });
});


/*========== ISOTOPE GALLERY SPACING FIX ==========*/
$(document).ready(function () {
   $container.imagesLoaded(function () {
   $container.isotope({
       itemSelector: ".item",
       isOriginLeft: false,
   });
   $container.isotope();
   });
});


/*========== MAGNIFIC POPUP LIGHTBOX IMAGE GALLERY ==========*/
$(document).ready(function () {
   $('.img-popup').magnificPopup({
      type: 'image',
      gallery: { enabled: true },
      removalDelay: 100, // Delay in milliseconds before popup is removed
      image: {
         titleSrc: 'title'
         // this tells the script which attribute has your image caption
      }
   });
});


/*========== MAGNIFIC POPUP HTML5 VIDEO GALLERY ==========*/
$(document).ready(function () {
   $('.magnificPop-video').magnificPopup({
      type: 'iframe',
      gallery: { enabled: true },
      removalDelay: 100, // Delay in milliseconds before popup is removed
      image: {
         titleSrc: 'title'
         // this tells the script which attribute has your image caption
      },
      iframe: extendMagnificIframe()
   });
});

/*========== EMBED YOUTUBE & VIDEO IN MAGNIFIC POPUP LIGHTBOX ==========*/
function extendMagnificIframe() {
   var $start = 0;
   var $iframe = {
      markup: '<div class="mfp-iframe-scaler">' +
         '<div class="mfp-close"></div>' +
         '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
         '</div>' +
         '<div class="mfp-bottom-bar">' +
         '<div class="mfp-title"></div>' +
         '</div>',
      patterns: {
         youtube: {
            index: 'youtu',
            id: function (url) {
               var m = url.match(/^.*(?:youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#\&\?]*).*/);
               if (!m || !m[1]) return null;

               if (url.indexOf('t=') != -1) {
                  var $split = url.split('t=');
                  var hms = $split[1].replace('h', ':').replace('m', ':').replace('s', '');
                  var a = hms.split(':');

                  if (a.length == 1) {
                     $start = a[0];
                  } else if (a.length == 2) {
                     $start = (+a[0]) * 60 + (+a[1]);
                  } else if (a.length == 3) {
                     $start = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
                  }
               }

               var suffix = '?autoplay=1';
               if ($start > 0) {
                  suffix = '?start=' + $start + '&autoplay=1';
               }

               return m[1] + suffix;
            },
            src: '//www.youtube.com/embed/%id%'
         },
         vimeo: {
            index: 'vimeo.com/',
            id: function (url) {
               var m = url.match(/(https?:\/\/)?(www.)?(player.)?vimeo.com\/([a-z]*\/)*([0-9]{6,11})[?]?.*/);
               if (!m || !m[5]) return null;
               return m[5];
            },
            src: '//player.vimeo.com/video/%id%?autoplay=1'
         }
      }
   };
   return $iframe;
}

/*========== CONTACT FORM INPUT VALIDATION ==========*/
$(function () {

   // init the validator
   // validator files are included in the download package
   // otherwise download from http://1000hz.github.io/bootstrap-validator

   $('#contact-form').validator();


   // when the form is submitted
   $('#contact-form').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
         var url = "contact/contact.php";

         // POST values in the background the the script URL
         $.ajax({
            type: "POST",
            url: url,
            data: $(this).serialize(),
            success: function (data) {
               // data = JSON object that contact.php returns

               // we recieve the type of the message: success x danger and apply it to the
               var messageAlert = 'alert-' + data.type;
               var messageText = data.message;

               // let's compose Bootstrap alert box HTML
               var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

               // If we have messageAlert and messageText
               if (messageAlert && messageText) {
                  // inject the alert to .messages div in our form
                  $('#contact-form').find('.messages').html(alertBox);
                  // empty the form
                  $('#contact-form')[0].reset();
               }
            }
         });
         return false;
      }
   })
});