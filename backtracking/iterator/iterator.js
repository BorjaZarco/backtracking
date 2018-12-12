module.exports = class {
    
    // Constructor of the class Iterator
    constructor(n, set, maxValue) {
        this.init(n, set, maxValue)
    }
    
    // Initializates the iterator with a given values m and n
    init (n, set, maxValue) {
        this.set = set
        this.limitValue = maxValue;
        this.combinationSize = n;
        this.setSize = set.length;
        this.currentCombination = [...Array(n).keys()];
        // Inits the current combination to the previous of the first one to prepare the first case
        this.currentCombination[n-1]--;
    }

    // Calculates the next combination. Returns true if there is one and 
    // false if there are no more combinations to calculate
    hasNext () {
        let last = this.combinationSize-1
        if (this.currentCombination[last] < this.setSize - this.combinationSize + last) {
            this.currentCombination[last]++;
        } else {
            let j = last;
            while (this.currentCombination[j] === this.setSize - this.combinationSize + j ||
                 ! isValidCombination(this.set, this.currentCombination, j, this.limitValue)) {
                if (j <= 0) {
                    return false;
                }
                j--;
            }
            this.currentCombination[j]++;                
            for (let k = j+1; k < this.combinationSize; k++) {
                this.currentCombination[k] = this.currentCombination[k - 1] + 1;
            }
        }
        return true
    }

    // Returns the current calculated combination
    next () {
        return this.currentCombination;
    }

    getTotalNumberOfCombinations () {
        let num = this.setSize;
        let denom = this.combinationSize;
        for(let i = this.setSize-1; i>this.setSize-this.combinationSize; i--) {
            num *= i;
        }
        for(let j = this.combinationSize-1; j>0; j--) {
            denom *= j 
        }
        return num/denom
    }
}

function isValidCombination (set, combination, to, limitValue) {
    const comb = combination.slice(0, to+1);
    const hand = comb.map(item => set[item]);   
    return hand.reduce(((value, handCard) => (value + handCard)), 0) <= limitValue;
}