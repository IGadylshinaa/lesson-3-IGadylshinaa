/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */

function isPalindrome(str) {
    str = str.toLowerCase()
    return str === str.split('').reverse().join('')
}

















































module.exports = isPalindrome