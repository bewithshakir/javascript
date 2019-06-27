export const renderOption = (option) => {
  const markup = `
    <li>
      <input type="radio" name="radio" id="${option}" value="option" class="question-option"/>
      <label for="${option}">${option}</label>
    </li>
  `;
  return markup;
};
