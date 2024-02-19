// method concat atau alternatif bisa pakai spread Op
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [1, 2, 3, 4, 5, 6, 7];

const mergeArr = arr1.concat(arr2, arr3);
console.log(mergeArr);

// menggunalkan spread operator
const spredOpArr = [...arr1, ...arr2, ...arr3];
console.log(spredOpArr)