const path = require("path");

(fs=>{

    fs.createReadStream(path.join(process.cwd(),"src/front/index.html"))
    .pipe(fs.createWriteStream(path.join(process.cwd(),"app/public/index.html")))

})(require("fs"));
