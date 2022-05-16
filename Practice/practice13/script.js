 // Task 1

 var btnValidInput = document.getElementById('btn-submit-name');

 function validInput(){
     var form = document.forms.form1;
     var firstName = form.elements.firstName;
     var errorMessage = document.querySelector('.error-message');

     if(firstName.value === ''){
        errorMessage.style.display = 'block';
        firstName.focus();
     } else{
         errorMessage.style.display = 'none';
     }
 }
 btnValidInput.onclick = validInput;


 // Task3

 var quad = document.getElementsByClassName('blue_block')[0];

 function changeBackgroundQuad(){
     quad.classList.add('red_block');
 }

 quad.addEventListener('mouseenter', changeBackgroundQuad);





 // Task5

 var inputName = document.querySelector('#first_name2');

 inputName.addEventListener('keyup', function(event){
     //console.log(event.code);
if(event.code === 'Enter'){
    var currentValue = inputName.value;
    var parentTable = document.querySelector('#name_list');
    parentTable.innerHTML += '<tr><td>' + currentValue + '</td></tr>';
    inputName.value = '';
}
 })


 
 // Task6

var btnOpen = document.querySelector('#open-modal');
var modal = document.querySelector('#modal1');

btnOpen.addEventListener('click', function(){
    modal.classList.add('modal_open');
})

window.addEventListener('keyup', function(){
    
})