
$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,

    });
  });
  
$(document).ready(function(){
    $('.photo').slick({
        slidesToShow: 1,
        arrows: true,
        slidesToScroll:1,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    });
  });
  $(document).ready(function(){
    $('.deal__list-item-sale').slick({
        slidesToShow: 5,
        arrows: true,
        slidesToScroll:1,
        draggable: false,
        prevArrow: '<button type="button" class="slick-prev2"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next2"><i class="fas fa-chevron-right"></i></button>',
    });
  });


          