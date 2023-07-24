//const {capitalize, reverseString, calculator} = require("../src");
import {capitalize, reverseString, calculator, ceasarCipher, analyzeArray} from "../src";
describe('Test capitalization function', ()=>{
    test('capitalize the first letter of a word', ()=>{
        expect(capitalize('hello world')).toBe('Hello world');
    })

    test('Test case of single letter', ()=>{
        expect(capitalize('a')).toBe('A');
    })
});

describe('Test reveseString Function', ()=>{
    test('return a given string reversed', ()=>{
        expect(reverseString('string')).toBe('gnirts');
    })
});

describe('Tests for calculator object', ()=>{
    test('Test add function', ()=>{
        expect(calculator.add(3,6)).toBe(9);
    });
    test('Test substract function', ()=>{
        expect(calculator.substract(9,6)).toBe(3);
    });
    test('Test divide function', ()=>{
        expect(calculator.divide(6,6)).toBe(1);
    });

    test('Test multiply function', ()=>{
        expect(calculator.multiply(3,6)).toBe(18);
    });

});

describe('Test Ceaser Cipher Function', ()=>{

    test('test cipher working', ()=>{
        expect(ceasarCipher('ABCD', 1)).toBe('BCDE');
         });


});

describe('Analyze Array Function Test', ()=>{
    test('Test Analyze Array Function', ()=>{
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
    })
})