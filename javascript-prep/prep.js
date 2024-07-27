
// function square(num) {
//     return num[0] * num[0];
// }

// function cube(num) {
//     return num[0] * num[0] * num[0];
// }

// function sum(num) {
//     return num[0] + num[1];
// }

// function showResult(fn, nums) {
//     return fn(nums);
// }

// //IIFE = immediately invoked function expression

// (function test(num) {
//     console.log("the result is: " + square(num));
// })([5]);


// // Closure q2
// var addSix = createBase(6);
// console.log(addSix(10)); // returns 16
// console.log(addSix(21)); // returns 27

// function createBase(num1) {
//     return function (num2) { return num1 + num2 }
// }

// // Closure q3 time optimization

// function find() {
//     let a = [];
//     let i = 0;
//     for (i; i < 250000; i += 4) {
//         a[i] = i * i;
//         a[i + 1] = (i + 1) * (i + 1);
//         a[i + 2] = (i + 2) * (i + 2);
//         a[i + 3] = (i + 3) * (i + 3);
//     }
//     return function (index) {
//         console.log(a[index]);
//     }
// }

// const closure = find();

// console.time("6");
// closure(6);
// console.timeEnd("6");
// console.time("12");
// closure(12);
// console.timeEnd("12");

// // Closure q4 block scope

// for (var i = 0; i < 3; i++) {
//     function b(i) {
//         setTimeout(function log() {
//             console.log(i);
//         }, i * 1000);
//     }
//     b(i);
// }

// // Closure q5 create private counter

// function counter() {
//     var _counter = 0;
//     return function () {
//         return ++_counter;
//     }
// }

// const count = counter();
// console.log(count());
// console.log(count());


// // closure q6 what is module pattern

// let view;
// function likeTheVideo() {
//     if (!view) {
//         view = "spam";
//         console.log("Like the video");
//     }
// }
// likeTheVideo();
// likeTheVideo();
// likeTheVideo();
// likeTheVideo();


// // currying q1 - sum(2)(6)(1)

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }
//     }
// } 
// console.log(sum(2, 6, 1));

// // currying q2 - sum, multiply, subtract, divide

// function evaluatge(a) {
//     if (a === "+") {
//         return function (b) {
//             return function (c) {
//                 return b + c;
//             }
//         }
//     } else if (a === "-") 
//     {
//         return function (b) {
//             return function (c) {
//                 return b - c;
//             }
//         }
//     } else if (a === "*")   
//     {
//         return function (b) {
//             return function (c) {
//                 return b * c;
//             }
//         }
//     } else if (a === "/")   
//     {
//         return function (b) {
//             return function (c) {
//                 return b / c;
//             }
//         }
//     }
// }

// console.log(evaluatge("+")(2)(6));
// console.log(evaluatge("-")(2)(6));
// console.log(evaluatge("*")(2)(6));
// console.log(evaluatge("/")(2)(6));

// // currying q3 - infinite currying sum

// function add(a) {
//     return function (b) {
//         if (b) {
//             return add(a + b);
//         }
//         return a;
//     }
// }

// console.log(add(2)(3)(4)(5)()); //14

// // currying q4 - currying vs partial application

