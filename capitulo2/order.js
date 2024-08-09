class eachPlay {
    topBands_Month (array) {
        let limit = 5;
        let arrayBands = [];
        for (let i = 0; i < limit; i++) {
            arrayBands.push(array[i]);
            console.log(arrayBands);
        }
    }
}

const overView = new eachPlay();
overView.topBands_Month(['RadioHead', 'The Strokes', 'Black Keys', 'Neutral Milk Hotel', 'Wilco']);