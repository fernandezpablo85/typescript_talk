// Step Two: typescript as a superset.

function area(shape) {
    switch (shape.kind) {
        case 'circle': return Math.PI * Math.pow(shape.radius, 2);
        case 'square': return shape.side * shape.side;
        case 'rectangle': return shape.height * shape.width;
    }
}

function displayArea(shape) {
    const a = area(shape);
    const rounded = Math.round(a * 100) / 100; // round to two decimals
    console.log(`area of ${shape.kind}: ${rounded}`);
}

// valid invocations
displayArea({ kind: 'circle', radius: 2 });
displayArea({ kind: 'square', side: 10 });
displayArea({ kind: 'rectangle', height: 20, width: 10 });
displayArea({ kind: 'circle', radius: 2_000 });

// invalid invocations #1
// displayArea(1, 1, 1, 1); // up to 65.535 on chrome.
// displayArea(1, 2, 3, 4);

// invalid invocations #1.5
// displayArea();

// invalid invocations #2
displayArea(displayArea);
displayArea(1);
displayArea({ kind: 'rectangle', width: 10, heigth: 20 });

// invalid invocations #3
displayArea({ kind: 'rectangle', side: 10, height: 20 });
displayArea({ kind: 'square', height: 10, width: 10 });

// invalid invocations #4
displayArea({ kind: 'cicrle', radius: 10 });
displayArea({ kind: 'triangle', height: 10, width: 15 });

console.info('success 🙌');
