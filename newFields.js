// using the array of object to create new field 
// fullname (combining the firstname and the last name)
// Email(firstname@semicolon.africa)
// nickname (combining the first initials of both firstname and lastname)


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
function newArrays(arrayObject){
for (let i = 0; i < arrayObject.length; i++) {
    arrayObject[i].fullName = arrayObject[i].firstName + " " + arrayObject[i].lastName;
    arrayObject[i].email = arrayObject[i].firstName + "@semicolon.africa";
    arrayObject[i].nickname = arrayObject[i].firstName.charAt(0) + arrayObject[i].lastName.charAt(0);
}     return arrayObject;
}
  
console.log(newArrays(arrayObject));

