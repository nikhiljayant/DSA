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
  // let maxNum = 1;
  // for (let i = 1; i <= Math.min(num1, num2); i++) {
  //   if (num1 % i === 0 && num2 % i === 0) {
  //     maxNum = i;
  //   }
  // }
  // console.log(maxNum);

  while (num1 > 0 && num2 > 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
    if (num1 === 0) {
      console.log(num2);
    } else if (num2 === 0) {
      console.log(num1);
    }
  }
}

gcd(9, 12);

function armstrong(num) {
  let sum = 0;
  let numCopy = num;
  while (numCopy > 0) {
    sum +=
      Math.floor(numCopy % 10) *
      Math.floor(numCopy % 10) *
      Math.floor(numCopy % 10);
    numCopy = Math.floor(numCopy / 10);
  }
  if (sum === num) {
    console.log("It's an Armstrong number");
  } else {
    console.log("It's not an Armstrong number");
  }
}

// armstrong(371);

function findDivisors(n) {
  let divisors = [];

  let sqrtN = Math.sqrt(n);

  for (let i = 1; i <= sqrtN; i++) {
    if (n % i === 0) {
      divisors.push(i);

      if (i !== n / i) {
        divisors.push(n / i);
      }
    }
  }
  divisors.sort((a, b) => a - b); // Sort the divisors in ascending order
  console.log(divisors);
}

// findDivisors(34);

function isPrime(num) {
  const sqrt = Math.sqrt(num);
  let count = 0;

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      count++;
      if (num / i != i) {
        count++;
      }
    }
  }
  if (count === 2) {
    console.log("It's a prime number");
  } else {
    console.log("It's not a prime number");
  }
}

// isPrime(11);
