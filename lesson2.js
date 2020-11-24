 // ЗАДАНИЕ 1

// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 В префиксной форме инкрементирование производится сразу, а возврат — уже с обновленным значением.
// d = b++; alert(d);           // 1 В постфиксной форме сначала происходит возвращение значения, а потом выполняется инкрементирование. 
// c = (2+ ++a); alert(c);      // 5 Сдесь ++а в префиксной форме и так как уже а инкреминтировалась на 1, то а = 3 (2 + 3 = 5)
// d = (2+ b++); alert(d);      // 4 Сдесь ++b в постфиксной форме и так как уже а инкреминтировалась на 1, то b = 2 (2 + 2 = 4)
// alert(a);                    // 3 а По коду инкрементировалась 2 раза (1 + 2 = 3)
// alert(b);                    // 3 b По коду инкрементировалась 2 раза (1 + 2 = 3)


 // ЗАДАНИЕ 2

// let a = 2;
// let x = 1 + (a *= 2);
// x = 5; Потому что 1 + 4 = 5 (В скобках получается 4 так как использован оператор =* он умножает число убе записаное в переменную на свой операнд который справа в итоги 2*2=4)

 // ЗАДАНИЕ 3
// Объявить две целочисленные переменные — a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом.



let a = 5;
let b = 6;

if (a && b >= 0) {
    y = a - b;
    console.log(y);
}
else if(a >= 0 && b < 0 || a < 0 && b >= 0) {
    y = a + b;
    console.log(y);
}
else if (a&&b < 0) {
    y = a * b;
    console.log(y);
}

// ЗАДАНИЕ 4
// Реализовать четыре основные арифметические операции в виде функций с двумя параметрами.Обязательно использовать оператор return.


function plus(a, b) {
    return  a + b;
}
console.log(plus(3, 6));
function minus(a, b) {
    return  a - b;
}
console.log(minus(3, 6));
function multiply(a, b) {
    return  a * b;
}
console.log(multiply(3, 6));
function share(a, b) {
    return  a / b;
}
console.log(share(3, 6));

 // ЗАДАНИЕ 5
function mathOperation(arg1, arg2, operation){
    switch(operation){
    case 'сложение':
        return arg1 + arg2;
    break;
    case 'вычитание':
        return arg1 - arg2;
    break;
    case 'деление':
        return arg1 / arg2;
    break;
    case 'умножение':
        return arg1 * arg2;
    break;
                            }
}    
console.log (mathOperation(3, 2, "сложение")); 

 // ЗАДАНИЕ 6**

let sumUser = prompt("Введите сумму, которую хотите вложить на счет в банке");
let lastWorld
let lastIndex = sumUser.charAt(sumUser.length - 1);

if (lastIndex == 0 || lastIndex == 5 || lastIndex == 6 || lastIndex == 7 || lastIndex == 8 || lastIndex == 9) {
    lastWorld = "рублей";
}
else if (lastIndex == 1) {
    lastWorld = "рубль";
}
else {
    lastWorld = "рубля";
}
let sumUserGet = alert("Вы хотите вложить:" + " " + sumUser + " " + lastWorld);
