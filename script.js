let colors = [
"#16a085",
"#27ae60",
"#2c3e50",
"#f39c12",
"#e74c3c",
"#9b59b6",
"#FB6964",
"#342224",
"#472E32",
"#BDBB99",
"#77B1A9",
"#73A857"];


let quotes = ["The best way to predict the future is to create it",
"Winners never quit and quitters never win",
"My biggest motivation? Just to keep challenging myself. I see life almost like one long University education that I never had -- everyday I’m learning something new",
"Every time you state what you want or believe, you’re the first to hear it. It’s a message to both you and others about what you think is possible. Don’t put a ceiling on yourself",
"It’s fine to celebrate success but it is more important to heed the lessons of failure",
"It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you’ll do things differently",
"One of the huge mistakes people make is that they try to force an interest on themselves. You don't choose your passions; your passions choose you",
"I have not failed. I’ve just found 10,000 ways that won’t work",
"Logic will get you from A to B. Imagination will take you everywhere",
"As long as you’re going to be thinking anyway, think big",
"Success is walking from failure to failure with no loss of enthusiasm",
"Genius is 1% inspiration, and 99% perspiration",
"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand",
"If you cannot do great things, do small things in a great way",
"I don’t know the key to success, but the key to failure is trying to please everybody",
"Success is not what you have, but who you are",
"To win without risk is to triumph without glory",
"Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great",
"There is only one success- to be able to spend your life in your own way",
"Whatever the mind can conceive and believe, the mind can achieve",
"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful",
"What is not started will never get finished",
"When you cease to dream you cease to live",
"Formal education will make you a living; self-education will make you a fortune",
"The most valuable thing you can make is a mistake- you can’t learn anything from being perfect",
"A leader is one who knows the way, goes the way, and shows the way",
"The function of leadership is to produce more leaders, not more followers",
"Choose a job that you like, and you will never have to work a day in your life",
"Your most unhappy customers are your greatest source of learning"];

console.log(quotes[3].length);

let authors = ["Peter Drucker",
"Vince Lombardi",
"Richard Branson",
"Oprah Winfrey",
"Bill Gates",
"Warren Buffett",
"Jeff Bezos",
"Thomas Edison",
"Albert Einstein",
"Donald Trump",
"Winston Churchill",
"Thomas Edison",
"Vince Lombardi",
"Napoleon Hill",
"Bill Cosby",
"Bo Bennet",
"Corneille",
"Mark Twain",
"Christopher Morley",
"Napoleon Hill",
"Albert Schweitzer",
"Johann Wolfgang von Goethe",
"Malcolm Forbes",
"Jim Rohn",
"Adam Osborne",
"John C. Maxwell",
"Ralph Nader",
"Confucius",
"Bill Gates"];


function randColors(colors) {
  return colors[parseInt(Math.random() * colors.length)];
}

function randQuotes(quotes) {
  return parseInt(Math.random() * quotes.length);
}

$(document).ready(function () {
  let x = randColors(colors);
  let y = randQuotes(quotes);
  let txt = quotes[y];
  let aut = authors[y];

  $('#tweet-quote').attr(
  'href',
  'https://twitter.com/intent/tweet?text=' +
  encodeURIComponent('"' + txt + '" ' + aut));


  $("#text").css("color", x);
  $("#author").css("color", x);
  $(".button").css("background-color", x);
  $("body").css("background-color", x);

  $("#text").text(txt);
  $("#author").text(aut);

  $("#new-quote").click(function () {
    x = randColors(colors);
    y = randQuotes(quotes);
    txt = quotes[y];
    aut = authors[y];

    $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent('"' + txt + '" ' + aut));


    $("#text").css("color", x);
    $("#author").css("color", x);
    $(".button").css("background-color", x);
    $("body").css("background-color", x);

    $("#text").text(txt);
    $("#author").text(aut);
  });



});