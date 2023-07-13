//ADDING 100 para
//for loop
for(let i=1; i<=100; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'This is para' + i;

    document.body.appendChild(newElement);
}

//obtimizing a bit
let myDiv = document.createElement('div');

for(let i=1; i<=100; i++){
    let element = document.createElement('p');
    element.textContent = 'This is para' + i;

    myDiv.appendChild(element);
}

document.body.appendChild(myDiv);