// Array literal which contains quotes' objects
const quotes = [
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    citation: "Speech",
    year: 1968
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    citation: "Speech",
    year: 1947
  },
  {
    quote:"A room without books is like a body without a soul.",
    source:"Marcus Tallius Cicero",
    citation: "Essay",
  },
  {
    quote:"Be the change that you wish to see in the world.",
    Source: "Mahatma Gandhi",
    citation: "Speech"
  },
  {
    quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source:"J.K.Rowling",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000
  },
  {
    quote:"A friend is someone who knows all about you and still loves you.",
    Source:"Elbert Hubbard"
  },
  {
    quote:"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
    Source: "Maurice Switzer",
    citation: "Book: Mrs. Goose"
  }
]


// create a function to choose randomly a quote
function getRandomQuote(){
  let randomNbr = Math.floor(Math.random() * quotes.length);
  let randomQuotes = quotes[randomNbr];
  return randomQuotes;
}



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/
function printQuote(){
  const quotesRandom = getRandomQuote();
  let sentence = "";
  sentence = document.getElementById('quote-box').innerHTML = quotes;
  for(let i = 0; i < quotes.length; i++){
    
  }
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.