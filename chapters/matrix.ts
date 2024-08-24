const heroMatrix: string [][] = [
    ['Sword', 'Shield', 'Backpack'],
    ['White Horse', 'Black Horse'],
    ['Bow', 'Mortar', 'Scythe'],
];

heroMatrix[0][0] = 'Dark Sword';
heroMatrix[0][1] = 'Giant Shield';
heroMatrix[1][0] = 'Fire Horse';
heroMatrix[2][2] = 'Enormous GreatSword';

for (const row of heroMatrix) {
    console.log(row);
};


export default 1;