// function of ascending and descending order
// let c = [2, 3, 1, 5, 9]

    const c = [2, 3, 1, 5, 9];

    // ascending order
    c.sort(function(a, b) { return a - b});

    console.log(c);

    // descending order 
    c.sort(function (a, b){return b - a});

    console.log(c);