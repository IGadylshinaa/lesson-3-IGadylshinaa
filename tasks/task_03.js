/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    str = str.toLowerCase();
    
    const vowelsN = /[aeiouy]/g;
    const vowels = str.match(vowelsN);
    return vowels ? vowels.length : 0;
}












































module.exports = getVowelsCount