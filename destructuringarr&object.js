const name = ['rafi','defrana'];
const [firstName, lastName] = name;
console.log('hasilnya adalah', lastName);


const presidentKucing = {
    id: 1,
    name: 'Bobby kartanegara',
    isAnimal: true
}

const {id, ...rest} = presidentKucing;
// console.log(id);
console.log(rest);