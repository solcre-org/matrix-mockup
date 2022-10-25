// BUTTONS
let bt_multi_asset = document.querySelector('#bt-multi-asset');
let bt_equity_selection = document.querySelector('#bt-equity-selection');
let bt_special_situations = document.querySelector('#bt-special-situations');
// SECTIONS
let multi_asset = document.querySelector('#multi-asset');
let equity_selection = document.querySelector('#equity-selection');
let special_situations = document.querySelector('#special-situations');
function switch_fund(this_bt, this_section, first_bt, first_section, second_bt, second_section){
   this_bt.onclick = function (e) {
      e.preventDefault()
      if(!this_section.classList.contains('display-flex')){
         this_section.classList.toggle('display-flex');
         this_bt.classList.toggle('bt-active');
    
         if(first_section.classList.contains('display-flex')){
            first_section.classList.toggle('display-flex');
            first_bt.classList.toggle('bt-active');
         }

         if(second_section.classList.contains('display-flex')){
            second_section.classList.toggle('display-flex');
            second_bt.classList.toggle('bt-active');
         }
      }
   }
}

switch_fund(bt_multi_asset, multi_asset, 
            bt_equity_selection, equity_selection, 
            bt_special_situations, special_situations);

switch_fund(bt_equity_selection, equity_selection, 
            bt_multi_asset, multi_asset, 
            bt_special_situations, special_situations);

switch_fund(bt_special_situations, special_situations, 
            bt_equity_selection, equity_selection, 
            bt_multi_asset, multi_asset);