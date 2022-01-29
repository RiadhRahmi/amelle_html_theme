
(function ($) {
  "use strict";


  /* ------------------
  LOADING SCREEN
  ------------------ */

  $(window).on("load", function () {
    $("#preloader").fadeOut(5000);
    $("#preloader").remove();
  });



  /* ------------------
  SWITCH Menu
  ------------------ */

  $('#toggle').click(function () {
    $('header').toggleClass('open-menu');
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
  });

  var headerFixed = function () {
    var hd_height = $('.header').height();
    $(window).on('load scroll', function () {
      if ($(window).scrollTop() > hd_height + 30) {
        $('.header').addClass('downscrolled');
      } else {
        $('.header').removeClass('downscrolled');

      }
    });
  };

  headerFixed();

  /* ------------------
  SCROLL TO
  ------------------ */

  var aScroll = $('a[data-scroll="scrollTo"]');
  aScroll.on('click', function (event) {
    var target = $($(this).attr('href'));
    if (target.length) {
      event.preventDefault();
      closeMenu();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('.overlay-menu ul li').on('click', function (event) {
    $('.overlay-menu ul li').removeClass("active");
    $(this).addClass("active");
  });


  $(window).on("scroll", function() {
    $('.block').each(function() {
      if($(window).scrollTop() > $(this).offset().top-100){
        var blockID = $(this).attr("id");
        $('#overlay-menu ul li').removeClass('active');
        $('#overlay-menu ul li a[href="#' + blockID + '"]').parent().addClass('active');
      }
    });
  });


  /*--------------- close Menu ---------------*/
  var closeMenu =  function(){

    $('header').removeClass('open-menu');
    $('#toggle').removeClass('active');
    $('#overlay').removeClass('open');

  };


  /* ------------------
  OWL CAROUSEL
  ------------------ */

  var   $testimonialCarousel = $("#testimonial-carousel");

  $testimonialCarousel.owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    dots: false,
    dotsSpeed: 600,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });


  /* ------------------
  MAGNIFIC POPUP
  ------------------ */

  var $imgPopup = $(".img-popup");
  $imgPopup.magnificPopup({
    type: "image"
  });



  /* ------------------
  BACK TO TOP
  ------------------ */
  window.onscroll = function() {
    if (document.getElementById('to-top') != null) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("to-top").style.display = "block";
      } else {
        document.getElementById("to-top").style.display = "none";
      }
    }
  };


  /* ------------------
  PORTFOLIO FLITER
  ------------------ */

  var $portfolioFilter = $(".portfolio-filter"),
  portfolioLength = $portfolioFilter.length,
  protfolioFinder = $portfolioFilter.find("a"),
  $portfolioAll = $("#portfolio-all");

  // init Isotope For Portfolio
  protfolioFinder.on("click", function (e) {
    e.preventDefault();
    $portfolioFilter.find("a.active-filter").removeClass("active-filter");
    $(this).addClass("active-filter");
  });
  if (portfolioLength > 0) {
    $portfolioAll.imagesLoaded().progress(function () {
      $portfolioAll.isotope({
        filter: "*",
        animationOptions: {
          duration: 750,
          itemSelector: ".portfolio-item",
          easing: "linear",
          queue: false,
        }
      });
    });
  }
  protfolioFinder.on("click", function (e) {
    e.preventDefault();
    var $selector = $(this).attr("data-filter");
    $portfolioAll.imagesLoaded().progress(function () {
      $portfolioAll.isotope({
        filter: $selector,
        animationOptions: {
          duration: 750,
          itemSelector: ".portfolio-item",
          easing: "linear",
          queue: false,
        }
      });
      return false;
    });
  });





  /* ------------------
  PROGRESS BAR
  ------------------ */
  var $skill = $(".skills"),
  $pBar = $(".progress-bar");
  if ($skill.length > 0) {
    $(window).scroll(function () {
      var skillsTop = $skill.offset().top - 200,
      skillsHight = $(this).outerHeight(),
      wScroll = $(window).scrollTop();
      if (wScroll > skillsTop - 1 && wScroll < skillsTop + skillsHight - 1) {
        $pBar.each(function () {
          $(this).width($(this).attr('aria-valuenow') + '%');
        });
      }
    });
  }



  /* ------------------
  WOW ANIMATED
  ------------------ */

  new WOW().init();


}(jQuery));
