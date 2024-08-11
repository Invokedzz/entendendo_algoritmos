export class firstRecursion {
    constructor (
    private num: number,
    ) {};
    
    private preparingtheTime () {
        return new Promise <void> ((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000);
        });
    }

    private letsdoIT () {
        while (this.num > 10) {
            this.num = this.num -= 1;
            if (this.num === 11) return;
            console.log(this.num);
        }
    }

    public async callEverybody () {
        try {
            await this.preparingtheTime();
            this.letsdoIT();
        } catch (err) {
            console.error(err);
            throw new Error('Something happened!');
        }
    }

}

//const callClass = new firstRecursion(20);
//callClass.callEverybody();

class badChoices_nah {
   private checkingifIdontbreaktheSystem (a: number) {
        while (a !== 20) {
            a += 2;
            if (a >= 18) return;
            this.callThisShit(a);
        } 
    }

    public callThisShit (a: number) {
        this.checkingifIdontbreaktheSystem(a);
        while (a !== 18) {
            a += 1;
            console.log(a);
            if (a === 100) return;
        }
    }

}

const brokeSystem = new badChoices_nah();
brokeSystem.callThisShit(20);

export default 1;