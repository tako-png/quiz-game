const questions=[
  {
    category:"Geography",
    question:"What is the capital of France?",
    choices:["Paris", "London", "Berlin"],
    answer: "Paris",
  },
  {
    category:"Math",
    question:"What is 7x8?",
    choices:["67","56","81"],
    answer:"56",
  },
    {
    category: "Biology",
    question: "What is the powerhouse of the cell?",
    choices: ["Nucleus", "Ribosome", "Mitochondria"],
    answer: "Mitochondria",
  }, 
   {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
    {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["Thomas Jefferson", "George Washington", "John Adams"],
    answer: "George Washington",
  },
];
function getRandomQuestion(questionArr){
  const randomIndex=Math.floor(Math.random()*questionArr.length);
  return questionArr[randomIndex];
}
function getRandomComputerChoice(choisesArr){
  const randomIndex=Math.floor(Math.random()*choisesArr.length);
  return choisesArr[randomIndex];
}
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}



const question = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(question.choices);
console.log(question.question);
console.log(getResults(question, computerChoice));
