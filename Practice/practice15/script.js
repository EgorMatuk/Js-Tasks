//  task1

var todoList = document.querySelector('#todo-list');

todoList.addEventListener('click', function(event) {
    if (event.target.classList.contains('waves-effect')) {
        var newTitle = prompt('Input new title!');
        event.target.previousElementSibling.innerHTML = newTitle;
    }
})

//task 3
var ulList = document.querySelector('#menuList');
var btnAdd = document.querySelector('#btnAdd');

ulList.addEventListener('click', function(event) {
    console.log(event.target);
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('task_is_done');
    }

})
var numberOfTask = 3;
btnAdd.addEventListener('click', function(event) {
        numberOfTask = ++numberOfTask
        var newLi = document.createElement('li');
        if (event.target === btnAdd) {
            newLi.innerText = `task ${numberOfTask}`;
            ulList.append(newLi);
        }
    })
    //task 5
var totalInput = document.getElementById('totalInput');
var countSum = document.querySelector('#countSum');
var currentTotal = document.getElementById('current-total');
var price = document.querySelector('.price');
var results = 0;
document.addEventListener('click', function(event) {

    if (event.target.dataset.counterIncr != undefined) {
        totalInput.value.innerText = ++totalInput.value;
    }
    if (event.target.dataset.counterDecr != undefined) {
        if (totalInput.value === '0') {
            return;
        } else if (totalInput.value != '0')
            totalInput.value.innerText = --totalInput.value;
    }
    results = totalInput.value * price.innerHTML;
})
countSum.addEventListener('click', function() {
    currentTotal.innerHTML = results;
})

// task6


//task 6
var inputTotal = document.querySelector('.total');

var inputTotalEqualSum = document.querySelectorAll('.total');
var card = document.querySelectorAll('.card');
var countEqualSum = document.querySelector('#countEqualSum');
var currentTotalItems = document.getElementById('current-total-items');
// var price = document.querySelector('.price');




document.addEventListener('click', function(event) {
    var result = 0;
    for (var i = 1; i < 5; i++) {

        console.log(event.target);
        if (card[i] == event.target.parentElement.parentElement) {
            if (event.target.dataset.counterIncrease != undefined) {
                inputTotalEqualSum[i].value.innerHTML = ++inputTotalEqualSum[i].value;
            }
            if (event.target.dataset.counterDecrease != undefined) {
                if (inputTotalEqualSum[i].value === '0') {
                    return;
                } else if (inputTotalEqualSum[i].value != '0')
                    inputTotalEqualSum[i].value.innerHTML = --inputTotalEqualSum[i].value;
            }
        }
        result += inputTotalEqualSum[i].value * price.innerHTML;
    }
    countEqualSum.addEventListener('click', function() {
        currentTotalItems.innerHTML = `${result}`;
    })
})

// task7
var inputEnter = document.getElementById('inputEnter');
var enterField = document.querySelector('.enter_field');
// inputEnter.addEventListener('keydown', function(event) {
//     if (event.key === "Enter") {
//         // Do Something, may be an 'Undo' operation
//         // inputEnter.value 
//         inputEnter.value = '';
//     }
// });

inputEnter.addEventListener("keydown", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.code == 'Enter') {
        console.log(event.key);
        // Cancel the default action, if needed
        enterField.classList.remove('enter_field');
        enterField.innerHTML = inputEnter.value;
        inputEnter.value = null;
        // Trigger the button element with a click

    }
});