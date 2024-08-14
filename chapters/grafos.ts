export class thinkingaboutGrafo {
    constructor (
        private firstFriendlist: string [],
        private secondFriendlist: string [],
    ) {};

    testingourGraphs (friends: string [], otherContacts: string []): void {
        let limitList = 10;
        this.firstFriendlist = [];
        this.secondFriendlist = [];
        for (let listLength = 0; listLength <= limitList; listLength++) {
            if (listLength < 5) {
                this.firstFriendlist.push(friends[listLength]);
                console.log(this.firstFriendlist);
            };
        }
    };
}

export class anotherList {
   constructor (
    private valueofFriends: string [],
   ) {};

   private friendList (contactFriends: string []): void {
        let lim = 1;
        for (let hmj = 0; hmj <= lim; hmj++) {
            this.valueofFriends.push(contactFriends[hmj]);
            console.log(this.valueofFriends[hmj]);
        }

        for (let cleaningArray = 1; cleaningArray >= 0; cleaningArray--) {
            this.valueofFriends.pop();
            console.log(this.valueofFriends);
        }

   };

   public displayList () {
        return this.friendList(['Peter', 'John']);
   };

}

//const creatinganewList = new anotherList([]);
//creatinganewList.displayList();

export class morningRoutine {
    private myroutine: Routine [] = [];
    constructor (
        private toDo: string [],
    ) {};

    public dailyBasis (...routine: Routine []): void {
        this.toDo = [];
        for (const task of routine) {
            this.myroutine.pop();
            console.log(this.myroutine);
        }
    }
}

export class Routine {
    constructor (
        public _elementfromRoutine: string [],
    ) {};

    get routineElement (): string [] {
        return this._elementfromRoutine;
    };
}

//const analysis1 = new Routine(['No Surprises', 'Fake Plastic Trees']);
//const analysis2 = new morningRoutine([]);
//analysis2.dailyBasis(analysis1);

/* Ele mostra que não posso tomar café da manhã antes de escovar meus
dentes. Então “tomar café da manhã” depende de “escovar os dentes”.
Por outro lado, tomar banho não depende de escovar os dentes, */

export class gsp {
    constructor (
        private arrayRoutine: string [],
    ) {};

    public awd (activities: string []) {
        let limit = 1;
        this.arrayRoutine = [];
        for (let dailyRoutine = 0; dailyRoutine <= limit; dailyRoutine++) {
                if (!activities[0]) return activities[2];
                return activities[1]; // Escrevi isso num loop PORQUE SIM.
        };
    };
}

const gettingStarted = new gsp([]);
gettingStarted.awd(['Brush my teeth', 'Breakfast', 'Take a shower']);

export default 1;