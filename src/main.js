function area(shape) {
    switch (shape.kind) {
        case 'circle': return Math.PI * Math.pow(shape.radius, 2);
        case 'square': return shape.side * shape.side;
        case 'rectangle': return shape.height * shape.width;
    }
}

function displayArea(shape) {
    const shapeArea = area(shape);
    const rounded = Math.round(shapeArea * 100) / 100; // round to two decimals
    console.log(`area of ${shape.kind}: ${rounded}`);
}

/* 
    Valid invocations 
*/
displayArea({ kind: 'circle', radius: 2 });
displayArea({ kind: 'square', side: 10 });
displayArea({ kind: 'rectangle', height: 20, width: 10 });
displayArea({ kind: 'circle', radius: 2_000 });

/* 
    Invalid invocations - trivial
*/
displayArea();
displayArea(1, 1, 1, 1);
displayArea(1, 2, 3, 4, 1, 2, 3, 4, 5, "is there a limit?");

/* 
    Invalid invocations - easy
*/
displayArea(displayArea);
displayArea(1);
displayArea({ kind: 'rectangle', width: 10, heigth: 20 });

/* 
    Invalid invocations - hard
*/
displayArea({ kind: 'cicrle', radius: 10 });
displayArea({ kind: 'triangle', height: 10, width: 15 });

/*
    Invalid invocations - hard
*/
displayArea({ kind: 'rectangle', side: 10, height: 20 });
displayArea({ kind: 'square', height: 10, width: 10 });

/*
    Extra - Support 'triangle's
*/

// displayArea({ kind: 'triangle', height: 10, base: 15 });


/*
    Extra 2:

    Fun fact A: how many parameters can you add?
    - Platform specific: up to 65.535 on Chrome

    Fun fact B:
    - given a function "action" that accepts a boolean parameter
    - it's domain is [false, true], 2 possible invocations: action(false) / action(true)
    - if we limit ourselves to 270, in javascript, there are 2^270 possible invocations (only using true and false)
    - that's a bigger than 10^80
    - 10^80 is the number of atoms on the universe
    - every single javascript function has a range *way* bigger than the number of atoms in the universe
*/
