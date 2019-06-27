export const renderOption = (option) => {
  const markup = `
    <li>
      <input type="radio" name="radio" id="" value="delhi" />
      <label for="option1">${option}</label>
    </li>
  `;
  return markup;
};
