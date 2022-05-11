var inputTaskArea = document.getElementById('inputTask');
var taskAddButton = document.getElementById('btn-add');
var getInfoButton = document.getElementById('btn-info');
var deleteButtons = document.getElementsByTagName('span');
var ListElements = document.getElementsByTagName('li');
spanDeleteON();
taskActivityON();
countUpdate();




taskAddButton.onclick = function(){
    var addTaskContainer = document.getElementById('list');
    inputTaskArea.value != 0 ? addTaskContainer.insertAdjacentHTML("beforeend",`
        <li class="list-group-item">${inputTaskArea.value}<span> Delete</span> Дата:${(new Date()).toString('dd.MM.yyyyг hh:mm')}</li>
    `) : false;
    taskActivityON();
    spanDeleteON();
    countUpdate();
}



getInfoButton.onclick = function(){
    document.querySelector('.hide-div').classList.toggle('modal-open');
    document.querySelector('.modal').classList.toggle('show');
    //кнопка закрытия модального окна
    document.querySelector('.btn-close').onclick = function(){
        document.querySelector('.modal').classList.toggle('show');
        document.querySelector('.hide-div').classList.toggle('modal-open');
    }
}

function spanDeleteON(){
    for (const element of deleteButtons) {
        element.onclick = function(){
            element.parentElement.remove();
        }
    }
}
//Функция создания onclick каждому элементу списка
function taskActivityON(){
    for (const element of ListElements) {
        element.onclick = function(){
            element.classList.toggle('not-active');
            countUpdate();
        }
    }
}
//Функция окбновления двух счетчиков
function countUpdate(){
    document.querySelector('.not-active-tasks').innerHTML = document.getElementsByClassName('not-active').length;
    document.querySelector('.active-tasks').innerHTML = document.getElementsByClassName('list-group-item').length - document.getElementsByClassName('not-active').length;
}







