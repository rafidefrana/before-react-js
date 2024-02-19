const characters = [ 
    "Kisuke Urahara",
    "Shunsui Kyōraku",
    "Sosuke Aizen",
    "Ichigo Kurosaki",
    "Zaraki",
];

const copyArr = [...characters];
// dar index ke 0 sampai index ke 1 / 2 langkah ngehapus
copyArr.splice(0, 2);

// dar index ke 1 sampai index ke 2 / 2 langkah ngehapus
// angka di belakang berapa yang harus di hapus, di depan start index ke berapa
//* copyArr.splice(1, 2);

console.log(copyArr);

//  + 1 dari panjang array
copyArr.splice(copyArr.length, 1, "Rafi Defrana");

console.log(copyArr)