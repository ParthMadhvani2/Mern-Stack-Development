//console.log('Hello everyone');

// // Difference between the function declaration and the function assignment :-

// //function call or invoke function
// run();
// //we can call function before declaring the function
// //because in javascript hoisting concept takes place :
    // //where all the function are called together in starting not like c++, 
    // //      while in other words :
    // //hoisting is the process of moving function declaration to the top of the file

// //function declaration
// function run(){
//     console.log('running');
// }


// //Named function assignment
    // // assigning a function to a variable is know as function assignment
    // // but we cannot call the function directly here
    // // like here : walk(); cannot be called directly but instead we call the function stand();
    // //and hoisting doesn't work here because this is not a function declaration

    // let stand = function walk(){
//     console.log('walking');
// };

// // //Annonymous function assignment
// let stand2 = function(){
//     console.log('walking');
// };

// stand();
// stand2();

// let jump = stand;
// jump();




// let x = 1;
// x = 'a';

// console.log(x);
// //1.
// function sum(a, b){
//     return a+b;
// }

// console.log(sum(1, 2));  //3
// console.log(sum(1));     //NaN
// console.log(sum());      //NaN
// console.log(sum(1,2,3,4,5));    //3

// //2.
// function sum(a, b){
//     console.log(arguments); //prints object
//     return a+b;
// }
// let ans = sum(1,2);
//  ans = sum(1,2,3,4,5);


// //pass any number of parameters using special objects arguments
// //3.
//  function sum(){
//     let total = 0;
//     for(let value of arguments)
//     total = total + value;
//     return total;
// }
// let ans = sum(1,2,3,4,5,6);
// console.log(ans);   // prints 21



// //argument would be array instead of object as above learned (rest operator)
// function sum(...args){
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


// function sum(num,value,...args){        // we cannot write parameters after passing args(arguments)
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


// // Default parameters
// // this is used when the user does not pass any values then it should take any default value 
// function interest(p,r,y){
//     return p*r*y/100;
// }

// console.log(interest(1000,10,5));

// //then write like this values
// function interest(p,r=10,y=5){  // //note rule :in default parameter if one is default value then rest after all has to be only default parameters (means if r is default then y must be default no choice otherwise error will be shown)
//     return p*r*y/100;
// }

// console.log(interest(1000,8));

// // hack for the above problem with default parameters ( but it is a bad practice )
// function interest(p,r=10,y=5){
//     return p*r*y/100;
// }

// console.log(interest(1000,undefined,8));





// //GETTER AND SETTER
// // getter -> access properties
// // setter -> change or update properties

// let person = {
//     fName : 'Parth',
//     lName : 'Madhvani'
// };
// console.log(person);



// function fullName(){
//     return `${person.fName}   ${person.lName}`   //in backticks space will be counted and donot use single quoted commas as it will read as string
// }
// console.log(fullName());

// //issue -> this function is read only

// // so we use a get keyword here to access properties
//  person = {
//     fName : 'Parth',
//     lName : 'Madhvani',
//     get fullName(){
//         return `${person.fName}      ${person.lName}`   
//     },
//     set fullName(value){
//         let parts =values.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };

// person.fullName = 'Umesh kumar';
// console.log(person.fullName);