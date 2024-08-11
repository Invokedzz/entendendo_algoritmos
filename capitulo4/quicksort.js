class quickSort {
    creatinganArray_ () {
        let array = [1, 2, 3, 4, 5, 6];
        const filteredArray = array.map((myValues) => myValues / 2);
        const byTwo = filteredArray.filter((otherValues) => otherValues > 2);
        const addingEverything = byTwo.reduce((ac, val) => {
           let trueVal = ac += val;
           return trueVal;
        });
        return addingEverything;
    }
};

const thinkAbout = new quickSort ();
console.log(thinkAbout.creatinganArray_()); 

class quickSort2 {
    creatinganotherArray_ () {
        let array2 = [100, 200, 275, 300];
        let limit = 100;
        for (let y = 1; y < limit; y++) {
            const filteringArray = array2.map((someValues) => someValues / y);
            console.log(filteringArray);
        }
    }
}

/* const newQuicksort = new quickSort2();
newQuicksort.creatinganotherArray_(); */

class reducingtheProblem {
    theProblem () {
        let lim = 3;
        let areaProblem = [1680, 400];
        for (let i = 1; i <= lim; i++) {
            const filterThatproblem = areaProblem.map((area) => area / 4 - [i]);
            console.log(filterThatproblem);
        }
    }
}

const didyouseeThat = new reducingtheProblem();
didyouseeThat.theProblem();