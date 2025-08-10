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

}

palindrome(12321);
