
    var questions = [
        {
            question: "The new Asbury Hotel was once a famous hospital...which one?",
            choices: ["General Hospital", "Monmouth Regional", "Salvation Army Hospital",
                      "Asbury Park Clinic"],
            correctChoice: 2,
            image: "assets/images/TheAsbury.jpg"

        },
        {
            question: "What famous eaterie displays the wall murals of the Palace Amusements?",
            choices: ["McCloones", "Asbury Park Convention Hall", "Asbury Park Casino", "The Wonder Bar"],
            correctChoice: 3,
            image: "assets/images/BlueHourWonderBar.jpg"
        },
        {
            question: "What was the name of Bruce Springsteen's original band?",
            choices: ["The Ramones","The E Street Band","Cream","Asbury Park Revue"],
            correctChoice: 1,
            image: "assets/images/Greetings_from_Asbury_Park_NJ.jpg"
        },
        {
            question: "The Carousel from the Casino Pier is still operational and resides where?",
            choices: ["Coney Island, NY","Myrtle Beach, SC","Long Branch, NJ","Atlantic City, NJ"],
            correctChoice: 1,
            image: "assets/images/AsburyParkCarousel.jpg"
        }, 
         {
            question: "What famous Jersey Girl recorded a video at Asbury Park Convention Hall in 1979?",
            choices: ["Debbie Harry","Pat Benatar","Joan Jet","Grace Slick"],
            correctChoice: 0,
            image: "assets/images/APCH.jpg"
        }, 
        {
            question: "What world-famous Cuban group performed at Asbury Park's Stone Pony?",
            choices: ["Irakere","El Gran Combo","Buena Vista Social Club","Sandunguera"],
            correctChoice: 2,
            image: "assets/images/StonePony.jpg"
        },
        {
            question: "Which year did Asbury Park first break the record for most Zombies in one gathering?",
            choices: ["1996","2005","2013","2010"],
            correctChoice: 3,
            image: "assets/images/Zombies.jpg"
        },
        {
            question: "What famous TV comedy show references the 'uranium field in Asbury Park'?",
            choices: ["I Love Lucy","The HoneyMooners","The Munsters","Burns & Allen"],
            correctChoice: 0,
            image: "assets/images/TheHoneymooners.jpg"
        },
        {
            question: "What is the name of the famous grinning figure Asbury Park is known for?",
            choices: ["Tillie", "George", "Juicy","Fred"],
            correctChoice: 0,
            image: "assets/images/tillie.jpg"
        },
        {
            question: "What famous Baseball Team once held their Spring Training in Asbury Park?",
            choices: ["Boston Red Sox", "NY Mets", "Phillies","NY Yankees"],
            correctChoice: 3,
            image: "assets/images/yankees.jpg"
        }          
    ]

    var currQuery = 0; 
    var question; 

    // Load the question and options, etc. 
    function nextQuestion(q) {
        debugger;
        $('#query').html('');
        $('#buttons').html('');

        question = questions[q];
        $('#query').text(question.question);
        for (var i = 0; i<question.choices.length; i++) {
            $('#buttons').append('<br><input type="radio" name="ask" value=' + i + 
                                 ' class="radiobtn">' + question.choices[i]); 
        }
    }

    nextQuestion(currQuery);

    $('.radiobtn').change(function(){
        debugger;
        var name = $( "input[name='ask']:checked" ).val();
        if (name == question.correctChoice){
            $('#container').css('background-image', 'url(' + question.image + ')');
            $('#query').text("Correct!");
            //$('#buttons').empty();            
        }else {
            alert('Incorrect!  Want to try again?');
        }
        setTimeout('',3000);

        if (currQuery < questions.length) {
            currQuery++;
            nextQuestion(currQuery);
        }    

        return false; 
    });

