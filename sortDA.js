// Write a JavaScript program to sort an array of objects in ascending and descending order.
let arrayObject = [
    {
        id : 3,
        firstName: "saheed",
        lastName: "adesuwa"
    },

    {
        id : 2,
        firstName: "yetunde",
        lastName: "hamad" 
    },
    {
        id : 1,
        firstName: "goodnews",
        lastName: "confidence"
    },
    {
        id : 4,
        firstName: "gideon",
        lastName: "mojoyin"
    }
];
// ascending of an Array Object
arrayObject.sort(function(a, b){return parseInt(a.id) - parseInt(b.id)});
console.log(arrayObject)

// Descending of an Array Object
arrayObject.sort(function(a, b){return parseInt(b.id) - parseInt(a.id)});
console.log(arrayObject)