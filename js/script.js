
/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
// Here I created an array of objects which were five quotes to include the source and the actual quote. 
 |I also gave a date for one quote and source for another and the logged it to the console.
 ***/ 

var quotes = [
  {
    quote : "Nothing in the universe can stop you.",
    source : "Guy Finley"
  },
  {
    quote : "The beginning is always today.",
    source : "Mary Wollstonecraft Shelley"  
  },
  {
    quote : "Every moment is a fresh beginning.",
    source : "T.S.Eliot"
  },
  {
    quote : "It's never too late to be what you might have been.",
    source : "George Eliot"
  },
  {
    quote : "A journey of a thousand miles begins with a single step.",
    source : "Lao Tzu",
    citation : "Poem",
    year : "circa 604 BCE - circa 531 BCE",
  },
]

console.log(quotes);

function getRandomQuote() {
  var quoteIndex = Math.floor(Math.random() * (quotes.length));
  return quotes[quoteIndex];
}
console.log(getRandomQuote());
/*** I created a function getRandomQuote, added a variable to be able to generate the quotes randomly, 
and created an alert that pulls quotes
***/ 



/*** In this part of my code I introduced a lil shorty(function) named printQuote that had some homies(variables)
named htmlString and actualQuote. They have to be brothers because they have some wild names don't they?! 
Anywho so check it I have to tell yall htmlString is empty but with good reason, I'll get to why a little
later in my story. His brother actualQuote always had randomQuote(s) hanging around the squad. Granted htmlString
is empty he always had properties named quote and source, and one time he even had citation and year. 
But they only showed up if conditions permitted. It's ok though htmlString doesn't need that type of energy around
all the time just that one instance.   
***/

function printQuote() {
 var htmlString = '';
 var actualQuote = getRandomQuote();

 htmlString = '<p class="quote">' + actualQuote.quote + '</p>';
 htmlString += '<p class="source">' + actualQuote.source 
 if(actualQuote.citation) {
  htmlString += '<span class="citation">' + actualQuote.citation + '</span>';
 }
 if(actualQuote.year) {
  htmlString += '<span class="year">' + actualQuote.year + '</span>';
 }
 htmlString += '</p>';
 document.getElementById('quote-box').innerHTML = htmlString; 
}
function GetMeARandomColor(quotes){
  var aEverything = ["0", "1", "2", "3", "4"]
  var sTheColor = "#";
for(i=0; i < 6; i++)
{
   iRandomQuote = Math.floor(Math.random()* 5);
   sTheColor += aEverything[iRandomQuote];
console.log(sTheColor);
}  
return sTheColor;
}
/*** Once printQuote starts doing his thing and working properly you can see him on a webpage. Slide through
quotes randomly. Thanks for your time and patience while reading my rookie code. The story kinda shows the
reader how the information is being processed in my mind. 
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
