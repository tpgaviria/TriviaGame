$(document).ready(function () {

    var questionArray = [
        {
            question: "What is Earth's largest continent?",
            choices: ["Antarctica", "Africa", "Asia", "North America"],
            correctChoice: "Asia"
        },
        {
            question: "What country has the most natural lakes?",
            choices: ["United States", "Canada", "Australia", "Greenland"],
            correctChoice: "Canada"
        },
        {
            question: "What is the driest place on Earth?",
            choices: ["Sahara Desert", "McMurdo Dry Valley, Antarctica", "Death Valley, California", "Arabian Desert"],
            correctChoice: "McMurdo Dry Valley, Antarctica"
        },
        {
            question: "What is the oldest city in the world?",
            choices: ["Jerusalem", "Damascus, Syria", "Jericho, West Bank", "Athens, Greece"],
            correctChoice: "Damascus, Syria"
        },
        {
            question: "What country has the most coastline?",
            choices: ["Russia", "China", "United States", "Canada"],
            correctChoice: "Canada"
        },
        {
            question: "What is the largest country in South America?",
            choices: ["Brazil", "Argentina", "Colombia", "Peru"],
            correctChoice: "Brazil"
        },
        {
            question: "What is the tallest mountain in the world?",
            choices: ["Mount Everest", "Mount Kilamanjaro", "Mount Fuji", "Mont Blanc"],
            correctChoice: "Mount Everest"
        },
        {
            question: "What is the capital of Australia?",
            choices: ["Perth", "Melbourne", "Canberra", "Sydney"],
            correctChoice: "Canberra"
        },
        {
            question: "What is the southernmost country on the Arabian Peninsula?",
            choices: ["Saudi Arabia", "Qatar", "Yemen", "Oman"],
            correctChoice: "Yemen"
        },
        {
            question: "Montevideo is the capital of what South American country?",
            choices: ["Paraguay", "Uruguay", "Peru", "Venezuela"],
            correctChoice: "Uruguay"
        },
        {
            question: "What is the only continent with land in all four hemispheres?",
            choices: ["Asia", "Antarctica", "Africa", "Europe"],
            correctChoice: "Africa"
        },
        {
            question: "What is the southernmost US state?",
            choices: ["Florida", "Hawaii", "Texas", "Alaska"],
            correctChoice: "Hawaii"
        },
        {
            question: "What river runs through Paris?",
            choices: ["Elbe", "Seine", "Thames", "Danube"],
            correctChoice: "Seine"
        },
        {
            question: "What is the fasting flowing river in the world?",
            choices: ["Amazon", "Mississippi", "Congo", "Nile"],
            correctChoice: "Amazon"
        },
        {
            question: "What is the most populated country in Africa?",
            choices: ["South Africa", "Ghana", "Ethiopia", "Nigeria"],
            correctChoice: "Ethiopia"
        },
        {
            question: "In what country is Transylvania located?",
            choices: ["Croatia", "Slovenia", "Romania", "Russia"],
            correctChoice: "Romania"
        },
        {
            question: "Which country is NOT part of the Scandanavian Peninsula?",
            choices: ["Norway", "Finland", "Denmark", "Sweden"],
            correctChoice: "Denmark"
        },
        {
            question: "What is the capitol of Oregon?",
            choices: ["Salem", "Portland", "Eugene", "Gresham"],
            correctChoice: "Salem"
        },
        {
            question: "What state is home to Yellowstone National Park?",
            choices: ["Wyoming", "Colorado", "Arizona", "Utah"],
            correctChoice: "Wyoming"
        },
        {
            question: "What state is home to Mount Rushmore?",
            choices: ["South Dakota", "Montana", "Nebraska", "Utah"],
            correctChoice: "South Dakota"
        },
        {
            question: "What is the smallest US State?",
            choices: ["Connecticut", "Vermont", "Rhode Island", "Delaware"],
            correctChoice: "Rhode Island"
        },
        {
            question: "What is the longest river in the US?",
            choices: ["Mississippi River", "Missouri River", "Ohio River", "Rio Grande"],
            correctChoice: "Missouri River"
        },
        {
            question: "What state is home to Yellowstone National Park?",
            choices: ["Wyoming", "Colorado", "Arizona", "Utah"],
            correctChoice: "Wyoming"
        },
        {
            question: "Which of the Great Lakes is the largest?",
            choices: ["Superior", "Erie", "Michigan", "Ontario"],
            correctChoice: "Superior"
        },
        {
            question: "What is the capital of California?",
            choices: ["Los Angeles", "Sacramento", "San Fransisco", "San Jose"],
            correctChoice: "Sacramento"
        },
        {
            question: "What is the capital of California?",
            choices: ["Los Angeles", "Sacramento", "San Fransisco", "San Jose"],
            correctChoice: "Sacramento"
        },
        {
            question: "What is the southernmost North American country?",
            choices: ["Panama", "Mexico", "Guatemala", "Cuba"],
            correctChoice: "Panama"
        },
        {
            question: "What is the capital of California?",
            choices: ["Los Angeles", "Sacramento", "San Fransisco", "San Jose"],
            correctChoice: "Sacramento"
        },

    ]

    // global variables
    var questionCounter = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var time = 15;
    var randomNumber;;
    var randomAnswer = [0, 1, 2, 3];
    var correctAnswer;
    var userGuess;

    // function shuffle(randomAnswer) {
    //     for (var j, x, i = randomAnswer.length; i; j = parseInt(Math.random() * i), x = randomAnswer[--i], randomAnswer[i] = randomAnswer[j], randomAnswer[j] = x);
    //     return randomAnswer;
    // };

    // randomAnswer = shuffle(randomAnswer);

    console.log('array length: ' + questionArray.length);


    function showQuestion() {
           
        //show random question from array
        randomNumber = Math.floor(Math.random() * (questionArray.length + 1));
        $('#question').append(questionArray[randomNumber].question);

        console.log(questionArray[randomNumber].choices);

        correctAnswer = questionArray[randomNumber].correctChoice;
        console.log(correctAnswer);

        //shuffle and display answers as buttons
        function shuffle(randomAnswer) {
            for (var j, x, i = randomAnswer.length; i; j = parseInt(Math.random() * i), x = randomAnswer[--i], randomAnswer[i] = randomAnswer[j], randomAnswer[j] = x);
            return randomAnswer;
        };

        randomAnswer = shuffle(randomAnswer);
        console.log(randomAnswer);

        for (var i = 0; i < randomAnswer.length; i++) {
            $('#answers').append('<button>' + questionArray[randomNumber].choices[randomAnswer[i]] + '</button>');
    
        };
        $('button').one('click', checkAnswer);
    };

    
    


    questionArray.splice(randomNumber, 1);
    console.log(questionArray);

    function checkAnswer() {
        $('#answers').css("display", "none");
        $(this).addClass('clicked');
        $('button').unbind('click');
        userGuess = $('.clicked').text();
        //console.log($(this).text());
        console.log(userGuess);
        //  console.log(userGuess);
        if (userGuess === correctAnswer) {
            //	clearInterval(clock);
            console.log(userGuess + ' is right!');
            correctAnswers++;
        }
        else if (userGuess !== correctAnswer) {
            //	clearInterval(clock);
            console.log(userGuess + ' is wrong!');
            incorrectAnswers++;
        }
        console.log('correct answers: ' + correctAnswers + ', wrong answers: ' + incorrectAnswers);

        $(this).removeClass('clicked');
        
    };

    showQuestion();
    // $('#questions').append();


    //end document ready
});