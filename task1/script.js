function newPerson(){
  let fullName = '';
  let age;
  let gender;
  


    function fullNameEnter(){
      function fullNameCheck(promptData){
        let answer = prompt(promptData);
        if(!answer || isFinite(parseFloat(answer))){
          fullNameCheck(promptData);
        }else{
          fullName += answer + '  ';
        }
      }
      fullNameCheck("Имя: ");
      fullNameCheck("Фамилия: ");
      fullNameCheck("Отчетсво: ");
    }


    function ageEnter(){
      promptAge = parseInt(prompt('Возраст:'));
      if(isAge(promptAge)){
        age = promptAge;
      }else{
        ageEnter();
      }
    } 


    function genderEnter(){
      gender = confirm("Вы мужчина?");
      if(gender){
        gender = "мужской";
      }else{
        gender = "женский";
      }
    }

    //вызов функций ввода данных
    fullNameEnter();
    ageEnter();
    genderEnter();

    alert(`Ваше ФИО: ${fullName};\nВозраст в годах: ${age} лет; \nВозраст в днях ${AgeInDay(age)} дней; \nЧерез 5 лет вам будет: ${AgeInFuture(age)} лет; \nВаш пол: ${gender}; \nВы на пенсии:${isPension(age,gender)};`)
}


//Являится ли возраст числом
function isAge(age){
  if(isFinite(age)){
    return true;
  }else{
    return false;
  }
}

//Являится ли человек пенсионером
function isPension(age,gender){
  if((age >= 63 && gender=='мужской') || (age >= 58 && gender =='женский')){
    return 'да';
  }else{
    return 'нет';
  }
}

//Возраст в днях и в будущем
function AgeInDay(age){
  return age*365;
}
function AgeInFuture(age){
  return age+5;
}

newPerson();