// Fazendo uma análise de complexidade do algoritmo de Dijkstra.

// Uma forma de pensar na diferença do tempo entre caminhos distintos:
export class firstPath {
    chooseCarefully () {
        return new Promise <void> ((resolve) => {
            setTimeout(() => {
                resolve();
            }, 3000);
        });
    };

    async showMessage () {
        try {
            await this.chooseCarefully();
            console.log("This is the first path!");
        } catch (err) {
            console.error(err);
        };
    };
}

export class secondPath extends firstPath {
    chooseCarefully () {
        return new Promise <void> ((resolve) => {
            setTimeout(() => {
                resolve();
            }, 5000);
        });
    };

    async showMessage(): Promise <void> {
        try {
            await this.chooseCarefully();
            const data = new Date();
            data.getDate();
            console.log(data);
        } catch (err) {
            console.error(err);
        };
    };
}

//const firstClass = new firstPath();
//const secondClass = new secondPath();
//secondClass.showMessage();
//firstClass.showMessage();

export default 1;