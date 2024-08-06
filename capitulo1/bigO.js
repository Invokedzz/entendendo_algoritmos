class BinaryPower {
    constructor (num) {
        this.num = num;
    }

    understandingThePower () {
        while (this.num > 1) {
            let feelthePower = Math.floor(this.num = this.num /2);
            console.log(feelthePower);
        }
    }

    showThePower () {
        return this.understandingThePower();
    }
}

/* const power = new BinaryPower(4000000000);
power.showThePower(); */

/*
EXERCÍCIOS
Forneça o tempo de execução para cada um dos casos a seguir em termos da
notação Big O.

*/

// Você tem um número de telefone e deseja encontrar o dono dele em uma agenda telefônica. (Dica: Deve procurar pela agenda inteira!)

class wholeAgenda {
    constructor (n) {
        this.n = n;
    }   

    findData () {
        while(this.n > 1) {
            let poss = Math.floor(this.n--);
            console.log(poss);
        }
    };
    
    showData () {
        return this.findData();
    };

}

/* const agendaValue = new wholeAgenda(1024);
agendaValue.showData(); */

// Tudo dependeria do número de telefones que existe na agenda. No caso, estamos considerando uma pesquisa simples. Logo, vamos ver 1024 termos até acharmos o que desejamos.

// Você quer ler os números apenas dos nomes que começam com A. (Isso é complicado!);

// 

class fetchA {
    async doingtheFetch () {
        const aValue = await fetch("https://www.behindthename.com/names/letter/a");
        const data = await aValue.json();
        return data;
    }

    returnInpromises () {
        this.doingtheFetch()
        .then((waiting) => console.log(waiting))
        .catch((err) => console.error(err));
    }

}

/*const analysis = new fetchA();
analysis.returnInpromises() */

