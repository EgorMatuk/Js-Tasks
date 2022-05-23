//task1
document.getElementById('todo-list').addEventListener('click', function(event){
    event.target.tagName === 'P'? event.target.classList.toggle('task-no-active') : false;
});

//task2
document.querySelector('.collection').addEventListener('click', function(event){
    event.target.classList.contains('collection-item')? event.target.nextElementSibling.classList.toggle('answer-item-show') : false;
});

//task3
document.querySelector('.row').addEventListener('click', function(event){
    event.target.classList.contains('btn') ? document.getElementById('modal1').classList.toggle('modal_open') : false;
});
document.body.addEventListener('click', function(event){
    event.target.closest('#modal1') ? document.getElementById('modal1').classList.toggle('modal_open') : false;
});

//task4
var mainPictue = document.querySelector('.photo img');
var imagesContainer = document.querySelector('.container');

imagesContainer.addEventListener('click', function(event){
    event.target.parentElement.classList.contains('image') ? mainPictue.src = event.target.src : false;
});

//task5
var list = document.querySelector('.second');
var items = document.querySelectorAll('.second li');
document.getElementById('sort').addEventListener('click', function(){
    let sorted = [...items].sort(function(a, b) {
		if(a.children[0].innerHTML > b.children[0].innerHTML){
            return 1;
        }
        if(a.children[0].innerHTML < b.children[0].innerHTML){
            return -1;
        }
        return 0;
	});
	
	list.innerHTML = '';
	
	for (let li of sorted) {
		list.appendChild(li);
	}
});