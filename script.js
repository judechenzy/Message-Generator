const quotes = [
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams. -Dr. Seuss",
    "In three words I can sum up everything I've learned about life: it goes on. -Robert Frost",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. -J.K. Rowling",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel. -Maya Angelou",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. -Ralph Waldo Emerson",
    "You only live once, but if you do it right, once is enough. -Mae West",
    "I have not failed. I've just found 10,000 ways that won't work. -Thomas Edison",
    "It does not matter how slowly you go as long as you do not stop. -Confucius",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. -Winston Churchill"
  ];
  
  const quoteBox = document.querySelector('.quote-box');
  const generateQuoteButton = document.querySelector('#generate-quote-button');
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteBox.querySelector('.quote').textContent = quote;
  }
  
  generateQuoteButton.addEventListener('click', generateQuote);
 