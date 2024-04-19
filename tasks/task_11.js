/*
Вы реализуете один раз функцию,
которая принимает другую функцию в качестве аргумента и возвращает новую версию этой функции,
которую можно вызвать только один раз.

Последующие вызовы результирующей функции не должны иметь никакого эффекта (и должны возвращать неопределенное значение).

Например:

logOnce = один раз(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> нет эффекта
*/
function once(func) {
    let called = false;

    return function(...args) {
        if (!called) {
            called = true;
            return func(...args);
        }
    };

}

module.exports = once



