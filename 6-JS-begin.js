let arr = [1, '45', 3, 4, 5, 6];

let i = 0; i < arr.length - 1; i++;

let falseResult = typeof(arr[i]) === Number;
let trueResult = typeof(arr[i]) !== Number;

if (typeof(arr[i]) === Number;) {
    console.log(trueResult);
} else {
    console.log(falseResult);}




//другое решение, т.к. первое скорее всего неверно..
    let arr1 = [1, '45', 3, 4, 5, 6];
    let identical = true;

    for (let i = 0; i < arr1.length - 1; i++) {

        for (let j = i + 1; j < arr1.length; j++) {

            if (typeof(arr1[i]) !== typeof(arr1[j])) {
                identical = false;
            }
        }
    }
    if (identical) {
        console.log("true");
    } else {
        console.log("false");
    }
