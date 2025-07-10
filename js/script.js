// Copy menu for mobile
function copyMenu() {
    //Copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat');
    var dptPlace = document.querySelector('.departments');
    dptPlace.innerHTML = dptCategory.innerHTML;


    // Copy Inside to nav
    var mainNav = Document.querySelector('.header-nav nav');
    var navPlace = document.querySelector('.off-canvas nav')
        navPlace.innerHTML = mainNav.innerHTML;

        // Copy .header-top .wrapper to .thetop-nav
        var topNav =  document.querySelector('.header-top .wrapper');
        var topPlace = document.querySelector('.off-canvas .thetop-nav')
        topPlace.innerHTML = topNav.innerHTML;
}

copyMenu();



// Show submenu