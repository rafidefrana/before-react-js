/*
find index menemukan indeks pertama elemen dalam array yang memenuhi kondisi yang di berikan
*/

const DATA = [
    {id: 1, name: 'raff'},
    {id: 2, name: 'fii'},
    {id: 3, name: 'Ndepp'},
    {id: 4, name: 'ranaa'},
];


const index = DATA.findIndex((item) => item.name === 'Ndepp');
console.log('Index nya adalah = ', index);