var user = {
    name:'User',
    avatar: document.querySelector('.show').src
};

var userForm = document.querySelector('#start-question');
var mainWindow = document.querySelector('.heading');
var questionWindow = document.querySelector('.quiz');
var avatarContainer = document.querySelector('#start-question');

var questBoxForm = document.querySelector('.quiz-form');
var questionsContainers = document.querySelectorAll('.quiz-form__quiz');
var answer = '';
var userAnswers = [];
var trueAnswers = ['B', 'D', 'B', 'A', 'C'];

var resultBlock = document.querySelector('.quiz__heading');
var userInfo = document.querySelector('.name__user');


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

document.getElementById('box-questions').addEventListener('click',function(event){
    if(event.target.tagName === 'INPUT' && event.target.type === 'radio'){
        answer = event.target.value;
    }
});

//Next button
document.querySelector('.next').addEventListener('click', function(){
    var newQuestion;
    questionsContainers.forEach(function(question){
        if(!question.classList.contains('quiz') && answer !== ''){
            question.classList.add('answered');
            question.classList.add('quiz');
            newQuestion = question.nextElementSibling;
            userAnswers.push(answer);
            answer = '';
        }
    })
    newQuestion.classList.remove('quiz');
    islast(newQuestion);
});

//Вывод результата
questBoxForm.addEventListener('submit',function(action){
    userAnswers.push(answer);
    var answersSet = new Set(userAnswers);
    var result = trueAnswers.reduce((acc, v) => acc + answersSet.has(v), 0) / trueAnswers.length * 100 + '%';
    questBoxForm.classList.add('quiz');
    resultBlock.classList.remove('quiz__heading');
    userInfo.innerHTML = `<button class="restart">Restart</button>` + user.name +' '+ result + ' right' + '</br>' + `<img src = "${user.avatar}" alt = "${user.name} photo"></img>`;
    action.preventDefault();

    //Рестарт страницы по клику
    document.querySelector('.restart').addEventListener('click',function(){
        window.location.reload();
    });
});

//Проверка на последний вопрос
function islast(question){
    question === questionsContainers[questionsContainers.length - 1] ? (
        questionWindow.querySelector('.submit').classList.remove('quiz'),
        questionWindow.querySelector('.next').classList.add('quiz')
    ) : false;
}
