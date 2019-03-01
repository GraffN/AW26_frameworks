
//Carousel with navigation icons
$(document).ready(function(){
  carouselNavegation();
});

//Image counter

const imgItems = $('.list-images li').length;
let imgPos = 1;

  function carouselNavegation(){
    //css styles
    $('.list-images, .navegation').css({'list-style' : 'none', 'text-align' : 'center'});
    //cycle for to add navigation icons according to the amount of img
    for(i = 1; i <= imgItems; i++){
    $('.navegation li:eq(0)').after(
        '<li class="circle iconsDefaultColor"><span class="fa fa-circle"></span></li>');
    }
    // styles css
    $('.navegation li').css({'display' : 'inline' , 'cursor' : 'pointer' , 'margin' : '1em'});

    // Hide all images
    $('.list-images li').hide();
      
    // Show the first image by default
    $('.list-images li:first').show();
      
    // Add color to the icon that represents the first default image
    $('.navegation li span:eq(1)').addClass('iconsNavegationColor');

    // Carousel functions
    $('.navegation .circle').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);
    // automatic carousel
    setInterval(function(){
      nextSlider()
    }, 4000);
  }

// Defining functions
function pagination(){
    let paginationPos = $(this).index();
    imgPos = paginationPos;
    $('.list-images li').hide();
    $('.list-images li:nth-child('+ paginationPos +')').fadeIn();
    $('.navegation li span:eq(1)').removeClass('iconsNavegationColor');
    $('.navegation li').addClass('iconsDefaultColor');
    $('.navegation li').removeClass('iconsNavegationColor');
    $('.navegation li:eq('+ (paginationPos) +')').addClass('iconsNavegationColor');
  }

function nextSlider(){
    if(imgPos >= imgItems){
      imgPos = 1;
    }else {
      imgPos ++;
    }
    $('.navegation li span:eq(1)').removeClass('iconsNavegationColor');
    $('.navegation li').addClass('iconsDefaultColor');
    $('.navegation li').removeClass('iconsNavegationColor');
    $('.navegation li:eq('+ (imgPos) +')').addClass('iconsNavegationColor');
    $('.list-images li').hide();
    $('.list-images li:nth-child('+ imgPos +')').fadeIn();
  }

function prevSlider(){
    if(imgPos <= 1){
      imgPos = imgItems;
    }else{
      imgPos --;
    }
    $('.navegation li span:eq(1)').removeClass('iconsNavegationColor');
    $('.navegation li').addClass('iconsDefaultColor');
    $('.navegation li').removeClass('iconsNavegationColor')
    $('.navegation li:eq('+ (imgPos) +')').addClass('iconsNavegationColor');
    $('.list-images li').hide();
    $('.list-images li:nth-child('+ imgPos +')').fadeIn();
  }