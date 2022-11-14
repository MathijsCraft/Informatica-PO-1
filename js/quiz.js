const wrongAnswers =  `<div class="callout callout-success callout-hidden" id="msg-success"><span class="text-dark"><strong>Correct!</strong></span></div>`;
const correctAnswers = `<div class="callout callout-error callout-hidden" id="msg-success"><span class="text-dark"><strong>Fout!</strong></span></div>`;

(function(){
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];

      quizrow.style.display = "block";
      console.log("Function buildQuiz() called");
      document.getElementById("StartRow").style.display = "none";
  
      // for each question...
    quizQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      quizQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';

          // Add a div below the question with information about the correct answer
          // currentQuestion.insertAdjacentHTML('beforebegin', correctAnswers);
          const question = document.getElementById("question");
          console.log("Appending correctAnswers");
          answerContainers[questionNumber].appendChild(correctAnswers);


        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    // Questions
const quizQuestions = [
    {
      question: "Multiple Choise Question",
      answers: {
        a: "Answer 1",
        b: "Answer 2",
        c: "Answer 3"
      },
      correctAnswer: "c"
    },
    {
        question: "Multiple Choise Question",
        answers: {
          a: "Answer 1",
          b: "Answer 2",
          c: "Answer 3"
        },
        correctAnswer: "c"
      },
      {
        question: "Multiple Choise Question",
        answers: {
          a: "Answer 1",
          b: "Answer 2",
          c: "Answer 3",
          d: "Answer 4"
        },
        correctAnswer: "d"
      },
  ];

   

  const quizrow = document.getElementById("quiz-row");
  quizrow.style.display = "none";

  document.getElementById("startQuiz").onclick = function() {buildQuiz()};
  
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
  })();