// //Event listner  :-
// // It is used when we want to perform an action during that event 
// // Eg: On click on website title video must be played is an event listner
// // It can be also used to see what user does on the website where he/she click, screenshot taken, mouse pointer where it goes, how much time spend
// let content = document.querySelector('h1'); //on which content to click event listner

// content;//print it

// content.addEventListener('click',function(){
//     console.log('I clicked on document');
//     content.style.background = 'red';
// });

// // other addeventlistner() -

// function eventFunction() {
//     console.log('I have clicked on the docuemnt');
// }

// document.addEventListener('click', eventFunction);
// // to remove event listner we need same object only different objects not allowed
// // 3 condition only it works 1. same target 2. same type 3. same function
                            
// document.removeEventListener('click', eventFunction);


// let green = document.querySelector('p'); //on which content to click event listner

// green;//print it

// green.addEventListener('click',function(){
//     console.log('I clicked on document');
//     green.style.background = 'green';
// });



// // Phase of an Event :-
// 1. capturing phase 2. at event phase 3. bubbling phase

// const contentwrap =document.querySelector('#wrapper');

// contentwrap.addEventListener('click',function(event){
//     console.log(event);
// });// we have made this event in which we print event on clicking on it
// // to take other number links Eg third:

// let links = document.querySelectorAll('a');
// let thirdLink = links[2];

// thirdLink.addEventListener('click',function(event){
//     event.preventDefault();
//     console.log('Maza aaya acha laga');
// });


// let myDiv = document.createElement('div');

// function paraStatus(event) {
//     console.log('Para ' + event.target.textContent);
// }
// myDiv.addEventListener('click',paraStatus);

// for(let i=1;i<=100;i++){
//     let newElement = document.createElement('p');
//     newElement.textContent = 'This is para '+ i;

//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


let element = document.querySelector('#wrapper');

element.addEventListener('click', function(event) {
    if(event.target.nodeName === 'SPAN') {
        console.log('span pr click kia hai' + event.target.textContent);
    }
});