

function square(num) {
    return num[0] * num[0];
}

function cube(num) {
    return num[0] * num[0] * num[0];
}

function sum(num) {
    return num[0] + num[1];
}

function showResult(fn, nums) {
    return fn(nums);
}

//IIFE = immediately invoked function expression

(function test(num) {
    console.log("the result is: " + square(num));
})([5]);
