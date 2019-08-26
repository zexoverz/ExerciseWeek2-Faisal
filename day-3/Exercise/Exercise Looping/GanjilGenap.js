// Ganjil Dan Genap
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i + " GENAP");
    } else {
        console.log(i + " GANJIL");
    }
}

// Counter 2 dengan kelipatan 3
for (let x = 1; x <= 100; x+= 2) {
    if (x % 3 === 0) {
        console.log(x + " Kelipatan 3");
    } else {
        console.log(x );
    }
}

// counter 5 dengan kelipatan 6

for (let j = 1; j <= 100; j+= 5) {
    if (j % 6 === 0) {
        console.log(j + " Kelipatan 6");
    } else {
        console.log(j);
    }
}

// counter 9 dengan kelipatan 10

for (let k = 1; k <= 100; k+= 9) {
    if(k % 10 === 0) {
        console.log(k + " Kelipatan 10");
    } else {
        console.log(k);
    }
}