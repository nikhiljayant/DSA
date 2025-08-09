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

function pattern19(num) {
  let str = "";
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      str += "*";
    }
    for (let k = 0; k < 2 * i; k++) {
      str += " ";
    }
    for (let j = 0; j < num - i; j++) {
      str += "*";
    }
    if (i !== num - 1) {
      str += "\n";
    }
  }

  for (let i = num; i >= 0; i--) {
    for (let j = 0; j < num - i; j++) {
      str += "*";
    }
    for (let k = 0; k < 2 * i; k++) {
      str += " ";
    }
    for (let j = 0; j < num - i; j++) {
      str += "*";
    }
    if (i !== 0) {
      str += "\n";
    }
  }
  console.log(str);
}

function pattern20(num) {
  let str = "";
  for (let i = num; i >= 0; i--) {
    for (let j = 0; j < num - i; j++) {
      str += "*";
    }
    for (let k = 0; k < 2 * i; k++) {
      str += " ";
    }
    for (let j = 0; j < num - i; j++) {
      str += "*";
    }
      str += "\n";
  }

  for (let i = 1; i < num; i++) {
    for (let j = 0; j < num - i; j++) {
      str += "*";
    }
    for (let k = 0; k < 2 * i; k++) {
      str += " ";
    }
    for (let j = 0; j < num - i; j++) {
      str += "*";
    }
    if (i !== num - 1) {
      str += "\n";
    }
  }
  console.log(str);
}

function pattern21(num) {
  let str = "";
  for(let i = 0; i < num; i++) {
    for(let j = 0; j < num; j++) {
      if(i === 0 || i === num - 1 || j === 0 || j === num - 1) {
        str += "*";
      } else {
        str += " ";
      }
    }
    str += "\n";
  }
  console.log(str);
}

pattern21(5);
