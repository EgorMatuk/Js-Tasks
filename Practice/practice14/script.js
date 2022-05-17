var ulList = document.querySelector('#todo-list');

ulList.addEventListener('click', function(event){
    //console.log(event.target.tagName);
    if(event.target.tagName === 'P'){
        event.target.classList.toggle('task-no-active');
    }
})

// Task 2

//parent element   ul.collection

//  (event.target.classList.contains('collection-item'))
//  event.target.nextElementSibling


// Task 3

var btnOpen = document.querySelector('#open-modal');
var modal = document.querySelector('#modal1');

btnOpen.addEventListener('click', function(){
    modal.classList.add('modal_open');
})

document.body.addEventListener('click', function(event){
    console.log(event.target);
    /*&& event.target !== modal*/
    if(event.target !== btnOpen && !event.target.closest('#modal1')){
        modal.classList.remove('modal_open');
    }
})


// Task4

var bigPicture = document.querySelector('.photo img');
var boxImages = document.querySelector('.container');

boxImages.addEventListener('click', function(event){
    console.log(event.target);
    if(event.target.parentElement.classList.contains('image')){
        bigPicture.src = event.target.src;
    }
})