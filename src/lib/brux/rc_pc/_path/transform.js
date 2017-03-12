import {photo_transform} from "./transform_modules";
import Map from "collections/map";

// "reblog-button",
// "like-button"

const default_keys = [
    "type",
    "id",
    "reblog-key",
    "date-gmt"
];

const copyKeys = {
    quote:["quote-text","quote-source"],
    text:[],
    photo:["photo-caption"],
    video:[],
    audio:[],
    link:[],
    answer:[],
    conversation:[]
};

const transformKeys = {
    quote:[],
    text:[],
    photo:["photo"],
    video:[],
    audio:[],
    link:[],
    answer:[],
    conversation:[]
};

const fns = {

    ["photo"] : post => (arr=>{

        if(post.photos.length) post.photos.forEach(photo=>arr.push(photo_transform(photo)));

        else arr.push(photo_transform(post));

        return arr;

    })([]),

    // ["photo-caption"] : post => post["photo-caption"],
    //
    // ["quote-text"] : post => post["quote-text"],
    //
    // ["quote-source"] : post => post["quote-source"]

};

module.exports = post => (

    new Map([].concat(

        [].concat(default_keys,copyKeys[post.type])
        .map(key=>[key,
            post[key]
        ]),

        transformKeys[post.type]
        .map(key=>[key,
            fns[key](post)
        ])

    )).toObject()

);

// let obj = {};
// return obj;
// [].concat(
//     default_keys.map(key=>[key,post[key]]),
//     transformKeys[post.type].map(key=>[key,fns[key](post)])
// ).forEach(key_value=>{
//     let [key,value] = key_value;
//     obj[key] = value;
// });
//

// default_keys.forEach(key=>{
//     obj[key] = post[key];
// });
//
// transformKeys[post.type].forEach(key=>{
//     obj[key] = fns[key](post);
// });
