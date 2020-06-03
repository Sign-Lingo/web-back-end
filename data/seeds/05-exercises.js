const level1 = ["A", "B", "C", "D", "E"];
const level2 = ["F", "G", "H", "I", "J"];
const level3 = ["K", "L", "M", "N", "O"];
const level4 = ["P", "Q", "R", "S", "T"];
const level5 = ["U", "V", "W", "X", "Y","Z"];

// returns an string of randomized options seperated by comma that includes the 
// necessary answer as one of the options
 const randomizeOptions = (level, answer) => {
  let options=[];
  let uniqueOptions = [];
  for (let i=0; i<4; i++) {
    let index = Math.floor(Math.random() * level.length);
    console.log("level.index", level.index);
    console.log("index", index);
    options.push(level[index]);
  }
  console.log("first version of options array", options);
  if (!options.includes(answer)) {
    options[Math.floor(Math.random() * level.length)] = answer
  }
  do {
    uniqueOptions =[... new Set (options)];
    options.push(level[Math.floor(Math.random() * level.length)]);
  } while (uniqueOptions.length < 4);
  return uniqueOptions;
}
console.log(randomizeOptions(["A", "B", "C", "D", "E"], "A"));
//     let tempLevel = level;
//     if (option1 === null) {
//         option1 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
//         tempLevel.splice(tempLevel.indexOf(option1), 1)
//     }
//     if (option2 === null) {
//         option2 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
//         tempLevel.splice(tempLevel.indexOf(option2), 1)
//     }
//     if (option3 === null) {
//         option3 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
//         tempLevel.splice(tempLevel.indexOf(option3), 1)
//     }
//     if (option4 === null) {
//         option4 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
//         tempLevel.splice(tempLevel.indexOf(option4), 1)
//     }
//     if (option5 === null) {
//         option5 = tempLevel[tempLevel.indexOf(Math.floor(Math.random() * 5))]
//         tempLevel.splice(tempLevel.indexOf(option5), 1)
//     }
//     if (option1 !== answer || option2 !== answer || option3 !== answer || option4 !== answer || option4 !== answer) {
//         option2 = answer;
//     }
//     return `${option1}, ${option2}, ${option3}, ${option4}, ${option5}`;
// }
// let opt = randomizeOptions(level1, "A", null, null, null, null);
// console.log(opt)

exports.seed = function (knex) {
  
  return knex("exercises").then(function () {
    return knex("exercises").insert([
      {
        id: 1,
        flashcard_id: 1,
        question: "https://i.postimg.cc/8CfWd09K/A-big.png",
        answer: "A",
        // // options: opt, // returns string of 5 options, seperated by comma
        // option1: opt[0],
        // option2: opt[2],
        // option3: opt[4],
        // option4: opt[6],
        // ensure the answer is listed for all of these
        // option1: randomizeOption(level1, answer, null, null, null, null),
        // remove option 1 from level 1 array?
        // use not equals to check if option 2 == option 1, if so, don't 
        // do it and repeat the randomizer
        // level.filter(letter => letter != answer || option1)
        // ensure option1 is not repeated
        // option2: level1[level1.indexOf(Math.floor(Math.random() * 5))],
        // ensure option 1 and 2 are not repeated
        // option3: level1[level1.indexOf(Math.floor(Math.random() * 5))],
        // ensure option 1 and 2 and 3 are not repeated
        // option4: level1[level1.indexOf("A")],
      },
    //   {
    //     id: 2,
    //     flashcard_id: 
    //     question:
    //     answer:
    //     option1:
    //     option2:
    //     option3:
    //     option4:      },
    //   {
    //     id: 3,
    //     flashcard_id: 
    //     question:
    //     answer:
    //     option1:
    //     option2:
    //     option3:
    //     option4:      },
    //   {
    //     id: 4,
    //     flashcard_id: 
    //     question:
    //     answer:
    //     option1:
    //     option2:
    //     option3:
    //     option4:      },
    //   {
    //     id: 5,
    //     flashcard_id: 
    //     question:
    //     answer:
    //     option1:
    //     option2:
    //     option3:
    //     option4:      },
    ]);
  });
};
