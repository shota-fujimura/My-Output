//open-btn
$(".open-btn").click(function () {
    $(this).toggleClass('active');
    $(".aside-right").toggleClass('panelactive');
    $('.aside-left').toggleClass('panelactive');
});

$('.aside-list a').click(function () {
    $(".open-btn").removeClass("active");
    $(".aside-right").removeClass('panelactive');
    $(".aside-left").removeClass('panelactive');
})
$(".aside-content a").click(function() {
    $(".open-btn").removeClass("active");
    $(".aside-right").removeClass('panelactive');
    $(".aside-left").removeClass('panelactive');
});

// slick
$(".slide-items").slick({
    variableWidth: true,
    autoplay: true,
    centerMode: true,
    centerPadding: "30%",
    dots: true,
    slidesToShow: 3,
    speed: 400,
    
    prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>'
});

$('.slide-items').on('beforeChange', function(){
    $('.slick-current').removeClass('is--active');
});
$('.slide-items').on('afterChange',function(){
    $('.slick-current').addClass('is--active');
});

// pagetop
const pagetop_btn = document.querySelector(".pagetop");

pagetop_btn.addEventListener("click", scroll_top);

function scroll_top() {
    window.scroll({top:0, behavior:"smooth"});
}

window.addEventListener("scroll", scroll_event);
function scroll_event() {
    if(window.pageYOffset > 100) {
        pagetop_btn.style.opacity = "1";
    } else if (window.pageYOffset < 100){
        pagetop_btn.style.opacity = "0";
    };
};

//works popup
const images = [...document.querySelectorAll('.image')];

//popup design
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0; //will track or current image;

images.forEach((item, i) => {
    item.addEventListener('click',() => {
        upDateImage(i);
        popup.classList.toggle('active');
    }) 
})

const upDateImage = (i) => {
    let path = `../image/img${i+1}.jpg`;
    largeImage.src = path;
    imageName.innerHTML = `work${i+1}`;
    imageIndex.innerHTML = `0${i+1}`;
    index = i;
}

closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})

leftArrow.addEventListener('click', () => {
    if(index > 0){
        upDateImage(index -1);
    }
})

rightArrow.addEventListener('click', () => {
    if(index < images.length - 1){
        upDateImage(index + 1);
    }
})

