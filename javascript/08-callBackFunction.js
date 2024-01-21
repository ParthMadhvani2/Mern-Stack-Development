// Searching on Objects 
let objArray = [
    {
        No : 1,
        Name : 'Parth'
    }
    ,
    {
        No : 2,
        Name : 'Par'
    }
]

console.log(objArray); 

console.log(objArray.includes({No:1,Name:"Parth "})); //present but false

// For this we use callback function 
let obj = objArray.find((obj) => obj.Name === "Parth");
console.log(obj);