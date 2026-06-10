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