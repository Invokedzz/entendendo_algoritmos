class bigN {
    constructor (
        private num: number [],
    ) {};

    creatingArray (elementsArray: number []): void {
        let limit = 4;
        this.num = [];

        for (let i = 0; i <= limit; i++) {
            this.num.push(elementsArray[i]);
            console.log(this.num);
        };   
    };
}

//const array = new bigN([]);
//array.creatingArray([1, 2, 3, 4, 5]);

// Nesse caso, é considerado bigO de bigO(n). Sendo n o número de termos que entram em nosso algoritmo.

class bigl {
    constructor (
        private value: string [],
    ) {};

    letsSee (randomElement: string []): void {
        this.value.push(randomElement[0][2]);
        console.log(this.value);       
    };
}

const newClass = new bigl ([]);
newClass.letsSee(['Vasco', 'da', 'Gama']);

// Nesse caso, temos bigO(1), pois é constante. É o melhor caso.

class matrix {
    findElement (matrix: number [][], target: number): number | boolean {
        let rows = matrix.length;
        let columns = matrix[0].length;
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (matrix[i][j] === target) {
                    return target;
                };
            };
        };
        return false;
    }
}

const mat = new matrix();
const target = 9;
const result = mat.findElement([
    [1, 2, 3], [4, 5, 6], [7, 8, 9]], target
);
console.log(`O resultado esperado da matriz foi ${result}`);