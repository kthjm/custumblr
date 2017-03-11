
// const [front,app,js,stylus,asset] = (front=>[].concat(
//
//     [front,path.join(process.cwd(),"docs")],
//
//     ["js","stylus","asset"].map(type=>path.resolve(front,type))
//
// ))(path.join(process.cwd(),"src"));

const path = require("path");

const src = path.join(process.cwd(),"src");
const docs = path.join(process.cwd(),"docs");

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

                include:[src],

                // exclude:[path.resolve(process.cwd(),"node_modules")],

                // include : [],
                // exclude : [],
                // enforce : "pre"/"post",

            }

        ]

    },

    entry : `${src}/index`,

    output : {

        path : docs,

        filename : "bundle.js"

    },

    resolve : {

        modules : ["node_modules",src],

        extensions : [".js",".json",".jsx",".css"],

        alias : {}

    },

    devtool : "source-map",

    context : process.cwd(),

    target : "web"

};
