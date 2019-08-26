
const balikKata = (str) => {
    let stringRev ="";
    for(let i = 0; i < str.length; i++){
        stringRev = str[i]+stringRev;
    }
    return stringRev;
}
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS

