const path = require("path");

const [front,app,js,stylus,asset] = (front=>[].concat(

    [front,path.join(process.cwd(),"app","public")],

    ["js","stylus","asset"].map(type=>path.resolve(front,type))

))(path.join(process.cwd(),"src","front"));

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {

    plugins : [

        // new HtmlWebpackPlugin(),

        new webpack.optimize.UglifyJsPlugin(),

        new webpack.DefinePlugin({

            "process.env":{NODE_ENV: JSON.stringify("production")}

        })

    ],

    module : {

        rules : [

            {

                loader : "babel-loader",

                test : /\.jsx?$/,

                include:[js],

                // exclude:[path.resolve(process.cwd(),"node_modules")],

                // include : [],
                // exclude : [],
                // enforce : "pre"/"post",

            }

        ]

    },

    entry : `${js}/index`,

    output : {

        path : `${app}/js`,

        filename : "bundle.js"

    },

    resolve : {

        modules : ["node_modules",js],

        extensions : [".js",".json",".jsx",".css"],

        alias : {}

    },

    devtool : "source-map",

    context : process.cwd(),

    target : "web"

};
