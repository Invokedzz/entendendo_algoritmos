// A pesquisa binária é totalmente determinada em escalas logarítimicas. Enquanto a pesquisa linear pega de um em um, a pesquisa binária faz as coisas de outra forma!

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

// Na pesquisa binária: 100 itens => 7 palpites. Já 4.000.000.000 => 32 palpites; como vimos no exemplo acima. Logo, a pesquisa binária se mostra extremamente eficaz: por utilizar de um tempo de execução logarítmico.

// A notação Big O permite que você compare o número de operações. Ela informa o quão rapidamente um algoritmo cresce. No exemplo do Bob, vimos que a pesquisa simples cresceu de forma astrondosa; enquanto na pesquisa binária o tempo gasto foi muito, mas muito abaixo. 