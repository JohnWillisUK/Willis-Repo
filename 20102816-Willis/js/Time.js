// OPEN THE CONSOLE BELOW TO SEE THE JAVASCRIPT RUNNING

// find out what time it is

var currenttime = new Date();
var currenthour = currenttime.getHours();

console.log(currenthour);

// do a conditional

var emailmessage = "I'd <strong>Love</strong> you to get in touch!";

if (currenthour < 9 || currenthour > 23) {
  emailmessage = "You can expect a reply once I've had my morning coffee!";
}

var getheading = document.querySelector(".contact-me h2");
console.log(getheading);
getheading.insertAdjacentHTML(
  "afterend",
  '<p class="js-message">' + emailmessage + "</p>"
);

// find the <span id="switch">

var findLocation = document.getElementById("switch");

// create a button in code

var button = document.createElement("button");
button.setAttribute("class", "js-make-something-happen"); // add a class we can use to style the button in CSS
button.setAttribute("id", "make-something-happen"); // add an ID to listen out for clicks on the button
button.textContent = "Click here for maps!"; // add the text for the button

// add this created button to our HTML at the place we've saved in the 'findLocation' variable

findLocation.append(button); // add the button to the HTML

// point JavaScript at the button

var listenForInteraction = document.getElementById("make-something-happen");

// This changePage function runs whenever the button is clicked on

function changePage() {
  // 'toggle' toggles class
  document.documentElement.classList.toggle("js-modify-page");
}

// create a click event

listenForInteraction.addEventListener("click", changePage);

/* Gide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById ("page-nav").style.top = "0";
  } else {
    document.getElementById ("page-nav").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}