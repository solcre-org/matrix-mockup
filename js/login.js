function get_input_password (){
    let input_password = document.querySelectorAll('.input-password');
    for(let i = 0; input_password[i]; i++){
        let input = input_password[i];
        let bt_eye = input.querySelectorAll('.bt-eye');
        let view_passw = input.querySelector('#view-password');
        let no_view_passw = input.querySelector('#no-view-password');

        for(let j = 0; bt_eye[j]; j++ ){
            bt_eye[j].onclick = function (e) {
                e.preventDefault();
                no_view_passw.classList.toggle('display-none');
                view_passw.classList.toggle('display-none');
            }
        }
    }
}

let login = document.querySelector('.login');
let bt_login = document.querySelector('#bt-login');
let create = document.querySelector('.create');
let bt_create = document.querySelector('#bt-create');

function switch_login (first_section, first_bt, second_section, second_bt) {
    first_bt.onclick = function(e) {
        e.preventDefault();
        if(first_section.classList.contains('display-none')){
            second_section.classList.toggle('display-none');
            first_section.classList.toggle('display-none');
            first_bt.classList.toggle('bt-color-gray')
            second_bt.classList.toggle('bt-color-gray')
        }
    }
}

let bt_show_login = document.querySelector('#bt-show-login');
let login_popup = document.querySelector('.login-popup');
let bt_close_login = document.querySelector('#bt-x');

function show_login() {
    bt_show_login.onclick = function(e) {
        e.preventDefault();
        login_popup.classList.toggle('left-for-login');
        if(!document.body.classList.contains('preventscroll')){
            document.body.classList.toggle('preventscroll'); // not scroll
        }
        
    }
    bt_close_login.onclick = (e) => {
        e.preventDefault();
        login_popup.classList.toggle('left-for-login');
        if(!document.body.classList.contains('preventscroll')){
            document.body.classList.toggle('preventscroll'); // not scroll
        }
    }
}

let forgot_password_popup = document.querySelector('.forgot-password');
let bt_close_forgot_password = document.querySelector('#bt-close-forgot');
let bt_forgot_password = document.querySelector('#bt-forgot');

function forgot_password(){ 
        bt_forgot_password.onclick = (e) => {
            e.preventDefault();
            forgot_password_popup.classList.toggle('left-for-login');
        }
        bt_close_forgot_password.onclick = (e) => {
            e.preventDefault();
            forgot_password_popup.classList.toggle('left-for-login');
        }
}

get_input_password();
switch_login(create, bt_create, login,bt_login);
switch_login(login,bt_login, create, bt_create);
show_login();
forgot_password();