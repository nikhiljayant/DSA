var largestOddNumber = function (num) {
    for (let i = num.length - 1; i >= 0; i--) {
        if (num[i] % 2 !== 0) {
            return num.slice(0, i + 1);
        }
    }

    return "";
};

var longestCommonPrefix = function (strs) {
    let commonEl = strs[0];

    for (let i = 1; i < strs.length; i++) {
        let j = 0;

        while (
            j < commonEl.length &&
            j < strs[i].length &&
            commonEl[j] === strs[i][j]
        ) {
            j++;
        }

        commonEl = commonEl.slice(0, j);

        if (commonEl === "") {
            return "";
        }
    }

    return commonEl;
};

var isIsomorphic = function (s, t) {
    const sMap = new Map();
    const tMap = new Map();

    for (let i = 0; i < s.length; i++) {
        if ((sMap.has(s[i]) && (sMap.get(s[i]) !== t[i])) || (tMap.has(t[i]) && (tMap.get(t[i]) !== s[i]))) {
            return false;
        }

        sMap.set(s[i], t[i]);
        tMap.set(t[i], s[i]);
    }

    return true;
};

var rotateString = function (s, goal) {
    return s.length === goal.length && (s + s).includes(goal);
};

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    const count = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }

    for (const num of count) {
        if (num !== 0) return false;
    }

    return true;
};

var frequencySort = function (s) {
    const frequency = {};

    let result = "";

    for (let i = 0; i < s.length; i++) {
        frequency[s[i]] = (frequency[s[i]] || 0) + 1;
    }

    const sorted = Object.entries(frequency).sort((a, b) => b[1] - a[1]);

    for (let j = 0; j < sorted.length; j++) {
        for (let k = 0; k < sorted[j][1]; k++) {
            result += sorted[j][0];
        }
    }

    return result;
};

var removeOuterParentheses = function (s) {
    let depth = 0;

    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            if (depth > 0) {
                result += s[i];
            }
            depth++;
        } else {
            depth--;
            if (depth > 0) {
                result += s[i];
            }
        }
    }

    return result;
};

var reverseWords = function (s) {

    let result = "";

    let finalStr = "";

    for (let i = 0; i < s.length; i++) {

        if (s[i] !== " ") result += s[i];

        if (s[i] === " " && i > 0 && s[i - 1] !== " ") {

            finalStr = finalStr === "" ? result : result + " " + finalStr;

            result = "";

        }

    }

    if (result.length > 0) {

        finalStr = finalStr === "" ? result : result + " " + finalStr;

    }

    return finalStr;

};

var maxDepth = function (s) {
    let depth = 0;
    let maxDepth = 0;

    for (const char of s) {
        if (char === "(") {
            depth++;
            maxDepth = Math.max(maxDepth, depth);
        } else if (char === ")") {
            depth--;
        }
    }

    return maxDepth;
};

var romanToInt = function (s = "") {
    const roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = roman[s[i]];
        const next = roman[s[i + 1]];

        if (curr < next) {
            result -= curr;
        } else {
            result += curr;
        }
    }

    return result;
};

// Pattern 2 ("({[]})")
var isValid = function (s = "") {
    const stack = [];

    const pairs = {
        ")": "(",
        "}": "{",
        "]": "[",
    };

    for (const ch of s) {
        if (ch === "(" || ch === "{" || ch === "[") {
            stack.push(ch);
        } else {
            if (stack.pop() !== pairs[ch]) {
                return false;
            }
        }
    }

    return stack.length === 0;
};
