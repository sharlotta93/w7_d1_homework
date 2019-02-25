const PubSub = require('../helpers/pub_sub.js');

const ResultView = function() {

};

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:result-checked', (event) => {
    const result = event.detail;
    this.displayResult(result);
  })
};

ResultView.prototype.displayResult = function (result) {
  const resultElement = document.querySelector('#result');
  if (result === true) {
  resultElement.textContent = `Yes! It is a prime number!`;
  } else {
  resultElement.textContent = `Nah! It is not a prime number!`;
  }
};

module.exports = ResultView;
