function countDigits(num) {
  let numCopy = num;
  let count = 0;
  while (numCopy > 0) {
    count++;
    numCopy = Math.floor(numCopy / 10);
  }
  console.log(count);
}

// countDigits(13789878437);

function reverseNumber(num) {
  let reversed = "";
  let numCopy = num;
  while (numCopy > 0) {
    reversed += Math.floor(numCopy % 10); // Left over after division (reminder)
    numCopy = Math.floor(numCopy / 10); // Quotient after division
  }
  console.log(reversed);
}

// reverseNumber(7789);

function palindrome(num) {
  const numArr = num.toString().split("");
  let start = 0;
  let end = numArr.length - 1;

  for (let i = 0; i <= Math.floor(numArr.length / 2); i++) {
    if (numArr[start] === numArr[end]) {
      start++;
      end--;
    } else {
      console.log("It's not a palindrome");
      return;
    }
  }
  console.log("It's a palindrome");
}

// palindrome(12321);

// Greatest Common Divisor (GCD) using brute force method
function gcd(num1, num2) {
  let maxNum = 1;
  for (let i = 1; i <= Math.min(num1, num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      maxNum = i;
    }
  }
  console.log(maxNum);
}

// gcd(9, 12);

function armstrong(num) {
  let sum = 0;
  let numCopy = num;
  while(numCopy > 0) {
    sum += (Math.floor(numCopy % 10) * Math.floor(numCopy % 10) * Math.floor(numCopy % 10));
    numCopy = Math.floor(numCopy / 10);
  }
  if(sum === num) {
    console.log("It's an Armstrong number");
  } else {
    console.log("It's not an Armstrong number");
  }
}

armstrong(371);
