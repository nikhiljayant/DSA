function hashing(arr, noToFind) {
  const hashArr = new Array(arr.length).fill(0);
  for (let i = 0; i < arr.length; i++) {
    hashArr[arr[i]] += 1;
  }

  console.log(hashArr[noToFind]);
}

// hashing([1, 1, 1, 2, 3, 4, 5, 0, 0], 0);

// CHARACTER HASHING 👇

// For Lowercase Characters
function lowercaseCharacterHashing(str = "") {
  const hashArr = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    hashArr[str.charCodeAt(i) - "a".charCodeAt(0)] += 1; // Using ASCII values ("a" is 97 in ASCII)
  }

  console.log(hashArr);
}

// lowercaseCharacterHashing("abdddd");

// For All Characters
function characterHashing(str = "") {
  const hashArr = new Array(256).fill(0);

  for (let i = 0; i < str.length; i++) {
    hashArr[str.charCodeAt(i)] += 1;
  }

  console.log(hashArr);
}

// characterHashing("abddddABCD1234!@#");

function hashingUsingMap(arr = []) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  return map;
}

// console.log(hashingUsingMap([1, 1, 1, 2, 3, 4, 5, 0, 0, 12]).get(1));

// hashingUsingMap([1, 1, 1, 2, 3, 4, 5, 0, 0, 12]);

function characterHashingUsingMap(str = "") {
  const map = new Map();
  for(let i =0; i<str.length; i++) {
    if(map.has(str[i])) {
      map.set(str[i], map.get(str[i]) + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  return map;
}

console.log(characterHashingUsingMap("abddddABCD1234!@#").get('d'));

// 44:39
