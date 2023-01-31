let value = prompt ("Введите значение");
value = +value;
alert (typeof value);

if (value % 2 === 0) {
    alert ("Четное");
}

if (value %1 === 0) {
    alert ("Нечетное");
}

else {
    alert ("Упс, кажется, вы ошиблись");
}

if (value === NaN)
 alert(false);

