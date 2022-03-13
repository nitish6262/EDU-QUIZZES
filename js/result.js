var title = sessionStorage.getItem('title');
title = title.toLowerCase();

document.getElementById('quiz-title').innerHTML = title;

var questions = document.querySelectorAll('.ques .ques-title');
var options = document.querySelectorAll('.ques .options label');

var k = 0;

for (var i = 0; i < questions.length; i++) {
    questions[i].innerHTML = "Q." + (i + 1) + " " + quizObj[title][i].ques;
    for (var j = 0; j < 4; j++) {
        options[k].innerHTML = quizObj[title][i].options[j];
        k++;
    }
}