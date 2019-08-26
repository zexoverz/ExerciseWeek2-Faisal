
let rows3 = 5;
let rows = "";

for (let i = 0; i < rows3; i++) {
    for (let j = 0; j <= i; j++) {
        rows += "*";
    }
    rows += "\n";
}

console.log(rows);