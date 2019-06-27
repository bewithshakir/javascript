import { elements } from './views/base';
import { Question } from './models/Question';

// Questions view
import { renderQuestion } from './views/questionView';


const allQuestions = Question().getQuestions();


//renderQuestion(allQuestions);

// Question Controller

window.addEventListener('load', () => {

  // Default question load
  const question = allQuestions.splice(0, 1);
  // Render default question
  renderQuestion(question);

  const allOptions = document.querySelectorAll('.question-option');



  // document.getElementById('r1').checked

  // Get Next question
  elements.nextBtn.addEventListener('click', () => {

    const question = allQuestions.splice(0, 1);
    // Render default question
    // renderQuestion(question);

    // get all question options
    allOptions.forEach((radio) => {
      console.log(radio.checked)
    });

  });
});
