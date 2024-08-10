// Pense no exemplo da caixa:

class Box {
    checkingtheBox (a) {
        while (a < 10) {
            a += 1;
            console.log(a);
        }
    }
}

class anotherWhile {
    checkingifIdontbreaktheSystem (a) {
        while (a !== 20) {
            a += 2;
            if (a === 18) return;
            console.log(a);
        } // NÃO COLOQUE VALORES ÍMPARES!!!
    }
}

class I {
    showI (i) {
        while (i > 0) {
            if (i <= 1) return;
            i = i - 1;
            console.log(i);
        }
    }
}

//const callingClass = new I();
//callingClass.showI(10);

// Crie uma class que execute pop e push.

class testingArrays {
    pushOrpop(array) {
        const limit = 3;
        const arrayI = [];
        for (let x = 0; x < limit; x++) {
            arrayI.push(array[x]);
            console.log(arrayI);
            arrayI.pop(array[x]);
        }
    }   
}

//const callingArray = new testingArrays();
//callingArray.pushOrpop(['Wash my hands', 'Do the dinner', 'Clean the dishes']);

/*def fat(x):
if x == 1:
return 1
else:
return x * fat(x-1) */

class Fatorial {
    creatingFatorial (num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }
        console.log(factorial);
    }
}

const fatorialResult = new Fatorial();
fatorialResult.creatingFatorial(5);