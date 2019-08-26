
let rows2 = 5;
let rows = "";

for (let i = 0; i < rows2; i++) {
    for (let j = 0; j < rows2; j++) {
        rows += "*";
    }
    rows += "\n";
}

console.log(rows);