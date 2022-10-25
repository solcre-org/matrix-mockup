let bt_dropdown = document.querySelector('#bt');
let menu_icon = document.querySelector('#white-color');
let black_header = document.querySelector('.header-menu')
let logo_white = document.querySelector('#switch-logo-white')
let logo_blue = document.querySelector('#switch-logo-blue')
let menu_content = document.querySelector('.menu-content')

function show_dropdown() {
    bt_dropdown.onclick = function () {
        bt_dropdown.classList.toggle('active');
        menu_icon.classList.toggle('white-color');
        document.body.classList.toggle('preventscroll'); // not scroll
        black_header.classList.toggle('backgroung-black');
        logo_white.classList.toggle('show-logo');
        logo_blue.classList.toggle('show-logo');
        menu_content.classList.toggle('show-menu-content')
    }

}


show_dropdown();