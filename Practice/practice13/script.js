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


// Task 2
function isSecondInput(){
    var secondForm = document.forms.form2;
    var secondName = secondForm.elements.lastName;
    var errorMessage = document.querySelector('.error-message-lastname');

    if(secondName.value.length < 3){
        errorMessage.style.display = 'block';
        secondName.style.borderBottom = 'red';
        secondName.focus();
     } else{
         errorMessage.style.display = 'none';
     }
}
document.getElementById('btn-submit-lastname').onclick = isSecondInput;


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


// Task 7
document.getElementById('first_login').addEventListener('keyup', function(event){
    event.code === 'Enter' && event.target.value.length > 3? event.target.nextElementSibling.style.display = 'none' : event.target.nextElementSibling.style.display = 'block';
});


// Task 8
document.getElementById('second_login').addEventListener('keyup', function(event){
    var elementVal = event.target;
    event.code === 'Enter' && elementVal.value[0] === elementVal.value[0].toUpperCase() ? elementVal.nextElementSibling.style.display = 'none' : elementVal.nextElementSibling.style.display = 'block';
});


//Task 9
document.getElementById('calculate-water').addEventListener('click',function(){
    document.getElementById('final-calculate').innerHTML = document.getElementById('first_kg').value * 30 + 'мл';
});

//Task 10
document.getElementById('calculate-salary').addEventListener('click', function(){
    document.getElementById('final-salary').innerHTML =  8 * document.getElementById('selection').value * document.getElementById('first_days').value + '$';
});

//Task 11
