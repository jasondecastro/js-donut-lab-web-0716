//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
var guests;
var donuts;
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.

var donut_count = prompt("Donuts? ")
var guest_count = prompt("Guests? ")

//use parseInt to convert the users answer from a string to an integer.

var guests = parseInt(guest_count)
var donuts = parseInt(donut_count)

//write a conditional to check if there are enough donuts

if (guests < donuts) {
  alert("There are more donuts than there are guests! Good.")
  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
}
