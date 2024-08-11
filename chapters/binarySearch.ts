class BinarySearch {
    constructor (
    public val: number,
    ) {};

    public searchingbetweenValues (): void {
        while (this.val >= 0) {
            this.val = this.val / 2;
            if (this.val <= 0) return;
            console.log(this.val);
        }
    }

}

//const firstTSclassHere = new BinarySearch(100);
//firstTSclassHere.searchingbetweenValues();

export class Thinkabout {
    constructor (
        public num: number,
    ) {};

    theResult (): void {
        while (this.num > 1) {
            this.num = this.num -= 1;
            console.log(this.num);
        }
    }

}

const creatinganotherClass = new Thinkabout(1024);
creatinganotherClass.theResult();

export default 1;
