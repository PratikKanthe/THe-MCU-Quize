//chalk library

import chalk from 'chalk';

import readlineSync, { question } from 'readline-sync';

var username = readlineSync.question("What's Your name? ");
var score = 0;

console.log(chalk.blue.bgYellow.bold('Welcome ' + username + " To The MCU Quize"));

if (readlineSync.keyInYN('Are You Ready?')) {
  console.log(chalk.green('Lets Go...'));
} else {
  console.log(chalk.red('You can Quit'));
}

//play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green('Your Right'));
    score = score + 1;
    console.log(chalk.white.bgGreen.bold('Current Score: ' + score));
  } else {
    console.log(chalk.red('Your Wrong'));
    score = score - 1;
    console.log(chalk.bgRed.bold('Current Score: ' + score));
  }
  console.log(chalk.magenta.bold('--------------------------------------------------'));
}

var questions = [
  {
    question: "Who is the first marvel superhero? ",
    answer: "Captain America"
  },
  {
    question: "Whats the name of iron man assistant in suit? ",
    answer: "Jarvis"
  },
  {
    question: "Thor comes from where? ",
    answer: "Asgard"
  },
  {
    question: "From which rediation doses hulk is formed? ",
    answer: "Gama"
  },
  {
    question: "Real name of actor who played iron man? ",
    answer: "Robert Downey Jr."
  }
];

for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer);
}


console.log(chalk.white.bgGreen.bold('Congrats! Your Final Score is: ' + score));

console.log(chalk.magenta.bold('--------------------------------------------------'));
console.log('');

var highScores = [
  {
    name: "Pratik",
    scored: 5
  },
  {
    name: "Priya",
    scored: 4
  }
];



for (var i = 0; i < highScores.length; i++) {
  var knowScore = highScores[i];
  console.log(chalk.white.bgGreen.bold("Highscores: "));
  console.log('');
  console.log(chalk.white.bgYellow.bold(knowScore.name, knowScore.scored));
}
