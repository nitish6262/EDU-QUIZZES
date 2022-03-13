var subjects = {
    'History': 1,
    'Polity': 1,
    'Geography': 1,
    'Mathematics': 1,
    'Science': 1,
    'Biology': 0,
    'Economy': 1
};

// var users = [{
//         "name": "Harry Potter",
//         "city": "London"
//     },
//     {
//         "name": "Don Quixote",
//         "city": "Madrid"
//     },
//     {
//         "name": "Joan of Arc",
//         "city": "Paris"
//     },
//     {
//         "name": "Rosa Park",
//         "city": "Alabama"
//     }
// ];

// var products = [{
//     "title": "Clean the kitchen",
//     "description": "Mop the floor, wipe the countertop and don't forget to take out the trash!"
// }, {
//     "title": "Call Mom",
//     "description": "It's her birthday!"
// }, {
//     "title": "Water flowers",
//     "description": "They need water, or they will die."
// }];

// var info1 = document.querySelectorAll('.product .title');

// var info2 = document.querySelectorAll('.product .description');

// for(var i = 0; i < info1.length; i++){
//     info1[i].innerHTML = products[i].title;
// }
// for(var i = 0; i < info1.length; i++){
//     info2[i].innerHTML = products[i].description;
// }
// var usersList = document.querySelectorAll('.users li');

// for (var i = 0; i < users.length; i++) {
//     usersList[i].innerHTML = users[i].name + ' - ' + users[i].city;
// }


// Approach 1
// var availableSubjects = [];
// var k = 0;
// for (var key in subjects) {
//     if(subjects[key] == 1){
//         availableSubjects[k] = key;
//         k++;
//     }
//     console.log(key, subjects[key]);
// } 

// for (var key in subjects) {
//     if (subjects[key]) {
//         availableSubjects.push(key);
//     }
//     console.log(key, subjects[key]);
// } 



// console.log(availableSubjects);

// Approach 2

// var boxArr = document.querySelectorAll('.box');

// for (var i = 0; i < boxArr.length; i++) {
//     boxArr[i].innerHTML = availableSubjects[i];
// }

var boxArr = document.querySelectorAll('.box');
var i = 0;

for (var key in subjects) {
    if (subjects[key]) {
        boxArr[i].innerHTML = key;
        i++;
    }
}


// approach 1
// for (var i = 0; i < boxArr.length; i++) {

//     boxArr[i].addEventListener('click', function (e) {
//         console.log(e.target.innerHTML);
//         window.location.href = 'quiz.html?title=' + e.target.innerHTML;
//     });

// }

// approach 2
for (var i = 0; i < boxArr.length; i++) {
    boxArr[i].addEventListener('click', function (e) {
        console.log(e.target.innerHTML);
        window.sessionStorage.setItem('title', e.target.innerHTML);
        window.location.href = 'quiz.html';
    });
}