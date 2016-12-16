
    var questions = [
        {
            question: "The new Asbury Hotel was once a famous hospital...which one?",
            choices: ["General Hospital", "Monmouth Regional", "Salvation Army Hospital",
                      "Asbury Park Clinic"],
            correctChoice: 2,
            image: "assets/images/TheAsbury.jpg",
            text: "black"

        },
        {
            question: "What famous eaterie displays the wall murals of the Palace Amusements?",
            choices: ["McCloones", "Asbury Park Convention Hall", "Asbury Park Casino", "The Wonder Bar"],
            correctChoice: 3,
            image: "assets/images/BlueHourWonderBar.jpg",
            text: "ivory"
        },
        {
            question: "What was the name of Bruce Springsteen's original band?",
            choices: ["The Ramones","The E Street Band","Cream","Asbury Park Revue"],
            correctChoice: 1,
            image: "assets/images/Greetings_from_Asbury_Park_NJ.jpg",
            text: "ivory"
        },
        {
            question: "The Carousel from the Casino Pier is still operational and resides where?",
            choices: ["Coney Island, NY","Myrtle Beach, SC","Long Branch, NJ","Atlantic City, NJ"],
            correctChoice: 1,
            image: "assets/images/AsburyParkCarousel.jpg",
            text: "blue"
        }, 
         {
            question: "What famous Jersey Girl recorded a video at Asbury Park Convention Hall in 1979?",
            choices: ["Debbie Harry","Pat Benatar","Joan Jet","Grace Slick"],
            correctChoice: 0,
            image: "assets/images/APCH.jpg",
            text: "ivory"
        }, 
        {
            question: "What world-famous Cuban group performed at Asbury Park's Stone Pony?",
            choices: ["Irakere","El Gran Combo","Buena Vista Social Club","Sandunguera"],
            correctChoice: 2,
            image: "assets/images/StonePony.jpg",
            text: "ivory"
        },
        {
            question: "Which year did Asbury Park first break the record for most Zombies in one gathering?",
            choices: ["1996","2005","2013","2010"],
            correctChoice: 3,
            image: "assets/images/Zombies!.jpg",
            text: "ivory"
        },
        {
            question: "What famous TV comedy show references the 'uranium field in Asbury Park'?",
            choices: ["I Love Lucy","The HoneyMooners","The Munsters","Burns & Allen"],
            correctChoice: 1,
            image: "assets/images/TheHoneymooners.jpg",
            text: "ivory"
        },
        {
            question: "What famous Baseball Team once held their Spring Training in Asbury Park?",
            choices: ["Boston Red Sox", "NY Mets", "Phillies","NY Yankees"],
            correctChoice: 3,
            image: "assets/images/yankees.jpg",
            text: "red"
        },
        {
            question: "What is the name of the famous grinning figure Asbury Park is known for?",
            choices: ["Tillie", "George", "Juicy","Fred"],
            correctChoice: 0,
            image: "assets/images/tillie.jpg",
            text: "red"
        }               
    ]

    var currQuery = 0;
    var answer    = ""; 
    var question;
    var number    = 10;
    var correct   = 0;
    var incorrect = 0;    

    // Load the question and options, etc. 
    function nextQuestion(q) {
        $('#counter').html('<br>');
        $('#query').html('');
        $('#buttons').html('');

        question = questions[q];
        answer   = question.choices[question.correctChoice]; 
        $('#title').css('color', question.text);
        $('#counter').css('color', question.text).css('border-color', question.text);
        $('#query').text(question.question).css('color', question.text);
        for (var i = 0; i<question.choices.length; i++) {
            $('#buttons').append('<br><input type="radio" name="ask" value=' + i + 
                                 ' class="radiobtn">' + question.choices[i]); 
        }
        $('#buttons').css('color', question.text);
        run();
    }

    function checkCounter(){
        if (currQuery < questions.length-1) {
            currQuery++
            nextQuestion(currQuery); 
        } else {
            $('#title').css('color', 'white');
            $('#counter').css('border-color', 'white'); 
            $('#query').html('Correct answers   = ' + correct + '<br>' + 
                             'Incorrect answers = ' + incorrect + '<br><br>').css('color', 'white');
            var msg = "";
            if (correct >= 8) {
                msg = "You rock!";                
            } else if (correct <= 5) {
                msg = "Hmmm...needs some work.";
            } else if (correct < 8) {
                msg = "OK...see you at the shore for some OJT.";
            }
            $('#query').append(msg).css('color', 'white');
            var button = $('<button>').text('Play again?');
            $('#buttons').append(button);
        }
    }

   $('button').on('click', function(){
        var currQuery = 0;
        var answer    = ""; 
        var question;
        var number    = 11;
        var correct   = 0;
        var incorrect = 0;   
        nextQuestion(currQuery);
    })

    function run() {
        number = 11;
        counter = setInterval(decrement,1000);
    }

    function decrement() {
        number--; 
        $("#counter").html('Time to guess: ' + number).css('color', question.text);
        // $("#counter").css('border-color', question.text); 
        
        if (number === 0) {
            stop();
        }
    }

    function stop() {
        clearInterval(counter);
        $('#counter').empty()     
        $('#query').text("Times up! The correct answer is " + answer + "!").css('color', question.text);
        $('#buttons').empty();  
        incorrect++;          
        setTimeout(checkCounter,3000);        
    }

    nextQuestion(currQuery); 

    $(document).on('change', '.radiobtn', function(){
        clearInterval(counter);
        $('#counter').empty();
        var name = $( "input[name='ask']:checked" ).val();
        if (name == question.correctChoice){
            $('#container').css('background-image', 'url(' + question.image + ')'); 
            $('#query').html('<br>Correct!').css('color', question.text); 
            correct++;          
        }else {
            $('#query').html('<br>').text("Incorrect! The correct answer is " + answer + "!").css('color', question.text);
            incorrect++; 
        }      
        $('#buttons').empty();
        setTimeout(checkCounter,3000);

        return false; 
    });

