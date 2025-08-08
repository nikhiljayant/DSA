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

function pattern15(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      str += String.fromCharCode(65 + j);
    }
    str += "\n";
  }
  console.log(str);
}

function pattern16(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + i);
    }
    str += "\n";
  }
  console.log(str);
}

function pattern17(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    const breakPoint = Math.ceil((2 * i + 1) / 2);

    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }

    let charCount = 65;
    for (let j = 1; j <= 2 * i + 1; j++) {
      if (j <= breakPoint) {
        str += String.fromCharCode(65 + j);
        charCount++;
      } else {
        charCount--;
        str += String.fromCharCode(charCount);
      }
    }

    for (let j = 0; j < num - i - 1; j++) {
      str += " ";
    }
    str += "\n";
  }
  console.log(str);
}

function pattern18(num) {
  let str = "";
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= i; j++) {
      str += String.fromCharCode(65 + (num + j - i));
    }
    str += "\n";
  }
  console.log(str);
}

pattern18(5);
