function xo(str){
    let same = str.toLowerCase()
    let x = 0
    let o = 0
    for (var i=0; i<same.length; i++){
      if(same[i] === 'x'){
        x++
      } else if(same[i] === 'o'){
        o++
      } 
    }
    return x === o
  }
  

console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true
