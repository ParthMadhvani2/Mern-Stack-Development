// Here is an example of using the map function in combination with the filter function:

const people = [
    { name: 'Alice', age: 20 },
    {name: 'Bob', age: 30 },
    {name: 'Charlie', age: 40 }
    ];
    const names = people.filter(person => person.age >= 30).map(person => person.name);
    console.log(names);     // ['Bob', 'Charlie']

    
// In this example, we have an array of people with name and age properties. We use the filter function to create a new array of people who are over the age of 30.
// We then use the map function to create a new array of just the names of those people.

// In conclusion, the map function is a powerful tool for transforming and manipulating data in JavaScript arrays.
// It allows you to apply a function to every element of an array and create a new array with the results.

// The map function is often used in combination with other JavaScript methods to create complex data transformations.