// Write a JS Function that takes two arrays as input to create an array of arrays. 
// e.g let a = ["a", 1, true], b = ["b", 2, false]

function twoArrays (a, b) {
    let g = a.concat(b);
    let c = [];
    let d=[]
    let e = []
    let f=[]
    for(let i = 0; i < g.length; i++) {
        if(typeof g[i] === "number") {
            c.push(g[i]);
        }
        if (typeof g[i] === "string") {
            d.push(g[i]);
        }
        if (typeof g[i]=== "boolean") {
            e.push(g[i]);
        }
    }
    f.push(c, d, e);
    return f;
}   

const a = ["a", 1, true];
const b = ["b", 2, false];

console.log(twoArrays(a, b));