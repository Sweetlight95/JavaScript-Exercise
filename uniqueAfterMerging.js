// Write a JavaScript function to merge two arrays and removes all duplicates elemnts
// let a = [2,3,1], b = [2,3,1,5,9] returns [2,3,1,5,9]

function getUniqueAfterMerging(a, b) {
    let c = a.concat(b);
    let duplicate = [...new Set(c)];
    console.log(duplicate);
}
const a = [2, 3, 1];
const b = [2, 3, 1, 3, 5, 9];

getUniqueAfterMerging(a, b);