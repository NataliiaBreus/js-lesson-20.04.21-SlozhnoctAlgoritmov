/*
// Homework 16.04.21

function checkAnagram(word1, word2) {
    return (
        word1.toLowerCase().split("").sort().join("") ===
        word2.toLowerCase().split("").sort().join("")
    );
}

function createMap(str) {
    const mapToStr = new Map();
    for(const  letter of str) {
        if(mapToStr.has(letter)){
            const letterCount = mapToStr.get(letter);
            mapToStr.set(letter, letterCount + 1);
            continue;
        }
        mapToStr.set(letter, 1);
    }
    return mapToStr;
}

function compare(word1, word2) {
    if (word1.length !== word2.length) {
        return false;
    }
    const mapToStr1 = createMap(word1);
    const mapToStr2 = createMap(word2);

    if (mapToStr.size !== mapToStr2.size) {
        return false;
    }
    for(const key of mapToStr.keys()) {
        if(mapToStr1.get(key) !==mapToStr2.has(key)) {
            return false;
        }
    }
    return true;
}

// считаем гласные буквы

function countVowels(str) {
    return str
    .toLowerCase()
    .split("")
    .reduce((accumulator, currentValue)=>{
        return VOWELS.includes(currentValue) ? accumulator + 1 : accumulator;
    }, 0);
}

// next task

function uniqueizeArray (arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError();
    }
    return arr.filter((item, index, array) => {
        return array.indexOf(item) === index;
    });
}
*/
// work with SET

const mySet = new Set([1,2,3,4,5,6,7,8]);

// создать массив, содержащий уникальные элементы из предыдущих массивов


const nums1 = [1,1,1,1,1,2,2,2,3,3,4,44,5,6];
const nums2 = [1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,11,1,0,0];

const unique = new Set (nums1.concat(nums2));

const unique2 = [...new Set([...nums1, ...nums2])];
Array.isArray(unique);

// Деструктуризация

/*
const monitor = {
    sizes: {
        height: {
            value:20,
            scale: 'cm',
        },
        width: {
            value: 56.5,
            scale: 'cm',
        },
    },
    model: "Samsung",
    brightness: 200, 
    contrast: 100,
    color: 'black',
    dpi: 250,
    resolution: "4K",
};

console.log(monitor.sizes.height.value);

function getDiagonal(monitor) {
    monitor.sizes.height.value
    monitor.sizes.width.value
}

const {brightness, dpi, color} = monitor;
console.log(brightness, dpi, color);

const {
    sizes: {
        height: {
            value: heightValue,
        },
        width: {
            value: widthValue,
        },
},
} = monitor;

console.log (`Height: ${heightValue}, Width: ${widthValue}`);
console.log (monitor);

const {
    sizes: {
        height: {
            scale: heightScale,
        },
        width: {
            scale: widthScale,
        },
},
} = monitor;

console.log (`Width: ${widthScale}, Height: ${heightScale}`);
console.log (monitor);
*/
const nums = [1,2,3,4,5,6,7,8];

const [firstNumber, seconsNumber, thirdNumber, ...restOfNums] = nums;

 console.log (firstNumber, seconsNumber, thirdNumber, restOfNums);

 // Написать функцию, которая принимает обьект, с помощью деструктуризации 2 его свойства помещает в переменные, а остальные с помощью рест оператора сохраняет в отдельный обьект


 // задание 2
 const monitor2 = {
        sizes: {
            height: {
                value: 27.3,
                scale: 'cm',
            },
            width: {
                value: 58.6,
                scale: 'cm',
            },
        },
        color: 'black',
        dpi: 100,  
    };
    
    function getMonitorInfo (monitor) {
        monitor.sizes.height.value.scale
        monitor.sizes.width.value.scale
    }
    const {color, dpi} = monitor2;
    const {
        sizes: {
            height: {
                value: heightValue,
                scale: heightScale,
            },
           width: {
            value: widthValue,
            scale: widthScale, 
           },
        },
    } = monitor2;

    console.log (`Color: ${color}/nDPI: ${dpi}/nWidth: ${widthValue} ${widthScale}/n${heightValue} ${heightScale}`);
    console.log(monitor2);

    // Решение задачи
    function example ({
        sizes: {
            height: {
                value: heightValue,
                scale: heightScale,
            },
                width:{
                    value: widthValue,
                    scale: widthScale,
                },
        },
        color,
        dpi,
    }) {
        return `Color: ${color}\nDPI: ${dpi}\nWidth: ${widthValue} ${widthScale}\nHeight: ${heightValue} ${heightScale}`
    }

    // сложность алгоритмов confirm 

    function agree () {
        const result = confirm ('Are you ready?');
        if (result) {
            alert ("Welcome to our team!");
        } 
    }




 


