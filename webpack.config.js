const {Config,environment} = require("webpack-config");

// import Config, {enviroment} from "webpack-config";

environment.setAll({env : () => process.env.NODE_ENV});

module.exports =  new Config().extend("./wpconf/[env].config.js");
