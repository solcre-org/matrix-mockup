let show = document.getElementById('show_dropdown');
let login = document.getElementById('login_user');
let create = document.getElementById('create_user');
let login_popup = document.getElementById('login-popup')
let body = document.body;

function show_dropdown() {
    show.classList.toggle('show');
    body.classList.toggle('preventscroll');
}

function close_dropdown() {
    show.classList.toggle('show');
    body.classList.toggle('preventscroll');
}

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

function show_login(){
    login_popup.classList.toggle('show');
    console.log(login_popup)
    disableScroll()
}

function close_login(){
    show_dropdown()
    login_popup.classList.toggle('show');
    enableScroll()
}

function disableScroll(){  
    var x = window.scrollX;
    var y = window.scrollY;
    window.onscroll = function(){ window.scrollTo(x, y) };
}

function enableScroll(){  
    window.onscroll = null;
}

