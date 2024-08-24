export class creatingArray {
   public doingArray (): void {
        let limit = 10;
        let someArray: number [] = [];
        for (let y = 0; y < limit; y++) {
            someArray.push(y);
            console.log(someArray);
        }
    }

    public otherThings (): void {
       let recipeList = ['Hamburguer', 'Sardine', 'Cigar'];
       for (let i = recipeList.length - 1; i >= 0; i--) {
            console.log(recipeList[i]);
       }
    }

    public addingThings (arr: string []): void {
        let anotherArray = ['RadioHead', 'The Strokes'];
        let lim = 2;
        for (let x = 0; x < lim; x++) {
            arr.push(anotherArray[x]);
            console.log(arr);
        }
    }

}

const showIT = new creatingArray();
showIT.doingArray();
showIT.otherThings();
showIT.addingThings([]);

class workingwithOperators {
    constructor (
        private nums: number [],
    ) {};

    doingtheCalc (): void {
        let limit = 10;
        this.nums = [1, 3, 7, 9, 11, 13];
        const filtering = this.nums.filter((arrayList) => arrayList > 2);
        for (let thinkAbout = 0; thinkAbout <= limit; thinkAbout++) {
            let multiplication = filtering.map((filteredArray) => filteredArray * thinkAbout);
            console.log(multiplication);
        }
    }

}

const creatingmoreArrays = new workingwithOperators([]);
creatingmoreArrays.doingtheCalc();

export default 1;