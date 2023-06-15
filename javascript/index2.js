console.log('Chaliye shuru karte hai ');

//object create
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

//factory function 

// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle');
//         }
// //     };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(5, 4);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudents

//constructor function 
                //-> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define

// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// Rectangle

// //object creation using constrcutor function
// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// // object deletion using constrcutor
// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 'breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw= function() {
//     console.log('drawing');
// }`);

// //object creation using Rectangle1
// let rect = new Rectangle1(2,3);

// rect.length;

// console.log(rect);


// rectangle.length;
// rectangle.breadth;

// rectangle.draw();

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// Notes:

    // Primitives are copied by their values. and
    //references are copied by their address/reference.

// example: primitives

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);


// lets print the value of a ( primitive value : pass by value)
// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);

// lets print the value of a ( pass by reference)
// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);


//new concept

// let rectangle = {
//     length:2,
//     breadth:4
// };



//for-in loop 
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }




//for-of loop
// for(let key of Object.entries(rectangle)) {
//     console.log(key);
// }

// if-else in js

// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


//object - colone #1
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let destination = {};

// for(let key in src) {
//     destination[key] = src[key];
// }

// console.log(destination);

// src.a++;
// console.log(destination);

//Object Cloning #2
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let destination = Object.assign({}, src, src2);

// console.log(destination);

// src.a++;

// console.log(destination);

//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let destination = {...src};

// console.log(destination);

// src.a++;

// console.log(destination);
