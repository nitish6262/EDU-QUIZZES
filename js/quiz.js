// approach 1
// var urlParams = new URLSearchParams(location.search);
// var title = urlParams.get('title');
// title = title.toLowerCase();

// yeh page esliye bnaya taki har button ke liye alag alag page na bnana pade.

// approach 2
var title = sessionStorage.getItem('title');
title = title.toLowerCase();


console.log(title);

document.getElementById('quiz-title').innerHTML = title;

var quizObj = {
    history: [{
            ques: "Where was Mahatma Gandhi born?",
            options: ["Porbandar", "delhi", "Gorakhpur", "None of these"],
            ans: "a"
        },
        {
            ques: 'Who was the founder of Chalukya Dynasty?',
            options: ["Vishnuvardhan", "Pulakesin I", "Kirtivarman I", "Pulakesin II "],
            ans: "b - Pulakesin I"
        },
        {
            ques: 'The Pattini cult was established by which Sangam ruler?',
            options: ["Nedunjeral Adan, the Chera ruler", "Senguttuvan, the Chera ruler", "Karikala, the Chola ruler", "Nedujeliyan, the Pandyan ruler "],
            ans: "c - Karikala, the Chola ruler"
        },
        {
            ques: 'Purusha sukta is a part of which among the following vedas?',
            options: ["Sam Veda", "Rig Veda", "Atharva Veda", "Yajur Veda "],
            ans: "b - Rig Veda"
        },
        {
            ques: 'The Nitisara of Kamandaka, also known as the Kamandakiya-Nitisara, was composed during the period of?',
            options: ["Satavahana dynasty", "Gupta dynasty", "Kalachuri dynasty", "Nanda dynasty "],
            ans: "b - Gupta dynasty"
        },
        {
            ques: 'Rummindei Pillar Inscription which talks about taxation in Maurya era has been found at which of the following places?',
            options: ["Junagarh in Gujarat", "Ranchi in Jharkhand", "Bhabru in Rajasthan", "Lumbini in Nepal"],
            ans: "d - Lumbini in Nepal"
        },
        {
            ques: 'At which among the following places, Gautam Buddha preached his last sermon?',
            options: ["Sarnath", "Rajgir", "Vaishali", "Pavapuri"],
            ans: "c - Vaishali"
        },
        {
            ques: 'Which among the following is Not correctly matched?',
            options: ["Takshshila – Gandhar", "Viratanagara – Matsya", "Surasena – Kausambi", "All are correct"],
            ans: "c - Surasena – Kausambi"
        },
        {
            ques: 'What was the name of the judges and judicial officers in Satvahana Dynasty?',
            options: ["Amatya", "Rajukas", "Bhoja", "Gamika"],
            ans: "b - Rajukas"
        },
        {
            ques: 'Which of the following was considered aghnya?',
            options: ["Cow", "Cattle", "Horse", "Elephant"],
            ans: "a - Cow"
        }
    ],
    geography: [{
            ques: "Amravati Reservoir is located in which national park in India?",
            options: ["Indira Gandhi Wildlife Sanctuary and National", "Mudumalai National Park", "Pampadum Shola National Park", "None of them"],
            ans: "a - Indira Gandhi Wildlife Sanctuary and National"
        },
        {
            ques: 'Which among the following is not correctly matched?',
            options: ["Ramakrishna Mission Beach – Andhra Pradesh", "Chandipur Beach – Orissa", "Golden Beach – Tamil nadu", "Marari Beach – Goa"],
            ans: "d - Marari Beach – Goa"
        },
        {
            ques: 'Which of the following is the main reason behind the earthquakes of India?',
            options: ["Tectonic movement", "Volcanic activity", "Tropical monsoonic climate", "Underground landslide"],
            ans: "a - Tectonic movement"
        },
        {
            ques: 'Which of the following hill stations is known as “Kashmir of Odisha?',
            options: ["Tensa", "Kiriburu", "Daringabadi", "None of the above"],
            ans: "c - Daringabadi"
        },
        {
            ques: 'Which of the following Himalayan rivers does not originate from across the Himalayas?',
            options: ["Indus", "Ganga", "Brahmaputra", "Satluj"],
            ans: "b - Ganga"
        },
        {
            ques: 'Purna River is the tributary of which of the following river?',
            options: ["Krishna", "Godavari", "Kaveri", "SaMahanaditluj"],
            ans: "b - Godavari"
        },
        {
            ques: 'Which of the following state of India having almost a monopoly in the production of chromite?',
            options: ["Odisha", "Rajasthan", "Chattisgarh", "Bihar"],
            ans: "a - Odisha"
        },
        {
            ques: 'Which among the following matches of Dam and their corresponding rivers is not correct?',
            options: ["Tilaiya Dam- Barakar river", "Konar Dam- Konar river", "Panchet Dam- Son river", "Maithon Dam- Subarnarekha river"],
            ans: "c - Panchet Dam- Son river"
        },
        {
            ques: 'What is the rank of Nuclear Power in terms of the source of electricity in India?',
            options: ["2nd", "3rd", "5th", "7th"],
            ans: "c - 5th"
        },
        {
            ques: 'G.B. Pant University of Agriculture and Technology is situated in which of the following states?',
            options: ["Gujarat", "Maharashtra", "Uttarakhand", "Uttar Pradesh"],
            ans: "c - Uttarakhand"
        }
    ],
    polity: [{
            ques: "What fraction of Rajya Sabha members retire after every two years?",
            options: ["2/3", "1/3", "1/2", "1/6"],
            ans: "b - 1/3"
        },
        {
            ques: 'Who among the following was the Constitutional Advisor to the Constituent Assembly?',
            options: ["Sachidanand Sinha", "B N Rao", "H N Kunzuru", "V N Menon"],
            ans: "b - B N Rao"
        },
        {
            ques: 'The “Bill of Rights” and “Judicial Review” are features of which of the following countries constitution?',
            options: ["USA", "UK", "Germany", "Australia"],
            ans: "a - USA"
        },
        {
            ques: 'Which amendment of the Indian Constitution has abolished the nomination of Anglo-Indians to the Lok Sabha and Legislative Assemblies?',
            options: ["101th Amendment Act", "102nd Amendment Act", "103rd Amendment Act", "104th Amendment Act"],
            ans: "d - 104th Amendment Act"
        },
        {
            ques: 'Which among the following article was inserted in the Indian Constitution by 42nd amendment 1976, in purview of India being a signatory of Stockholm Conference of 1972?',
            options: ["Article 45", "Article 47", "Article 47 A", "Article 48 A"],
            ans: "d - Article 48 A"
        },
        {
            ques: 'Which act abolished dyarchy in the provinces and introduced provincial autonomy in its place?',
            options: ["Indian Councils Act, 1909", " Government of India Act, 1919", " Government of India Act, 1935", "None of the above"],
            ans: "c -  Government of India Act, 1935"
        },
        {
            ques: 'In which year legislative council of Tamilnadu was abolished?',
            options: ["1983", "1985", "1986", "1987"],
            ans: "c - 1986"
        },
        {
            ques: 'Which of the following article deals with citizenship at the time of commencement of the constitution?',
            options: ["Article 5", "Article 6", "Article 7", "Article 8"],
            ans: "a - Article 5"
        },
        {
            ques: 'On which date, India’s Constituent Assembly adopted the National Flag of India?',
            options: ["26 January, 1947", "26 November, 1947", "22 July, 1947", "26 January, 1950"],
            ans: "c - 22 July, 1947"
        },
        {
            ques: 'Which of following articles constitute the Directive Principles of State Policy in the Indian Constitution?',
            options: ["Article 12 to 35", "Article 36 to 51", "Article 35 to 51", "None of the above"],
            ans: "b - Article 36 to 51"
        }
    ],
    mathematics: [{
            ques: "A dice is thrown. Find the probability of getting an even number?",
            options: ["2/3", "1", "5/6", "1/2"],
            ans: "d - 1/2"
        },
        {
            ques: '100 cards are numbered from 1 to 100. Find the probability of getting a prime number?',
            options: ["3/4", "27/50", "1/4", "29/100"],
            ans: "c - 1/4"
        },
        {
            ques: ' A bag contains 5 red balls and some blue balls.If the probability of drawing a blue ball is double that of a red ball, then the number of blue balls in a bag is?',
            options: [" 5", " 10", "15", "20"],
            ans: "b - 10"
        },
        {
            ques: 'In an AP, if a = 3.5, d = 0, n = 101, then An will be?',
            options: ["0", "3.5", "103.5", "104.5"],
            ans: "b - 3.5"
        },
        {
            ques: 'The first four terms of an AP, whose first term is –2 and the common difference is –2, are?',
            options: ["– 2, 0, 2, 4", "– 2, 4, – 8, 16", "– 2, – 4, – 6, – 8", "– 2, – 4, – 8, –16"],
            ans: "c - – 2, – 4, – 6, – 8"
        },
        {
            ques: ' If the zeroes of the quadratic polynomial x^2 + bx + c , c ≠ 0are equal, then?',
            options: ["c and a have opposite signs", "c and b have opposite signs", "c and a have the same sign", "c and b have the same sign"],
            ans: "c - c and a have the same sign"
        },
        {
            ques: 'The degree of the polynomial (x + 1)(x^2 – x – x^4 +1) is?',
            options: ["2", "3", "4", "5"],
            ans: "d - 5"
        },
        {
            ques: 'If 1/2 is a root of the equation x^2 + kx – (5/4) = 0 then the value of k is?',
            options: ["2", "-2", "3", "-3"],
            ans: "a - 2"
        },
        {
            ques: 'The product of two successive integral multiples of 5 is 300. Then the numbers are?',
            options: ["25, 30", "10, 15", "30, 35", "15, 20"],
            ans: "d - 15, 20"
        },
        {
            ques: 'If x^2 (a2 + b2) + 2x (ac + bd) + c2 +d2 = 0 has no real roots, then?',
            options: ["ad≠bc", "ad<bc", "ad>bc", " all of these"],
            ans: "d -  all of these"
        }
    ],
    science: [{
            ques: "Brass gets discoloured in air because of the presence of which of the following gases in air?",
            options: ["Oxygen", "Hydrogen sulphide", "Carbon dioxide", "Nitrogen"],
            ans: "b - Hydrogen sulphide"
        },
        {
            ques: 'Which of the following is a non metal that remains liquid at room temperature?',
            options: ["Phosphorous", "Bromine", "Chlorine", "Helium"],
            ans: "b - Bromine"
        },
        {
            ques: 'Chlorophyll is a naturally occurring chelate compound in which central metal is?',
            options: ["copper", "magnesium", "iron", "calcium"],
            ans: "b - magnesium"
        },
        {
            ques: '	Minimum distance between and object and real image of a convex lense is?',
            options: ["4<i>f</i>", "3<i>f</i>", "2<i>f</i>", "<i>f</i>"],
            ans: "a - 4<i>f</i>"
        },
        {
            ques: 'Product of Force and Velocity is called?',
            options: ["Work", "Power", "Energy", "Momentum"],
            ans: "b - Power"
        },
        {
            ques: 'The rotational effect of a force on a body about an axis of rotation is described in terms of the?',
            options: ["Centre of gravity", "Centripetal force", "Centrifugal force", "Moment of force"],
            ans: "d - Moment of force"
        },
        {
            ques: 'Which law is also called the law of inertia?',
            options: ["Newton's first law", "Newton's Second Law", "Newton's Third Law", "All of these"],
            ans: "a - Newton's first law"
        },
        {
            ques: 'If a lift is going up with acceleration, the apparent weight of a body is?',
            options: ["More or less the true weight", "Equal to the true weight", "Less than the true weight", "More than the true weight"],
            ans: "d - More than the true weight"
        },
        {
            ques: '	If electrical conductivity increases with the increase of temperature of a substance, then it is a?',
            options: ["Conductor", "Semiconductor", "Insulator", "Carborator"],
            ans: "b - Semiconductor"
        },
        {
            ques: 'The electric motor converts',
            options: ["Electrical energy into mechanical energy", "Mechanical energy into electrical energy", "Electrical energy into light energy", "None of these"],
            ans: "a - Electrical energy into mechanical energy"
        }
    ],
    economy: [{
            ques: "Currently, Aadhaar is NOT being used in India for which of the following purposes?",
            options: ["Identification of beneficiaries under pension schemes and Jan-dhan Programme", "Taxation", "Identification of MGNREGA beneficiaries", "Identification of mid-day meal programme at schools"],
            ans: "a - Identification of beneficiaries under pension schemes and Jan-dhan Programme"
        },
        {
            ques: 'Which of the following is NOT related to the World Trade Organization (WTO)?',
            options: ["Multifiber Agreement", "General Agreement on Trade and Services", "Multilateral Agreement on Investment", "Agreement on Agriculture"],
            ans: "c - Multilateral Agreement on Investment"
        },
        {
            ques: 'Which among the following committees suggested the concept of ” Universal Banking”?',
            options: ["Raja Chelliah Committee", "RH Khan Committee", "Chakravarty Committee", "Abid Hussain Committee"],
            ans: "b - RH Khan Committee"
        },
        {
            ques: 'Revenue-neutral rate (RNR) is a component of which of the following taxes in India?',
            options: ["Goods and Services Tax (GST)", "Income tax", "Customs", "Excise duty"],
            ans: "a - Goods and Services Tax (GST)"
        },
        {
            ques: 'Which among the following finds highest weight age in the Index of Industrial Production?',
            options: ["Electricity", "Finished Steel", "Crudeoil", "Coal"],
            ans: "a - Electricity"
        },
        {
            ques: 'Who is the author of “Poverty and Famines”?',
            options: ["Abhijit Banerjee", "J.R.Harris", "Amartya Sen", "K.N.Raj"],
            ans: "c - Amartya Sen"
        },
        {
            ques: 'What is the percentage decrease in forest cover in the northeast region in the last 2 years?',
            options: ["2.3%", "0.45%", "1.3%", "None of the above"],
            ans: "b - 0.45%"
        },
        {
            ques: 'What is the largest exporter of fruits and vegetables to India?',
            options: ["China", "Afganisthan", "USA", "Bangladesh"],
            ans: "a - China"
        },
        {
            ques: 'What is the value agricultural produce lost due to inadequate cold chain infrastructure?',
            options: ["1 lakh crore", "90,000 crore", "2 lakh crore", "50,000 crore"],
            ans: "b - 90,000 crore"
        },
        {
            ques: 'Which among the following is incorrect regarding the National Dairy Development board?',
            options: ["It was founded in 1965", "It is a statuatory body", "The head office is in Anand,Gujarat", "None of the above"],
            ans: "d - None of the above"
        }
    ]
};


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

var quizBtn = document.querySelector('.quiz-submit');

// var inputOption = document.querySelectorAll('.ques input');

// for (var i = 0; i < inputOption.length; i++) {
//     inputOption[i].addEventListener('click', function (e) {

//         var option = e.target.id;
//         var answer = window.sessionStorage.getItem('answer');

//         try {
//             answer = JSON.parse(answer);
//         } catch (e) {

//         }

//         if (!answer) answer = [];

//         answer[e.target.name.split('ques')[1] - 1] = option;

//         window.sessionStorage.setItem('answer', JSON.stringify(answer));

//         // answer = ['a', 'b'];

//         // console.log(e.target.innerHTML);
//         // window.sessionStorage.setItem('title', e.target.innerHTML);
//         // window.location.href = 'quiz.html';
//     });
// }

quizBtn.addEventListener('click', function (e) {
    e.preventDefault();

    var selectedOption = [];

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 4; j++) {
            var option = document.getElementById('ques' + (i + 1) + '-' + j);
            var optionValue = option.value;
            var isOptionSelected = option.checked;
            if (isOptionSelected) {
                selectedOption[i] = optionValue;
                break;
            }
        }
    }

    window.sessionStorage.setItem('selectedOptions', JSON.stringify(selectedOption));

    console.log(selectedOption);

    window.location.href = '../pages/result.html';
});