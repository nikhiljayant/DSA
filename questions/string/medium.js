var beautySum = function (s = "") {
    const n = s.length;
    let beauty = 0;

    for (let i = 0; i < n; i++) {
        const freq = new Array(26).fill(0);

        for (let j = i; j < n; j++) {
            freq[s.charCodeAt(j) - 97]++;

            let maxFreq = 0;
            let minFreq = Infinity;

            for (const count of freq) {
                if (count === 0) continue;

                maxFreq = Math.max(maxFreq, count);
                minFreq = Math.min(minFreq, count);
            }

            beauty += maxFreq - minFreq;
        }
    }

    return beauty;
};