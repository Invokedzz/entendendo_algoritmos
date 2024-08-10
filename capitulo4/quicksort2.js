class jumperFagg {
    doinganotherArray_ () {
        let array = [1, 3, ];
        const additionofArrays = array + [ ,5, 6];
        console.log(additionofArrays);
        // Soma de arrays.
    }
}

//const weDoneit = new jumperFagg();
//weDoneit.doinganotherArray_();

class schoolSucks {
    anotherFunction () {
        let anotherArray = [];
        let lim = 5; 
        for (let x = 1; x < lim; x++) {
        anotherArray.push([x]);
        let filterThatdummy = anotherArray.filter((values) => values > 2);
        console.log(filterThatdummy);
        }
    }  
}       // Inserção do pivô.

//const thatsTrue = new schoolSucks();
//thatsTrue.anotherFunction();

/* Criar uma tabela de multiplicação com todos os elementos do array.
Assim, caso o seu array seja [2, 3, 7, 8, 10], você primeiro multiplicará
cada elemento por 2. Depois, multiplicará cada elemento por 3 e então
por 7, e assim por diante. */

class multiplication {
    multiplyThatArray_ () {
        let arrayM = [2, 3, 7, 8, 10];
        let limit = 10;
        for (let y = 0; y <= limit; y++) {
            let xis = 10;
            xis = xis--;
            const letsdoIt = arrayM.map((value) => value * y);
            const dontDoit = letsdoIt.map((anotherValue) => anotherValue / xis);
            console.log(letsdoIt);
            console.log(dontDoit);
        }
    }
}

const idontKnow = new multiplication();
idontKnow.multiplyThatArray_();