function capitalize(word){

    return word.charAt(0).toUpperCase() + word.slice(1);
}

function reverseString(str){
return str.split('').reverse().join('');

}

const calculator = {
    add: function(a,b){
        return a + b ;
    },
    substract: function(a,b){
        return a - b;
    },
    divide: function(a,b){
        return a/b;
    },
    multiply: function(a,b){
        return a*b;
    }
}
let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
     'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
function ceasarCipher(str, k){
    let acc = '';
    
    for(let i=0; i<str.length; i++){
        let char = str[i];
        const isAletter = alphabet.includes(char);
        if(!isAletter){
            
            acc += char;
        }else{
            const charIndex = alphabet.findIndex((c)=>c === char);
            acc+= alphabet[charIndex + k] || alphabet[charIndex - k]
        }
    }
 return acc;

}
// average = total / legnth
function sumOfArrays(arr){
    let total = 0;
    for(let i=0; i<arr.length ; i++){
        total += arr[i]
    }
    return total;
}
//min = smallest number
function minNumber(arr){
    let min = arr[0];
    for(let i= 0; i< arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
} 

//max largest number

function maxNumber(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]> max){
            max = arr[i]
        }
    }
    return max;
}
//length = length (Number of items)

function analyzeArray(arr){
    const object = {
        average: sumOfArrays(arr)/arr.length,
        min: minNumber(arr),
        max: maxNumber(arr),
        length: arr.length
    }
    return object
}

//module.exports = {capitalize, reverseString, calculator}
export {capitalize, reverseString, calculator, ceasarCipher, analyzeArray};