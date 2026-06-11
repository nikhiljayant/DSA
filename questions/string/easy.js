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
