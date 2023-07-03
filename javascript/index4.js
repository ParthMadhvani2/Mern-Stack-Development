//console.log('Hello everyone');

// // Difference between the function declaration and the function assignment :-

// //function call or invoke function
run();
// //we can call function before declaring the function
// //because in javascript hoisting concept takes place :
    // //where all the function are called together in starting not like c++, 
    // //      while in other words :
    // //hoisting is the process of moving function declaration to the top of the file

// //function declaration
function run(){
    console.log('running');
}


// //function assignment
    // // assigning a function to a variable is know as function assignment
    // // but we cannot call the function directly here
    // // like here : walk(); cannot be called directly but instead we call the function stand();
    // //and hoisting doesn't work here because this is not a function declaration
let stand = function walk(){
    console.log('walking');
};

stand();
