let num = 10;
let unit1 = "m";
const to = "to";
let unit2 = "mm";

var convert = require('convert-units');

if(process.argv.length<6){
    
}

console.log(convert(num).from(unit1).to(unit2));

