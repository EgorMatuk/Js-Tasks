// var userForm = document.querySelector('#start-question');
// var avatarContainer = document.querySelector('#start-question');
// var userData = ['Joe', 'avatar'];
// var questionBox = document.querySelector('#box-questions');
// var questionForm = document.querySelector('.quiz-form');
// var correctAnswers = ['B', 'D', 'B', 'A', 'C'];
// var resultContainer = document.querySelector('.quiz__heading');

 

// avatarContainer.addEventListener('click', function(e){
//     if(document.querySelectorAll('.show')){
//         document.querySelectorAll('.show').forEach(function(item){
//             item.classList.remove('show');
//         })
//     }
//     //console.log(e.target);

//     if(e.target.tagName === 'INPUT' && e.target.type === 'radio'){
//         console.log(e.target.previousElementSibling);
//         e.target.previousElementSibling.firstElementChild.classList.add('show');
//     }
// })

// userForm.addEventListener('submit', function(e){
//     var activeAvatar = document.querySelector('input[name="question2"]:checked');
//     var activeName = userForm.elements.question1.value;
//     var activeImg = activeAvatar.previousElementSibling.firstElementChild.src;
//     userData = [activeName, activeImg];

//     console.log(userData);

//     userForm.classList.add('quiz');
//     questionBox.classList.remove('quiz');

//     scrollingUp();

//     e.preventDefault();
// })

// questionForm.addEventListener('submit', function(e){
//     var userInfo = document.querySelector('.name__user');
//     var count = 0;
//     var startResult = 0;

//     var userAnswer = [
//         questionForm.elements.q1,
//         questionForm.elements.q2,
//         questionForm.elements.q3,
//         questionForm.elements.q4,
//         questionForm.elements.q5
//     ]

//     userAnswer.forEach(function(item, index){
//         if(item.value === correctAnswers[index]){
//             count += 20;
//             for(var i = 0; i < 4; i++){
//                 var isChecked = item[i].checked;
//                 if(isChecked){
//                     item[i].parentElement.classList.add('correct')
//                 }
//             }
//         }else{
//             for(var i = 0; i < 4; i++){
//                 var isChecked = item[i].checked;
//                 if(isChecked){
//                     item[i].parentElement.classList.add('wrong')
//                 }
//             }
//         }
//     })

//     resultContainer.classList.add('show-quiz');

//     userInfo.innerHTML = userData[0] + '<img src="'+ userData[1] +'" alt="user">' + count;

//     scrollingUp();

//     e.preventDefault();

// })
var user = {
    name:'User',
    avatar: document.querySelector('.show').src
};

var userForm = document.querySelector('#start-question');
var mainWindow = document.querySelector('.heading');
var questionWindow = document.querySelector('.quiz');
var avatarContainer = document.querySelector('#start-question');


//Событие ВЫБОР АВАТАРКИ пользователя
avatarContainer.addEventListener('click', function(event){
    if(event.target.tagName === 'INPUT' && event.target.type === 'radio'){
        document.querySelectorAll('.show').forEach(function(item){
            item.classList.remove('show');
        });
        event.target.previousElementSibling.firstElementChild.classList.toggle('show');
        user.avatar = event.target.previousElementSibling.firstElementChild.src;
    }
});

//При возниконовении события SUBMIT начальной формы
userForm.addEventListener('submit', function(action){
    var nameInputValue = userForm.elements.question1.value;
    nameInputValue !== '' && nameInputValue.length > 3 ? (
        user.name = nameInputValue,
        mainWindow.classList.add('quiz'),
        questionWindow.classList.remove('quiz')
    ) : alert('Введите коррекное имя!');
    action.preventDefault();
    questionsContainers.forEach(container => container.classList.add('quiz'));
    questionsContainers[0].classList.remove('quiz');
    questionWindow.querySelector('.submit').classList.add('quiz');
});


var questionsContainers = document.querySelectorAll('.quiz-form__quiz');
//Next button
document.querySelector('.next').addEventListener('click', function(){
    var newQuestion;
    questionsContainers.forEach(function(question){
        if(!question.classList.contains('quiz')){
            question.classList.add('answered');
            question.classList.add('quiz');
            newQuestion = question.nextElementSibling;
        }
    })
    newQuestion.classList.remove('quiz');
    islast(newQuestion);
});

//Проверка на последний вопрос
function islast(question){
    question === questionsContainers[questionsContainers.length - 1] ? (
        questionWindow.querySelector('.submit').classList.remove('quiz'),
        questionWindow.querySelector('.next').classList.add('quiz')
    ) : false;
}



