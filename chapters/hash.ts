// Primeiro de tudo, gostaria de uma amiga como a "Maggie" vulgo hash :(
// Vamos pensar nesse mapeamento de arrays.

export class mappingsomeArrays {
    constructor (
        private num: string [],
    ) {};

    public letsdoTheMapping (radioheadArray: string []): void {
        let limit = 5;
        this.num = [];
        for (let mappingRadiohead = 0; mappingRadiohead <= limit; mappingRadiohead++) {
            this.num.push(radioheadArray[mappingRadiohead]);
            console.log(this.num, mappingRadiohead);      
        }
    };
}

//const creatingArray = new mappingsomeArrays(['']);
//creatingArray.letsdoTheMapping(['Creep', 'No Surprises', 'Jigsaw falling into place', 'Anyone can play the guitar', 'Karma Police', '2 + 2 = 5']);

export class creatinghashTables {
    ourfirstHashTable (): void {
        const balling = new Map();
        balling.set('Vasco da Gama', '100');
        balling.set('Atlético Mineiro', '200');
        for (let [name, value] of balling) {
            console.log(`${name}, ${value}`); // Seria mais ou menos isso...
        }
    }
}

//const createHash = new creatinghashTables();
//createHash.ourfirstHashTable();

export class mobile {
    constructor (
       private firstContact: string [],
     //  private secondContact: string [],
    ) {};

    public creatinganApp (listofContacts: string []): void {
        const callThem = new Map();
        let limitofContacts = 3;
        this.firstContact = [];
        for (let numberC = 0; numberC <= limitofContacts; numberC++) {
            this.firstContact.push(listofContacts[numberC]);
            let setting = callThem.set(this.firstContact, numberC);
            let definingContacts = callThem.get(this.firstContact);
            console.log(setting, definingContacts);
        }
    }

}

//const hmmAnalysis = new mobile([]);
//hmmAnalysis.creatinganApp(['Peter', 'Paul', 'Pjack', 'Pjack']);


export class creatingaVoteHash {
    constructor (
        private firstContact: string [],
    ) {};

    startingtheApplication (listofContacts: string []): void {
        const callMap = new Map <string, number> ();
        let limitingContacts = 4;
        for (let num = 0; num <= limitingContacts; num++) {
            if (num >= limitingContacts) break;
            this.firstContact.push(listofContacts[num]);
            const votewithWisdom = this.firstContact[num];
            if (callMap.has(votewithWisdom)) {
                console.log("Go away weirdo!");
                return;
            }
            callMap.set(votewithWisdom, num);
            console.log(`${votewithWisdom}, ${num}`);
        }
    }

}

//const letsStart = new creatingaVoteHash([]);
//letsStart.startingtheApplication(['Peter', 'Paul', 'Parker', 'Peter'])



// Cara tentei criar a class acima pra tentar simular isso. No final, existe uma funcionalidade só pra isso :( kkkkkkkkkkkkkkkk.




export default 1;