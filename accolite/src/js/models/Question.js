import axios from 'axios';

import data from '../data/data.json';

export const Question = () => {
  function getQuestions() {
    // Here will be asynchronous call to get data from server
    return data;
  }
  return {
    getQuestions: getQuestions
  }
}