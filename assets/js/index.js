'use strict';


// Линейный поиск

const nums12 = [
    123,
    4,
    516,
    235434,
    4556,
]

const linearSearch = (arr, value) => {
    // линейный алгоритм O(n)
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === value) {
            return i;
        }
    }
    return -1;
};
const sortedNums = [1,2,3,5,7,9,150,275]; //Бинарный поиск, логарифмическая сложность O(log n)
const binarySearch = (arr, value) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.round((start + end) /2);

    while(true) {
        if(arr[middle] === value) {
            return middle;
        }
        if (start === end) return -1;
        if (arr[middle] > value) {
            end = middle;
            middle = Math.floor((start + end) / 2);
        } else {
            start = middle;
            middle = Math.ceil((start + end) / 2);
        }
    }
    return -1;
}

// O(n^2)
const createMultiplicationTable = (limit = 10) => {
    const table = [];
     for (let i = 1; i < limit; i++) {
         for (let j = 1; j < limit; j++) {
             table.push (`${i} * ${j} = ${i * j}`)
         }
     }
     return table;
}

// task угадать случайное число, использовать бинарный поиск

const numGuesser = (startValue = 0, endValue = 100) => {
    let start = startValue;
    let end = endValue;
    let middle = Math.round((start + end) /2);

    while(true) {
        if(confirm (`Это ВАше число ${middle}?`)) {
            return middle;
        }
        
        if (confirm (`${middle} больше чем ваше число?`)) {
            end = middle;
            middle = Math.floor((start + end) / 2);
        } else {
            start = middle;
            middle = Math.ceil((start + end) / 2);
        }
    }
   
}
console.log(numGuesser(1,100));
