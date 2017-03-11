const path = require("path");
const Koa = require("koa");

(koa=>{

    koa.use(require("koa-static")(path.resolve(__dirname,"public")));

    return koa;

})(

    new Koa()

).listen(process.env.PORT || 7000);
