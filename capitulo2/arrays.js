class creatingArray {
    receivingArray_ (array) {
        const limit = 3;
        for (let i = 1; i <= limit; i++) {
            array.push([i * Math.floor(Math.random() * Math.PI)]);
            console.log(array);
        }
        return array;
    }
}

class creatingArrayO {
    receivingArray_O () {
        const lim = 2;
        const array = ['SpiderMan'];
        for (let i = 0; i <= lim; i++) {
            array.push('IronMan');
            console.log(array);
        }
    }
}

class Restaurantorder {
    restaurantArray () {
        // Ordem que mandaram para o chefe:
       const arrayRestaurant = ['Pizza', 'Coffee', 'Steak', 'Fish'];
        for (let i = arrayRestaurant.length - 1; i >= 0; i--) {
            console.log(arrayRestaurant[i]);
            // Como o chefe recebe os pedidos!
        }
    }
}

const creatingOrder = new Restaurantorder();
creatingOrder.restaurantArray();

/* const newArray = new creatingArray();
newArray.receivingArray_([]);

const ArrayO = new creatingArrayO();
ArrayO.receivingArray_O(); */