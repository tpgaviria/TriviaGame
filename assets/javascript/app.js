$(document).ready(function () {

    var questionArray = [
        {
            question: "What is Earth's largest continent?",
            choices: ["Antarctica", "Africa", "Asia", "North America"],
            correctAnswer: "Asia"
        },
        {
            question: "What country has the most natural lakes?",
            choices: ["United States", "Canada", "Australia", "Greenland"],
            correctAnswer: "Canada"
        },
        {
            question: "What is the driest place on Earth?",
            choices: ["Sahara Desert", "McMurdo Dry Valley, Antarctica", "Death Valley, California", "Arabian Desert"],
            correctAnswer: "McMurdo Dry Valley, Antarctica"
        },
        {
            question: "What is the oldest city in the world?",
            choices: ["Jerusalem", "Damascus, Syria", "Jericho, West Bank", "Athens, Greece"],
            correctAnswer: "Damascus, Syria"
        },
        {
            question: "What country has the most coastline?",
            choices: ["Russia", "China", "United States", "Canada"],
            correctAnswer: "Canada"
        },
        {
            question: "What is the largest country in South America?",
            choices: ["Brazil", "Argentina", "Colombia", "Peru"],
            correctAnswer: "Brazil"
        },
        {
            question: "What is the tallest mountain in the world?",
            choices: ["Mount Everest", "Mount Kilamanjaro", "Mount Fuji", "Mont Blanc"],
            correctAnswer: "Mount Everest"
        },
        {
            question: "What is the capital of Australia?",
            choices: ["Perth", "Melbourne", "Canberra", "Sydney"],
            correctAnswer: "Canberra"
        },
        {
            question: "What is the southernmost country on the Arabian Peninsula?",
            choices: ["Saudi Arabia", "Qatar", "Yemen", "Oman"],
            correctAnswer: "Yemen"
        },
        {
            question: "Montevideo is the capital of what South American country?",
            choices: ["Paraguay", "Uruguay", "Peru", "Venezuela"],
            correctAnswer: "Uruguay"
        },
        {
            question: "What is the only continent with land in all four hemispheres?",
            choices: ["Asia", "Antarctica", "Africa", "Europe"],
            correctAnswer: "Africa"
        },
        {
            question: "What is the southernmost US state?",
            choices: ["Florida", "Hawaii", "Texas", "Alaska"],
            correctAnswer: "Hawaii"
        },
        {
            question: "What river runs through Paris?",
            choices: ["Elbe", "Seine", "Thames", "Danube"],
            correctAnswer: "Seine"
        },
        {
            question: "What is the fasting flowing river in the world?",
            choices: ["Amazon", "Mississippi", "Congo", "Nile"],
            correctAnswer: "Amazon"
        },
        {
            question: "What is the most populated country in Africa?",
            choices: ["South Africa", "Ghana", "Ethiopia", "Nigeria"],
            correctAnswer: "Ethiopia"
        },
        {
            question: "In what country is Transylvania located?",
            choices: ["Croatia", "Slovenia", "Romania", "Russia"],
            correctAnswer: "Romania"
        },
        {
            question: "Which country is NOT part of the Scandanavian Peninsula?",
            choices: ["Norway", "Finland", "Denmark", "Sweden"],
            correctAnswer: "Denmark"
        },
        {
            question: "What is the capitol of Oregon?",
            choices: ["Salem", "Portland", "Eugene", "Gresham"],
            correctAnswer: "Salem"
        },
        {
            question: "What state is home to Yellowstone National Park?",
            choices: ["Wyoming", "Colorado", "Arizona", "Utah"],
            correctAnswer: "Wyoming"
        },
        {
            question: "What state is home to Mount Rushmore?",
            choices: ["South Dakota", "Montana", "Nebraska", "Utah"],
            correctAnswer: "South Dakota"
        },
        {
            question: "What is the smallest US State?",
            choices: ["Connecticut", "Vermont", "Rhode Island", "Delaware"],
            correctAnswer: "Rhode Island"
        },
        {
            question: "What is the longest river in the US?",
            choices: ["Mississippi River", "Missouri River", "Ohio River", "Rio Grande"],
            correctAnswer: "Missouri River"
        },
        {
            question: "What state is home to Yellowstone National Park?",
            choices: ["Wyoming", "Colorado", "Arizona", "Utah"],
            correctAnswer: "Wyoming"
        },
        {
            question: "Which of the Great Lakes is the largest?",
            choices: ["Superior", "Erie", "Michigan", "Ontario"],
            correctAnswer: "Superior"
        },
        {
            question: "What is the capital of California?",
            choices: ["Los Angeles", "Sacramento", "San Fransisco", "San Jose"],
            correctAnswer: "Sacramento"
        },
        {
            question: "What is the capital of California?",
            choices: ["Los Angeles", "Sacramento", "San Fransisco", "San Jose"],
            correctAnswer: "Sacramento"
        },
        {
            question: "What is the southernmost North American country?",
            choices: ["Panama", "Mexico", "Guatemala", "Cuba"],
            correctAnswer: "Panama"
        },
        {
            question: "What is the capital of California?",
            choices: ["Los Angeles", "Sacramento", "San Fransisco", "San Jose"],
            correctAnswer: "Sacramento"
        },

    ]

    // global variables
    var questionCounter = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var time = 15;
    var randomNumber = Math.floor(Math.random() * (questionArray.length + 1));
    var randomAnswer = [0, 1, 2, 3];

    // function shuffle(randomAnswer) {
    //     for (var j, x, i = randomAnswer.length; i; j = parseInt(Math.random() * i), x = randomAnswer[--i], randomAnswer[i] = randomAnswer[j], randomAnswer[j] = x);
    //     return randomAnswer;
    // };

    // randomAnswer = shuffle(randomAnswer);


    console.log(randomNumber);
    console.log(questionArray.length);


    function showQuestion() {        
        //show random question from array
        randomNumber = Math.floor(Math.random() * (questionArray.length + 1));
        $('#question').append(questionArray[randomNumber].question);

        //shuffle answers
        function shuffle(randomAnswer) {
            for (var j, x, i = randomAnswer.length; i; j = parseInt(Math.random() * i), x = randomAnswer[--i], randomAnswer[i] = randomAnswer[j], randomAnswer[j] = x);
            return randomAnswer;
        };

        randomAnswer = shuffle(randomAnswer);
        console.log(randomAnswer);

        for (var i = 0; i < randomAnswer.length; i++) {            
            $('#answers').append('<button>' + questionArray[randomNumber].choices[randomAnswer[i]] + '</button>');
        };

        console.log(questionArray[randomNumber].choices);
        questionArray.splice(randomNumber, 1);
    }

$


    showQuestion();
    // $('#questions').append();


    //end document ready
});