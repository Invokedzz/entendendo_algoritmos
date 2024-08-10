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

const firstTSclassHere = new BinarySearch(100);
firstTSclassHere.searchingbetweenValues();
export default 1;
