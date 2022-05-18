 var todoList = document.querySelector('#todo-list');
 todoList.addEventListener('click', function(event){
    if(event.target.classList.contains('waves-effect')){
        var newTitle = prompt('Input new title!');
        event.target.previousElementSibling.innerHTML = newTitle;
    }
 });

 var area = document.querySelector('#numbers');
 area.addEventListener('click', function(event){
    if(event.target.classList.contains('waves-light')){
        var pow = document.querySelector('#numbers input');;
        pow.value = Math.pow(event.target.innerHTML, 2);
    }
 });