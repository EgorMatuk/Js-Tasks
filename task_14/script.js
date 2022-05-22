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


// function scrollingUp(){
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     })
// }
var userForm = document.querySelector('#start-question');
var user = ['User', 'avatar'];
var mainWindow = document.querySelector('.heading');
var questionWindow = document.querySelector('.quiz');


userForm.addEventListener('submit', function(action){
    mainWindow.classList.add('quiz');
    questionWindow.classList.remove('quiz');
    action.preventDefault();
});