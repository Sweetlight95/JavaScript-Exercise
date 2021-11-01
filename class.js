// Write a JS Function that takes two arrays as input to create an array of arrays. 
// e.g let a = ["a", 1, true], b = ["b", 2, false]

function twoArrays (a, b) {
    let c = [];
    let d=[]
    let e = []
    let f=[]
    for(let i in a) {
        if(i === Number) {
            c.push(i)
        }
        if (i===String) {
            d.push(i)
        }
        if (i===Boolean) {
            e.push(i)
        }
    }
   
    for(let i in b) {
        if(i === Number) {
            c.push(i)
        }
        if (i===String) {
            d.push(i)
        }
        if (i===Boolean){
             e.push(i)
        }
    }
    
    f.push(c, d, e)
    return f
}
const a = ["a", 1, true];
const b = ["b", 2, false];
// console.log(Object.entries(twoArrays));
// twoArrays()
console.log(twoArrays(a, b))