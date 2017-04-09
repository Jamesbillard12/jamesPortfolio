function testEvent(){

  var answersSixOptions = ['GUINNESS', 'NOEL', 'MINOU'];
  var myNumber = 7;
  var counterSeven = 0;
  var tallyScore = 0;
  var percentage = 0;
  var myYesNoQuestions = [
    ['Was I born in Newfoundland?', 'Y', 'Yes, I was born in Newfoundland!'],
    ['Did I go to university in Newfoundland?', 'N', 'You\'re right, I went to university in Nova Scotia!'],
    ['Do I speak French?', 'Y', 'Oui! Je parle bien le Français!'],
    ['Have I lived in the Yukon Territory?', 'Y', 'Right! I lived there for two years.'],
    ['Is my favorite movie FUBAR?', 'Y', 'Right! I love that movie "Just Giver"'],
  ];

  var userName;

  function questionOne() {

    userName = prompt('What\'s your name?');
    alert('Hello, ' + userName + '. Thanks for coming to my site!');
    window.userName = userName;
  }
  questionOne();

  function yesNoQuestions() {

    for (var i = 0; i < myYesNoQuestions.length; i++) {
      var userAnswer = prompt(myYesNoQuestions[i][0]);
      userAnswer = userAnswer.charAt(0);
      if (userAnswer.toUpperCase() == myYesNoQuestions[i][1]) {
        alert(myYesNoQuestions[i][2]);
        tallyScore++;
      }
      else {
        alert('Wrong! Next question!');
      }
    }
  };
  yesNoQuestions();


  function questionSix() {
    var userResponsePet = prompt('What is one of my pet\'s name?');
    userResponsePet = userResponsePet.toUpperCase();

    if(answersSixOptions.indexOf(userResponsePet) !== -1){
      alert('Awesome job!!');
      tallyScore++;
    } else {
      alert('You\'re wrong!');
    };

    console.log('Question five complete')
  }
  questionSix();
  //
  function questionSeven() {
    alert('Time for a two part answer question! You have to get both answers to be right! What two languages do I speak?');

    var userLanguageResponse1 = prompt('Enter answer one here.');
    userLanguageResponse1 = userLanguageResponse1.toUpperCase();

    var userlanguagResponse2 = prompt('Enter answer two here.');
    userlanguagResponse2 = userlanguagResponse2.toUpperCase();

    if (userLanguageResponse1 === 'FRENCH'){
      alert('Very well done, you got the first one right!');
    } else if (userLanguageResponse1 === 'ENGLISH') {
      alert('Very well done, you got the first one right!');
    } else{
      alert('Wrong! Let\'s check your other answer!');
    };

    if (userlanguagResponse2 === 'FRENCH'){
      alert('Very well done, you got the second one right!');
    } else if (userlanguagResponse2 === 'ENGLISH') {
      alert('Very well done, you got the second one right!');
    } else{
      alert('Wrong!');
    };

    if ((userLanguageResponse1 === 'FRENCH') && (userlanguagResponse2 === 'ENGLISH')) {
      alert('Awesome you got them both right!');
      tallyScore++;
    } else if ((userLanguageResponse1 === 'ENGLISH') && (userlanguagResponse2 === 'FRENCH')) {
      alert('Awesome you got them both right!');
      tallyScore++;
    } else {
      alert('On to the next question!');
    };

    console.log('Question six complete');
  }
  questionSeven();
  //
  function questionEight() {
    var userNumber = parseInt(prompt('I am thinking of a number between 1 and 10, what is it?? (You have 4 guesses)'));

    while (counterSeven < 4){
      counterSeven = counterSeven + 1;
      if(userNumber === myNumber){
        alert('Great job ' + userName +', you guessed my number!');
        tallyScore++;

        break;
      }
      if(counterSeven === 4){
        alert(userName + ', You used all your guesses, NO SOUP FOR YOU!')
      }
      else if(userNumber > myNumber){
        alert('That number is to high!');
        userNumber = parseInt(prompt('What number am I thinking of?'));
      }
      else if(userNumber < myNumber){
        alert('That number is too low!');
        userNumber = parseInt(prompt('What number am I thinking of?'));
      }
      else{
        alert('Please enter a number.');
        userNumber = parseInt(prompt('What number am I thinking of?'));
      }
    };
  }
  questionEight();

  function questionNine() {
    var numberOfTries = 0;

    for(var i = 0; i < 6; i++){
      var myPlacesAnswers = ['ENGLAND', 'FRANCE', 'CANADA'];
      var userPlacesAnswers = prompt('Last one! Can you guess another country I\'ve lived in?');
      userPlacesAnswers = userPlacesAnswers.toUpperCase();

      if(myPlacesAnswers.indexOf(userPlacesAnswers) !== -1){
        alert('Great job! your answer was correct!');
        alert('All possiable answers were: ' + myPlacesAnswers[0] + ', ' + myPlacesAnswers[1] + ', and ' + myPlacesAnswers[2] + '.');
        tallyScore++;

        break;
      }else{
        numberOfTries++;
        alert('Please Try again');
          if(numberOfTries === 6){
            alert('You ran out of tries, all possiable answers were: ' + myPlacesAnswers[0] + ', ' + myPlacesAnswers[1] + ', and ' + myPlacesAnswers[2] + '.');
          }
      }
    };
  }
  questionNine();
  //
  function totalScore() {
    var percentage = (tallyScore / 9 * 100);
    percentage = Math.round(percentage);

    if (tallyScore === 9) {
      alert('You got ' + tallyScore + ' out of 9 questions. That\'s a percentage of ' + percentage
      + '%. Amazing job, ' + userName +', you got them all right!');
    }else if (tallyScore < 5) {
      alert('You got ' + tallyScore + ' out of 9 questions. That\'s a percentage of ' + percentage
      + '%. Better luck next time, ' + userName +'!');
    }else if (tallyScore >= 5) {
      alert('You got ' + tallyScore + ' out of 9 questions. That\'s a percentage of ' + percentage
      + '%. Pretty good job, ' + userName +'!');
    }
  }
  totalScore();
};
