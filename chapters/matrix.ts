/* const heroMatrix: string [][] = [
    ['Sword', 'Shield', 'Backpack'],
    ['White Horse', 'Black Horse'],
    ['Bow', 'Mortar', 'Scythe'],
];

heroMatrix[0][0] = 'Dark Sword';
heroMatrix[0][1] = 'Giant Shield';
heroMatrix[1][0] = 'Fire Horse';
heroMatrix[2][2] = 'Enormous GreatSword';

for (const row of heroMatrix) {
    console.log(row);
}; */

/* const newMatrix: number[][] = [
    [91, 2],
    [7, 45],
];

const newMatrix2: string[][] = [
    ['Human', 'Animal', 'Food'],
]; */

//console.log(newMatrix, newMatrix2);

export class receiveMatrix {
    constructor (
        private matrix: number[][],
     //   private target: number,
    ) {};

    startMatrix_analysis (target: number): number | boolean {
        let rows = this.matrix.length;
        let columns = this.matrix[0].length;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (this.matrix[i][j] === target) {
                    console.log(`You chose ${target}?`);
                    return target;
                }
            };
        };

        return false;

    };

}

const target = 5;
const startClass = new receiveMatrix(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ],
);

startClass.startMatrix_analysis(target);

export class matrixString {
    constructor (
        private matrixString: string [][],
    ) {};

    creatinglineofStrings (trg: string): boolean | string {
        let row = this.matrixString.length;
        let columnsString = this.matrixString[0].length;
        for (let i = 0; i < row; i++) {
            for (let j = 0; j < columnsString; j++) {
                if (this.matrixString[i][j] === trg) {
                    console.log(`You chose ${trg}`);
                    return trg;
                };
            };
        };

        return false;

    };

}

const createMatrixString = new matrixString(
    [
        ['Pablo Honey', 'Thom Yorke'],
        ['Kurt Cobain', 'Amy Lee'],
    ],
);

createMatrixString.creatinglineofStrings('Pablo Honey');

const numberMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12],
];

console.log(numberMatrix);
console.log(numberMatrix[0]);
console.log(numberMatrix.length);
console.log(numberMatrix[0].length);

//console.log(numberMatrix[1].length);

export default 1;