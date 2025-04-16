let = testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest() {
  // Set tehe test text
  document.getElementById("inputText").value = testText;

  //Reset results and timer
  document.getElementById("output").innerHTML = "";
  startTime = new Date().getTime();

  //Change button test and functionality
  var button = document.getElementById("btn");
  button.innerHTML = "End Test";
  button.onclick = endTest;

          }
  function endTest() {
    endTime = new Date().getTime();

    //Disable user input
    document.getElementById("userInput").readOnly = true;

    //Calculate time elapsed and words per minute (wpm)
    var timeElapsed = (endTime - startTime) / 1000; //in seconds
    var userTypedTest = document.getElementById("userInput").value;

    //Split the text using regex to count words correctly
    var typedWords = userTypedTest.split (/\s+/).filter(function (word){
        return word !== "";
          }).length;

    var wpm = 0; //Default Value

    if (timeElapsed !== 0 && !isNaN(typedWords)){
      wpm = Math.round(typedWords / timeElapsed) * 60;
      }

      //Display the results
      var outputDiv = document.getElementById("output");
      outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" + 
      "<p>Words Typed: " + typedWords + "</p>" +
      "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
      "<p>Words per Minute: " + wpm + "</p>";

      //Reset the button
      var button = document.getElementById("btn");
      button.innerHTML = "Start Test";
      button.onclick = startTest;
      
  }
