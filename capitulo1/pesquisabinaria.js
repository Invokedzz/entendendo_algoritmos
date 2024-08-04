// Um algoritmo é um conjunto de instruções que realizam uma tarefa.
// A pesquisa binária é um algoritmo. Sua entrada é uma lista ordenada de elementos. Se o elemento que você está buscando está na lista, a pesquisa binária retorna sua localização - caso contrário, a pesquisa binária retorna none.

class biOperation {

    binarySearch (list, item) {
        let less = 0;
        let more = list.length - 1;
        while (less <= more) {  
            let mid = Math.floor((less + more) / 2);
            let guess = list[mid];
            if (guess < item) {
                less = mid + 1;
            }

            if (guess > item) {
                more = mid - 1;
            }

            if (guess === item) {
               return mid; 
            }
        };

        return null;
    }

}

/* const verifyOperation = new biOperation();
const list = [1, 3, 5, 7, 9];
console.log(verifyOperation.binarySearch(list, 3)); */

/* EXERCÍCIOS
1.1 Suponha que você tenha uma lista com 128 nomes e esteja fazendo uma
pesquisa binária. Qual seria o número máximo de etapas que você levaria
para encontrar o nome desejado?
1.2 Suponha que você duplique o tamanho da lista. Qual seria o número
máximo de etapas agora? */

class stepbystep {
    constructor (value, doubledValue) {
        this.value = value;
        this.doubledValue = doubledValue;       
    }

    stepsNumber () {
        while (this.value > 1) {
            this.value = this.value / 2;
            console.log(this.value);
        }

        return null;
    };

    stepsNumber2 () {
        while (this.doubledValue > 1) {
            this.doubledValue = this.doubledValue / 2;
            console.log(this.doubledValue);
        }

        return null;
    };

    showBothsteps () {
        this.stepsNumber();
        this.stepsNumber2();
    };

};

/* const overAll = new stepbystep(128, 256);
overAll.showBothsteps(); */

// Embora o valor tenha dobrado, o número de passos aumentou em 1.

