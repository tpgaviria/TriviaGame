$(document).ready(function () {

    

    var questionArray = [];



    var backgroundArray = [];

    for (var i = 0; i < 20; i++) {
        randomBackground = Math.floor(Math.random() * (2000));
        backgroundArray.push('https://picsum.photos/1920/1080/?' + randomBackground);
    }

    function changeBackground() {

        // $('#overlay').animate({ opacity: 1, }, 3000);
        $('#overlay').animate({ opacity: 0,}, 2000);
        var imgSrc = backgroundArray[Math.floor(Math.random() * backgroundArray.length)];

        document.body.style.backgroundImage = 'url(' + imgSrc + ')';


    }

    console.log($(this));
    console.log(backgroundArray);


    // global variables
    var questionCounter = 0;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var time = 15;
    var randomNumber;
    var randomAnswer = [0, 1, 2, 3];
    var correctAnswer;
    var userGuess;
    var timedOut = 0;





    //listenting for button click to hide instructions and display first question
    // $('button').on('click', changeBackground);
    $('#start').on('click', function() {$('#overlay').animate({ opacity: 1,}, 500);});
    $('#start').on('click', gameStart);




    function gameStart() {        
        

        setTimeout(changeBackground, 500);

        $('#instructions').css('display', 'none');
        questionArray = [
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
                correctChoice: "Nigeria"
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
                question: "What is the southernmost North American country?",
                choices: ["Panama", "Mexico", "Guatemala", "Cuba"],
                correctChoice: "Panama"
            },
        ];

        setTimeout(showQuestion,1000);
    }




    function showQuestion() {

        

        //clears last question, answers, and timer
        $('#question').empty();
        $('#answers').empty();

        // shows timer
        time = 15;
        timer();

        //show random question from array
        randomNumber = Math.floor(Math.random() * (questionArray.length));
        $('#question').append(questionArray[randomNumber].question);

        // assigns correct answer to variable
        correctAnswer = questionArray[randomNumber].correctChoice;

        //console.log tests
        console.log('array length: ' + questionArray.length);
        console.log(questionArray);
        console.log('random number: ' + randomNumber);
        console.log('Question: ' + questionArray[randomNumber].question);
        console.log('choices: ' + questionArray[randomNumber].choices);
        console.log('correct answer: ' + correctAnswer);
        console.log('--------------------------')

        //function to randomize array of answer indexes
        function shuffle(randomAnswer) {
            for (var j, x, i = randomAnswer.length; i; j = parseInt(Math.random() * i), x = randomAnswer[--i], randomAnswer[i] = randomAnswer[j], randomAnswer[j] = x);
            return randomAnswer;
        };
        // applies function to index array
        randomAnswer = shuffle(randomAnswer);
        console.log(randomAnswer);

        // creates button for each answer
        for (var i = 0; i < randomAnswer.length; i++) {
            $('#answers').prepend('<button>' + questionArray[randomNumber].choices[randomAnswer[i]] + '</button>');
        };

        // click event listener
        $('button').one('click', checkAnswer);


    };





    function checkAnswer() {


        // adds class to button clicked
        $(this).addClass('clicked');

        // assigns text of button to variable
        userGuess = $('.clicked').text();

        //clears timer text
        $('#timer').html('');

        // keeps track of how many questions completed
        questionCounter++;
        console.log('questions answered: ' + questionCounter);
        console.log(userGuess);

        //if answer is correct, display that it was right
        if (userGuess === correctAnswer) {
            clearInterval(clock);
            $('#answers').html('<p><br><br>' + userGuess + ' is correct!</p>');
            correctAnswers++;
        }
        // if answer is wrong, display that it was wrong and show right answer
        else if (userGuess !== correctAnswer) {
            clearInterval(clock);
            $('#answers').html('<p><br><br>Sorry, ' + userGuess + ' is not the right answer.<br><br>The correct answer is ' + correctAnswer + '.</p>');
            incorrectAnswers++;
        }

        console.log('correct answers: ' + correctAnswers + ', wrong answers: ' + incorrectAnswers);

        // removes 'clicked' indentifier
        $(this).removeClass('clicked');

        // after three seconds, see how many questions have been asked
        setTimeout(questionsAsked, 2000);


        //removes question asked from array to avoid repitition
        questionArray.splice(randomNumber, 1);
        
        $('#overlay').animate({ opacity: 1, }, 1000);
        
        setTimeout(changeBackground,1000);

    };





    // creates timer
    function timer() {
        $('#answers').append('<div id="timer"></div>')
        // displays ten seconds left to start
        $('#timer').html('<p>15 seconds left</p>');

        // runs countDown function after one second
        clock = setInterval(countDown, 1000);

        // if time is up, time up message displays and timer is hidden
        function countDown() {
            if (time < 1) {
                clearInterval(clock);
                userTimeout();
                $('#timer').html('');
            };
            // if there is still time left, decrease time by one second
            if (time > 0) {
                time--;
                $('#timer').html('<p>' + time + ' seconds left</p>');
            }
        }
    };



    // shows message if time is up
    function userTimeout() {
        $('#answers').html("<p><br><br>Time's up. The answer was " + correctAnswer + ".</p>");
        timedOut++;
        questionCounter++;
        console.log('questions asked: ' + questionCounter);

        // after three seconds, show next question
        setTimeout(questionsAsked, 3000);

        //removes question asked from array to avoid repitition
        questionArray.splice(randomNumber, 1);

        $('#overlay').animate({ opacity: 1, }, 1500);
        
        setTimeout(changeBackground,1000);

    };




    // at game end, display stats
    function totalScore() {

        $('#question').html('correct answers: ' + correctAnswers + ', wrong answers: ' + incorrectAnswers + 'unanswered questions: ' + timedOut);
        $('#answers').html('');

        // creates button for restart
        var playAgain = ('<button id="restart">Play Again</button>');
        $('#question').append(playAgain);
        $('#restart').on('click', gameStart);

        // resets stats
        questionCounter = 0;
        incorrectAnswers = 0;
        correctAnswers = 0;
        timedOut = 0;

    };



    function questionsAsked() {


        // if questions asked is less than 10, ask another
        if (questionCounter < 10) {
            setTimeout(showQuestion,500);
        };

        // if questions asked is ten, end game and display total
        if (questionCounter >= 10) {
            setTimeout(totalScore,500);
        }

        

    };


    //end document ready
});