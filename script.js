// Animated typing and deleting algorith

var name = document.getElementById("name");
var title = document.getElementById("title");
var log = document.getElementById("log");
var initBtn = document.getElementById("init-btn");

// The algorithm types and deletes each word in the array
var arr = ["ENGINEER", "ARCHITECT", "DEVELOPER"];
var pos = 0;
var text = arr[pos];
var typedText = [];
var newText = "";
var a = [];
var reverse = false;
var interval;

//var count = 0;

function getText() {
  // Get word from array
  var word = arr[pos];
  // Transform word from string to array
  var newArr = word.split("");

  //count += 1;

  // Delete text if reverse is true
  if (reverse === true) {
    // Remove last letter from word
    typedText.splice(-1, 1);
    // Build new word
    for (var i = a.length; i > typedText.length; i--) {
      a.splice(-1, 1);
      newText = a.join("");

      // Once word is fully deleted switch to next word
      if (a.join("") === "") {
        typedText = [];
        reverse = false;

        //close after one cycle through word list
        if (pos === arr.length - 1) {
          n = "start";
          initBtn.innerHTML = "Start";
          clearInterval(interval);
        }

        // Move to next word or return to first word if at last word
        if (pos < arr.length - 1) {
          pos += 1;
        } else {
          pos = 0;
        }
      }
    }

  // Type word if reverse is false
  } else if (!reverse) {
    a = [];
    // Add next letter in word
    typedText.push(newArr[typedText.length]);

    // Create new word
    for (var j = 0; j < typedText.length; j++) {
      a.push(newArr[j]);
      newText = a.join("");

      // If new word equals complete word make reverse true to begin delete animation
      if (a.join("") === word) {
        reverse = true;
      }
    }
  }
}

var n = "start";

function init(type) {
  if (type === "stop") {
    n = "start";
    initBtn.innerHTML = "Start";
    clearInterval(interval);
  }

  if (type === "start") {
    n = "stop";
    initBtn.innerHTML = "Stop";
    interval = setInterval((interval) => {
      getText();
      log.innerHTML = newText;
    }, 175);
  }
}