// //Event listner  :-
// // It is used when we want to perform an action during that event 
// // Eg: On click on website title video must be played is an event listner
// // It can be also used to see what user does on the website where he/she click, screenshot taken, mouse pointer where it goes, how much time spend
let content = document.querySelector('h1'); //on which content to click event listner

content;//print it

content.addEventListener('click',function(){
    console.log('I clicked on document');
    content.style.background = 'red';
});