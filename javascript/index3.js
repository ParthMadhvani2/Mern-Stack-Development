console.log('Hello Jee');

let LastName = 'Madhvani';

let firstName = new String ('Parth');

// let message = 'This is my \n first \n message';
// let message = `
// Hello $(LastName),

// thanks for the opportunity

// Regards,
// Parth`;

// console.log(message);

// let.words = message.split(' ');

// console.log(words);


// // ways to print dates with javascript :
// let date = new Date();
// let date2 = new Date('June 20 1998 07:15');
// let date3 = new Date(1998, 11, 20, 7);       // here the month starts from 0 - 11 jan - Dec 

// console.log(date3);


// //Array in JS :
// let numbers = [1, 2, 3, 4, 5, 6, 7];    //declaration of arrays



// // print array in JS :
// console.log(numbers);

// //insertion in JS at end of array -> push :
// numbers.push(9);
// console.log(numbers);

// //insertion in JS at beginning of array -> unshift :
// numbers.unshift(0);
// console.log(numbers);

// // insertion in JS at end of array -> splice :
// numbers.splice(4, 0,3.5,3.6,3.7,3.8 ,3.9);    // .splice(at which index number,what to delete, what to add to array)
// console.log(numbers);


// // searching in array :
// console.log(numbers);

// console.log(numbers.indexOf(3));
// console.log(numbers.indexOf(8));


// // we want to search that a number exists in an array?
// if(numbers.indexOf(4)!=-1)
// console.log("present number in array");       //this is not right way

// console.log(numbers.includes(7));             //this is right way for searching for numbers

// console.log(numbers.indexOf(4, 2));




// // Array of object :
// let courses = [
//     {no:1, naam:'Parth'},
//     {no:2, naam:'Tirth'}
// ];

// console.log(courses);

// // both methods are wrong, as both have differnt addresses so values doesn't match so result is -1 and false :
// console.log(courses.indexOf({no:1, naam:'Parth'}));
// console.log(courses.includes({no:1, naam:'Parth'}));

// // but, by using call by fuction we can find :
// let course = courses.find(function (course){
//     return course.naam === 'Parth';
// });

// console.log(course);

// //to make it more smaller we write with arrow functions instead :
// let course = courses.find(course => course.naam === 'Parth');

// console.log(course);


// //Removing element in array :
// let numbers = [1, 2, 3, 4, 5, 6, 7];     //declaration of arrays

// numbers.pop();           //remove the last element in array
// numbers.shift();         //remove the first element in array
// numbers.splice(2,1);     //remove the any element in array at index where .splice(index no., no of elements to remove after that index)

// console.log(numbers);




// // to empty full array then:

//let numbers = [1,2,3,4,5,6,7];
// let numbers2 = numbers.
// //numbers = [];         //one way ( best way top empty array )
// numbers.lenght = 0;     //second way
// numbers.splice(0,numbers.lenght);    //third way
// while(numbers.length>0){
//     numbers.pop();      //forth way
// }

// console.log(numbers);
// console.log(numbers2);



// // Combining and Slicing arrays :
//  let first = [1,2,3];
//  let second = [4,5,6,7,8];

// let combined = first.concat(second);
// console.log(combined);

// //for slice give starting index and ending index .slice(2,3);
// let third = [10,20,30,40,50,60,70,80,90,100];
// let slice = third.slice(2,8);
// console.log(slice);


// //combine new way :
// let combine =[...first,'a',...second,'b',true,false];
// console.log(combine);

// //copy create
// let another =[...combine];
// console.log(another);


// // iterate arrat ( travels in array )
let arr = [10,20,30,40,50,];
for(let value of arr){
    console.log(value);
}