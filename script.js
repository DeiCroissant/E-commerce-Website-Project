// Copy menu for mobile
function copyMenu() {
    //Copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;


    // Copy Inside to nav
    var mainNav = document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
        navPlace.innerHTML = mainNav.innerHTML;

        // Copy .header-top .wrapper to .thetop-nav
        var topNav =  document.querySelector('.header-top .wrapper');
        var topPlace = document.querySelector('.off-canvas .thetop-nav')
        topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();


// Show mobile menu
const menuButton = document.querySelector('.trigger'),
    closeButton = document.querySelector('.t-close'),
    addclass = document.querySelector('.site');
menuButton.addEventListener('click', function() {
    addclass.classList.toggle('showmenu')
})
closeButton.addEventListener('click', function() {
    addclass.classList.remove('showmenu')
})

// Show sub menu on mobile
const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
    if (this.closest('.has-child').classList != 'expand')
        this.closest('.has-child').classList.toggle('expand')
}

//Slider 
const swiper = new Swiper('.swiper', {
  loop: true,
   autoplay: {
    delay: 3000,             // chuyển slide sau 3s
    disableOnInteraction: false
   },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

//show dpt menu
const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');
dptButton.addEventListener('click', function() {
    dptClass.classList.toggle('showdpt');
})
     
// Product image slider
var productThumb = new Swiper('.small-image', {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        481: {
            spaceBetween: 32,
        }
    }
});

var productBig = new Swiper('.big-image', {
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productThumb,
    }
    
})

//