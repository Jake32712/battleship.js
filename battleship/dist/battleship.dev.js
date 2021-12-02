"use strict";

var location = 3;
var location = 4;
var location = 5;
var guess;
var hits = 0;
var guesses = 0;
var isunk = false;

while (isunk == false) {
  guess = prompt("Ready, aim, fire!  (enter a number from 0-6):");

  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("Hit");
      hits = hits = 1;

      if (hits == 3) {
        isunk = true;
        alert("You sank my battleship!");
      } else {
        alert("Miss");
      }
    }
  }
}

var stats = "You took" + guesses + "guesses to sink the battleship, " + "which means your shooting accuracy was " + 3 / guesses;
alert(stats);