
import { Question } from './models/Question';

// Questions view
import { renderQuestion } from './views/questionView';


const allQuestions = Question().getQuestions();


renderQuestion(allQuestions);

