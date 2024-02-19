// array map
const DATA = [
    {id: 1, name: 'raff'},
    {id: 2, name: 'fii'},
    {id: 3, name: 'deff'},
    {id: 4, name: 'ranaa'},
];

const upperWord = DATA.map((item) => item.name.toUpperCase());
console.table(upperWord);