function getName(name){
    //let name = 'Peter';
    console.log(arguments);
    return name;
    // return arguments[0] + ' ' + arguments[1];
}

// var cName = prompt('trtyr?00');

// console.log(getName(cName));
//console.log(getName('Anton', 'Peter'));
// console.log(getName('Yulia'));
// console.log(getName('Max'));



// Область видимости

var count = 0;

function getCounts(){
    var count1 = 10;
    var count2 = 5;
    console.log(count1, count2, count/* , count10 */);
}

// getCounts();

// console.log(count1);




// Array

var list = [5, 100, 12, 'Str', 100, false, '123', 'dfsdfs'];

// console.log(list);
// console.log(list[0]);
// console.log(list[1]);
// console.log(list[2]);
// console.log(list[3]);
// console.log(list[4]);
// console.log(list[5]);

// for(var i = 0; i < list.length; i++){
//     console.log(list[i]);
// }


// Объекты

var obj = {
    name: 'Max',
    count: 10,
    anotherName: 'Joe',
    isAdmin: true
}

//console.log(obj);
// console.log(obj.count)
// console.log(obj.anotherName)
// console.log(obj['count']);

obj.anotherName = 'Peter';
obj.age = 28;
delete obj.anotherName;

//console.log(obj);

for(var key in obj){
    //console.log(key);
    console.log(obj[key])
}

