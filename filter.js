const DATA = [
    {id: 1, name: 'raff'},
    {id: 2, name: 'fii'},
    {id: 3, name: 'Ndepp'},
    {id: 4, name: 'ranaa'},
];

const filterData = DATA.filter((item) => item.name === 'Ndepp');
console.table(filterData)