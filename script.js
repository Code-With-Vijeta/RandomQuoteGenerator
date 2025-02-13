// random quote generator

let randomQuotes = [
"Love what you do to achieve great work.",
    "Difficulty brings opportunity.",
    "Life happens while making other plans.",
    "It's never too late to become who you might be.",
    "Be yourself, everyone else is taken.",
    "Success is not final; failure isn't fatal.",
    "Life's purpose is to make a difference, not to be happy.",
    "Being yourself in a conforming world is an accomplishment.",
    "Happiness depends on ourselves.",
    "Life is simple; we complicate it.",
    "We remember moments, not days.",
    "Predict the future by creating it.",
    "Evil triumphs when good men do nothing.",
    "Be the change you wish to see.",
    "An unexamined life is not worth living.",
    "Take the road less traveled and leave a trail.",
    "The mind shapes what you become.",
    "Life is a daring adventure or nothing.",
    "Fear itself is the only thing to fear.",
    "It always seems impossible until done.",
    "True wisdom is knowing you know nothing.",
    "Make the days count, don't count the days.",
    "Face the sunshine, shadows fall behind.",
    "Injustice anywhere threatens justice everywhere.",
    "What lies within us matters more than what lies ahead.",
    "Greatness often leads to misunderstanding.",
    "Life is short; make it sweet.",
    "Doubts today limit tomorrow's realization.",
    "You miss 100% of untried opportunities.",
    "Start doing, stop talking.",
    "Strive to be valuable, not just successful.",
    "Smile because it happened, not because it's over.",
    "A journey begins with one step.",
    "Choices define us, more than abilities.",
    "What you do makes a difference; act accordingly.",
    "Live right; once is enough.",
    "Success is about making a positive impact.",
    "Be too busy to search for success.",
    "Imagination turns into reality.",
    "Slow progress is fine as long as you don't stop.",
    "Believe the impossible to achieve it.",
    "Time is precious, yet often wasted.",
    "Keep going through challenges.",
    "True glory lies in rising after each fall.",
    "Do what you can, where you are.",
    "Life goes on, no matter what.",
    "Keep going like the clock.",
    "Believe in the beauty of your dreams.",
    "Excellence is a habit, not an act.",
    "To have a friend, be one.",
    "Happiness leads to success, not the other way around.",
    "Depth of life matters more than length."
];



const ranNum= document.getElementsByClassName('btn')[0]
const quote= document.getElementsByClassName('quotes')[0]
ranNum.addEventListener("click",function(){
    const randomIndex = Math.floor(Math.random() * randomQuotes.length);
    const randomElement = randomQuotes[randomIndex];
    quote.textContent = randomElement;
})