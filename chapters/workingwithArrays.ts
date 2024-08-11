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

export default 1;