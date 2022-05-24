 //task1
 var todoList = document.querySelector('#todo-list');
 todoList.addEventListener('click', function(event){
    if(event.target.classList.contains('waves-effect')){
        var newTitle = prompt('Input new title!');
        event.target.previousElementSibling.innerHTML = newTitle;
    }
 });

//task2
 var area = document.querySelector('#numbers');
 area.addEventListener('click', function(event){
    if(event.target.classList.contains('waves-light')){
        var pow = document.querySelector('#numbers input');;
        pow.value = Math.pow(event.target.innerHTML, 2);
    }
 });

 //task3
 var menuList = document.getElementById('menuList');
 document.getElementById('btnAdd').addEventListener('click', function(){
    var elements = menuList.getElementsByTagName('li');
    menuList.insertAdjacentHTML('beforeend', `<li>task ${elements.length + 1}</li>`);
 });

 menuList.addEventListener('click', function(event){
     event.target.tagName === 'LI' ? event.target.classList.toggle('line') : false;
 });

 //task5
 var eventArea = document.getElementById('current-cart');
 var totalInput = document.querySelector('.total');
 eventArea.addEventListener('click', function(event){
    if(event.target.tagName === 'A' && event.target.innerHTML === '+1'){
        ++totalInput.value;
    }else if(event.target.tagName === 'A' && event.target.innerHTML === '-1' && totalInput.value != '0'){
        --totalInput.value;
    }else if(event.target.tagName === 'A' && event.target.innerHTML === 'Посчитать сумму'){
        document.getElementById('current-total').innerHTML = totalInput.value * document.querySelector('.price').innerHTML;
    }
 });