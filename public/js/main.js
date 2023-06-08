$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        dots:false,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    $("i.fa-solid.fa-chevron-down").click(function(){
        $(this).next('ul.sub-menu').slideToggle();
    })

    $("#icon-menu-responsive").click(function(){
      $("#site").toggleClass("open-respon-menu");
      $('#icon-menu-responsive').toggleClass('fa-bars fa-times');
      $('#wp-respon-menu').toggleClass('absolute fixed');
      return false;
    })
    $("#mask-content").click(function () {
        $("#site").removeClass("open-respon-menu");
        $("#icon-menu-responsive").removeClass("fa-times").addClass("fa-bars");
        $("#icon-menu-responsive").removeClass("fixed").addClass("absolute");
        return false;
    });
    $(window).resize(function () {
        if ($(window).width() >= 768) {
            $("#site").removeClass("open-respon-menu");
            $("#icon-menu-responsive").removeClass("fa-times").addClass("fa-bars");
        }
    });
});