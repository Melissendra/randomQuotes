// Array literal which contains quotes' objects
const quotes = [
  {
    quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    source: "Marilyn Monroe",
    citation: "Speech",
    year: 1968,
    tag: "Humor"
  },
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    citation: "Speech",
    year: 1947, 
    tag: "Humor"
  },
  {
    quote:"A room without books is like a body without a soul.",
    source:"Marcus Tallius Cicero",
    citation: "Essay"
  },
  {
    quote:"Be the change that you wish to see in the world.",
    source: "Mahatma Gandhi",
    citation: "Speech",
    tag:"Thinking"
  },
  {
    quote:"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    source:"J.K.Rowling",
    citation: "Harry Potter and the Goblet of Fire",
    year: 2000,
    tag: "Advices"
  },
  {
    quote:"A friend is someone who knows all about you and still loves you.",
    source:"Elbert Hubbard",
    tag: "Thinking"
  },
  {
    quote:"It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
    source: "Maurice Switzer",
    citation: "Book: Mrs. Goose",
    tag: "Humor"
  },
  {
    quote: "Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.",
    source: "Groucho Marx",
    citation: "Book: The Essential Groucho: writings by, for and about Groucho Marx",
    year: 2000,
    tag: "Humor"
  },
  {
    quote:"Vote for the man who promise least, he'll be the least disappointing.",
    source:"Bernard Baruch",
    citation: "Speech",
    tag: "Politic"
  }
];


// create a function to have randomly a quote
function getRandomQuote(){
  let randomNbr = Math.floor(Math.random() * quotes.length);
  let randomQuotes = quotes[randomNbr];
  return randomQuotes;
}

// function for getting a random color
function getRandomColor(){
  let letters, color;
  letters = "123456789ABCDEF";
  color = "#";
  for(var i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)]; 
  }
  return color;
}

// showing the quotes in the browser
function printQuote(){

  // calling og the getRandomQuote function
  const quotesRandom = getRandomQuote();
  let sentence = "";

  sentence += "<p class='quote'>" + quotesRandom.quote + "</p>";
  sentence += "<p class='source'>" + quotesRandom.source;
    

  // condition to decide what will appear in the browser.
  if(quotesRandom.citation){
    sentence += "<span class='citation'>" + quotesRandom.citation + "</span>";
  }
  if(quotesRandom.year){
    sentence += "<span class='year'>" + quotesRandom.year + "</span>";
  }
  if(quotesRandom.tag){
    sentence += "<span class='tag'>,  " + quotesRandom.tag+ "</span></p>";
  }

  const HTML = document.getElementById('quote-box');
  HTML.innerHTML = sentence;

  // call of the random color function
  const randomColor = getRandomColor()
  document.body.style.backgroundColor = randomColor;


  // set the button the same color as the body background
  document.getElementById("loadQuote").style.backgroundColor = randomColor;
}

// auto-refresh quotes
setInterval( () => {
  printQuote();
}, 5000);

// function for the button, when clicked a new quote will appear
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


