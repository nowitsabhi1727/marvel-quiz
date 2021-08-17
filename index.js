const readlineSync=require("readline-sync");
const chalk=require("chalk");

console.log(chalk.green("Welcome to Quiz"));

var userName=readlineSync.question("What's your Name? ");
console.log("Welcome "+chalk.green(userName)+ chalk.blueBright(" Are you a Marvel fan?"));
console.log("TYPE yes/no");
var options=readlineSync.question("");

if(options.toUpperCase()==="YES"){
    console.log("Oh! That's nice...let's play a quick quiz");
}else{
  console.log("It's ok! Let's give a try at quiz");
}
console.log("-------------------------------");
var score=0;
console.log(chalk.red("Choose Correct Option"));

var highScore=[
  {
    name:"Ashutosh",
    highScore:"5",
  },
];


function play(question,answer,questionOptions){
  console.log(question);
  for(let i=0;i<questionOptions.length;i++){
    console.log("   " + Number(i+1) +"." +questionOptions[i]);
  }
  var userAnswer=readlineSync.question("Answer= ");
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log(chalk.green("Bravo! you are right "));
    score++;
  }
  else{
    console.log(chalk.bgRed("Ohh Sorry! you entered wrong answer"));
    console.log(chalk.green("Correct Answer is " + answer));
  }
  console.log("Current score = " + score);
  console.log("-------------------------");
  console.log("");
}

let questions=[
  {
    question:"Q.1 What is the name of Thor’s hammer ?",
    answer:"2",
    questionOptions:[
      "Vanir",
    "Mjolnir",
    "Aesir",
    "Norn",

    ],
  },
  {
    question:"Q.2 What is Captain America’s shield made of??",
    answer:"2",
    questionOptions:[
    "Adamantium",
    "Vibranium",
    "Promethium",
    "Carbonadium",
    ],
  },
  {
    question:"Q.3 What is the real name of the Black Panther?",
    answer:"1",
    questionOptions:[
    "T’Challa",
    "M’Baku",
    "N’Jadaka",
    "N’Jobu",
    ],
  },
  {
    question:"Q.4 Who is killed by Loki in the Avengers?",
    answer:"3",
    questionOptions:[
    "Maria Hill",
    "Nick Fury",
    "Agent Coulson",
    "Doctor Erik Selvig",
    ],
  },
  {
    question:"Q.5 What Is Loki The God Of?",
    answer:"3",
    questionOptions:[
    "Deception",
    "Tricks",
    "Mischief",
    "Misdirection",
    ],
  },
]
for(let i=0;i<questions.length;i++){
  play(questions[i].question,questions[i].answer,questions[i].questionOptions);
}

if(score>=highScore[0].highScore){
  console.log("you know MCU Better then " +highScore[0].name);
  console.log("CONGRATS!you created high score");
  console.log("Send me screenshot to update your score as new high score.");
}
console.log(chalk.green("Thanks for playing!!"));