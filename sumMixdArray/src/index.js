function sumMix(x){
    if (typeof x === 'string' || typeof x === 'number') {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < x.length; i++) {
            sum += typeof x[i] === "string" ? parseInt(x[i]) : x[i];
        }
        return sum;
    }
}

module.exports = sumMix;