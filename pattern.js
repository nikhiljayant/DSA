// https://takeuforward.org/strivers-a2z-dsa-course/must-do-pattern-problems-before-starting-dsa/

function pattern14(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + j);
    }
    str += "\n";
  }
  console.log(str);
}

console.log("Pattern 14:");

pattern14(5);
