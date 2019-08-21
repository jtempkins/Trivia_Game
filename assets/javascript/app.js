    $(document).ready(function () {
            var questionToAsk = [
                {
                    question: "What is the color of the sky?",
                    options: ["Red", "Blue", "Green", "Yellow"],
                    answer: "Blue",
                },
                {
                    question: "What color are my blue socks?",
                    options: ["Red", "Green", "Blue", "Yellow"],
                    answer: "Blue",
                },
                {
                    question: "What is the color of the sun?",
                    options: ["Red", "Blue", "Green", "Yellow"],
                    answer: "Yellow",
                },
                {
                    question: "What color is the ocean?",
                    options: ["Red", "Blue", "Green", "Yellow"],
                    answer: "Green",
                },
                {
                    question: "What is the color is my cat?",
                    options: ["Red", "Blue", "Green", "Orange"],
                    answer: "Orange",
                },
            ];
            var correctCount = 0;
            var incorrectCount = 0;
            var counter;
            var timeleft;
            var questionNumber = -1;
            var gameTimer;
 
            $("#start").on("click", function () {
                  $("#start").hide();
                  displayQuestion();
            });



            //On Click for buttons
            $("#questionBox").on("click",".options", function () {
                var optionselected = $(this).attr("optiontext");
                 var rightanswer = $(this).attr("rightanswer");
                 console.log(optionselected,rightanswer);
                if (optionselected === rightanswer) {
                    correctCount++
                    alert("You guessed correctly!");
                }
                else if 
                    (optionselected !== rightanswer); {
                    incorrectCount++;
                    alert("Oh, sorry, that's not right!");
                }
    
                else {       (timeleft === 0)
                        incorrectCount++;
                        alert("Oh, sorry, that's not right!");
                    }
                        }    
    
    
                displayQuestion();
            });

            function displayQuestion(){
                if(questionNumber < questionToAsk.length-1)
                 { questionNumber++;
                    $("#questionBox").html(`<h2>${questionToAsk[questionNumber].question}</h2>`);
                    for (var i = 0; i < questionToAsk[questionNumber].options.length; i++) {
                    $("#questionBox").append(`<button class="options" 
                                optiontext=${questionToAsk[questionNumber].options[i]}
                                rightanswer=${questionToAsk[questionNumber].answer}>
                                ${questionToAsk[questionNumber].options[i]}</button>`);
                     } 
                     setup();
                 }
                 else{
                     displayResult();
                 }
   
            }

         
            //timer
            function setup(){
                clearInterval(gameTimer)
                timeleft = 10
                gameTimer = setInterval(timeIt, 1000);
            }  
            function timeIt() {
                    $("#timer").text(timeleft);
                        if (timeleft === 0){
                            clearInterval(gameTimer)
                            // timeleft = 20
                        
                        }
                        else {
                            timeleft--
                        }

            }

 
            function displayResult(){
                $("#questionBox").hide();
                $("#resultsBox").append(`
                   <h4>Right:${correctCount}</h4>
                   <h4>Wrong:${incorrectCount}</h4>
                `)
            }
    });
   