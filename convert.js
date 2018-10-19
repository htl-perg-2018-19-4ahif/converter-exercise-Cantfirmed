const convert = require('convert-units');
try{
    if(process.argv.length!=6) throw Error();
        console.log(process.argv[2] + " " + process.argv[3] + " are " + convert(process.argv[2]).from(process.argv[3]).to(process.argv[5]) + " " +  process.argv[5]);   
}catch (e){
    console.error("Invalid parameters")
}