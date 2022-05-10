var inputData = document.querySelector('#inputTask');
var btnAddTask = document.querySelector('#btn-add');
var ulList = document.querySelector('#list');
var spans = document.getElementsByTagName('span');


//<li>Task1 <span>Delete</span></li>
function createTask(){
    var inputValue = inputData.value;
    inputData.value = '';

    var newLi = document.createElement('li');
    newLi.innerText = inputValue;

    var newSpan = document.createElement('span');
    newSpan.innerText = ' DELETE';

    newLi.append(newSpan);
    ulList.append(newLi);

    removeTask();
} 

btnAddTask.onclick = createTask;



function removeTask(){
    for(let spanItem of spans){
        spanItem.onclick = function(){
            spanItem.parentElement.remove();
        }
    }
}

removeTask();