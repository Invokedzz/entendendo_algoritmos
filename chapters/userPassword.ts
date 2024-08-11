export class UserPassword {
    constructor (
        private user: string,
        private password: string,
    ) {};

    private errorsForThewebsite () {
        console.error('Something bad happened!');
        throw new Error('Try our verification another time!');
    }

    private enterWebsite (): boolean {
        this.errorsForThewebsite();
        return false;
    }

    private createUser (): boolean {
        if (this.user.length < 3 || this.user.length > 8) {
            console.error('You must return a proper value: between 3 and 8.');
            return false;
        }

        this.validatePassword();
        return true;
    }

    private validatePassword(): boolean {
        if (this.password.length < 8 || this.password.length > 24) {
            console.error('You must return a proper password: between 8 and 24.');
            return false;
        }

        this.validateAll();
        return true;
    }

    public validateAll (): boolean {
        const userValidated = this.createUser();
        const passwordValidated = this.validatePassword();
        if (userValidated && passwordValidated) {
            this.continueWebsite();
            return true;
        }

        return this.enterWebsite();

    }

    continueWebsite () {

    }

}

const creatingWebsite = new UserPassword('', '');

export default 1;