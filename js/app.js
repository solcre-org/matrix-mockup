// VARS
let show = document.getElementById('show_dropdown');
let body = document.body;


//=============================================================================
//  change between funds

let equity = document.getElementById('equity');
let asset = document.getElementById('asset');
let special = document.getElementById('special');

function show_equity(){
    // console.log(equity);
    equity.classList.toggle('no-view-passw');
    asset.classList.toggle('no-view-passw');
}

function show_special(){
    // console.log(special);
    special.classList.toggle('no-view-passw');
    asset.classList.toggle('no-view-passw');
}

function show_asset(){
    // console.log(special);
    asset.classList.toggle('no-view-passw');
    equity.classList.toggle('no-view-passw');
}

function show_special_close_equity(){
    special.classList.toggle('no-view-passw');
    equity.classList.toggle('no-view-passw')

}

function show_asset_close_special() {
    asset.classList.toggle('no-view-passw');
    special.classList.toggle('no-view-passw');
}

function show_equity_close_special() {
    equity.classList.toggle('no-view-passw')
    special.classList.toggle('no-view-passw');
}

//=============================================================================
// show and hide password

let view_passw = document.getElementById('no-view-passw');
let no_view_passw = document.getElementById('view-passw');
let view_passw_2 = document.getElementById('no-view-passw-2');
let no_view_passw_2 = document.getElementById('view-passw-2');
let view_passw_3 = document.getElementById('no-view-passw-3');
let no_view_passw_3 = document.getElementById('view-passw-3');


function show_passw() {
    view_passw.classList.toggle('view-passw');
    no_view_passw.classList.toggle('no-view-passw');
    view_passw_2.classList.toggle('view-passw');
    no_view_passw_2.classList.toggle('no-view-passw');
}

function show_passw_2() {
    view_passw_3.classList.toggle('view-passw');
    no_view_passw_3.classList.toggle('no-view-passw');
}

//=============================================================================
// switch login between create

let login = document.getElementById('login_user');
let create = document.getElementById('create_user');

function switch_to_create() {
    create.classList.toggle('show-flex');
    login.classList.remove('login__info');
    login.classList.toggle('not-show');
}

function switch_to_login() {
    create.classList.toggle('show-flex');
    login.classList.add('login__info');
    login.classList.toggle('not-show');
}

//=============================================================================
// login popup

let login_popup = document.getElementById('login-popup')
let switch_ = login_popup.classList.contains('show');

function show_login(){
    let windowWidth = window.innerWidth;

    if (windowWidth > 960){
        body.classList.toggle('preventscroll');
    }
    if (!switch_){
        if (windowWidth < 961){
            nav.classList.toggle('show-nav-flex');
            logo_white.classList.toggle('show-logo');
            bt_color.classList.toggle('color-negro');
            logo_blue.classList.toggle('show-logo');
            

        }
        login_popup.classList.add('show');
        // console.log('entre a add')
    } 
    // console.log(login_popup)
}

function close_login (){
    login_popup.classList.remove('show');
    body.classList.toggle('preventscroll');
}

//=============================================================================
// bt loading in login and redirect to client-accces

let bt_login = document.getElementById('bt-login');
let bt_load = document.getElementById('bt-load');

function remove_bt_login(){
    bt_login.classList.toggle('not-show');
    bt_load.classList.toggle('not-show');
    setTimeout(show_bt_login, 2000);
}

function show_bt_login(){
    window.location.replace("./pages/client-access.html");
    console.log(nav)
}

//=============================================================================
// navbar

let show_mobile = document.getElementById('show_navbar_mobile');
let nav = document.getElementById('nav')
let logo_white = document.getElementById('switch-logo-white')
let logo_blue = document.getElementById('switch-logo-blue')
let menu_icon = document.getElementById('white-color')
let bt_color = document.getElementById('bt')

function show_navbar_movile() {
    // console.log('hola')
    show_mobile.classList.toggle('show-navbar');
    icon_menu();
    nav.classList.toggle('show-nav-flex');

    logo_blue.classList.toggle('show-logo');
    logo_white.classList.toggle('show-logo');
    body.classList.toggle('preventscroll');

    if (login_popup.classList.contains('show')){
        login_popup.classList.remove('show');
        nav.classList.toggle('show-nav-flex');
        logo_white.classList.toggle('show-logo');
        logo_blue.classList.toggle('show-logo');
        bt_color.classList.toggle('color-negro');
    }
    // console.log(nav)
}

function icon_menu() {
    bt_color.classList.toggle('active');
    menu_icon.classList.toggle('white-color');

}

//=============================================================================
// change lenguage

let bt_usa = document.getElementById('bt-usa');
let bt_esp = document.getElementById('bt-esp');

function switch_lenguage(){
    // bt_usa.classList.toggle('show-lenguage');
    bt_esp.classList.toggle('not-show-lenguage');
    console.log(bt_esp)
}

//=============================================================================
// show change password

let change_password = document.getElementById('change-password')
function close_change_pass() {
    
    change_password.classList.toggle('show-password')

}