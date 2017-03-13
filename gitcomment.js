const minimist = require("minimist");
const fs = require("fs");

(message=>{

    if(!message) return console.log(`set message.`);

    fs.writeFileSync("./gitcomment.txt",message);

})(minimist(process.argv).m);
