const level1 = ["A", "B", "C", "D", "E"];
const level2 = ["F", "G", "H", "I", "J"];
const level3 = ["K", "L", "M", "N", "O"];
const level4 = ["P", "Q", "R", "S", "T"];
const level5 = ["U", "V", "W", "X", "Y","Z"];

 const randomizeOptions = (level, answer) => {
  let options=[];
  let uniqueOptions = [];
  for (let i=0; i<4; i++) {
    let index = Math.floor(Math.random() * level.length);
    options.push(level[index]);
  }
  if (!options.includes(answer)) {
    options[Math.floor(Math.random() * level.length)] = answer;
  }
  do {
    uniqueOptions =[... new Set (options)];
    options.push(level[Math.floor(Math.random() * level.length)]);
  } while (uniqueOptions.length < 4);
  return uniqueOptions;
}

// jacksons random thought....
let exercise1 = {};
let exercise1Options = randomizeOptions(level1, "A")
exercise1Options.forEach(option => {
  // option is a string/character

})
console.log("test",exercise1Options)


exports.seed = function (knex) {
  
  return knex("exercises").then(function () {
    return knex("exercises").insert([
      {
        id: 1,
        flashcard_id: 1,
        question: "https://i.postimg.cc/8CfWd09K/A-big.png",
        answer: "A",
        options:  // returns string of 5 options, seperated by comma
        option1: 
        option2: 
        option3: 
        option4: 
      },
      {
        id: 2,
        flashcard_id: 
        question:
        answer:
        option1:
        option2:
        option3:
        option4:      
      },
      {
        id: 3,
        flashcard_id: 
        question:
        answer:
        option1:
        option2:
        option3:
        option4:      
      },
      {
        id: 4,
        flashcard_id: 
        question:
        answer:
        option1:
        option2:
        option3:
        option4:      
      },
      {
        id: 5,
        flashcard_id: 
        question:
        answer:
        option1:
        option2:
        option3:
        option4:      
      },
    ]);
  });
};
