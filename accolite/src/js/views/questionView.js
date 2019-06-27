import { elements } from './base';
// views js
import { renderOption } from './optionView';

export const renderQuestion = (questions) => {

  const questionMarkup = questions.map(question => {
    const markup = `
      <h2>${question.title}</h2>
      <fieldset class="radiogroup">
        <ul class="radio answers_options">
          ${(question.options.map(option => renderOption(option)).join(''))}
        </ul>
      </fieldset>`
      ;
    return markup;
  }).join('');

  elements.questionContainer.innerHTML = '';
  elements.questionContainer.insertAdjacentHTML('beforeend', questionMarkup);
};
