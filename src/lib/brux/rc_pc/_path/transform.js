import {photo_transform} from "./transform_modules";

const defaultKeys = [
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
    conversation:[],
    regular:[]
};

const transformKeys = {
    quote:[],
    text:[],
    photo:["photo"],
    video:[],
    audio:[],
    link:[],
    answer:[],
    conversation:[],
    regular:[]
};

const fns = {

    ["photo"] : post => (arr=>{

        if(post.photos.length) post.photos.forEach(photo=>arr.push(photo_transform(photo)));

        else arr.push(photo_transform(post));

        return arr;

    })([]),

};

module.exports = post => new Map([].concat(

    [].concat(defaultKeys,copyKeys[post.type])
    .map(key=>[key,
        post[key]
    ]),

    transformKeys[post.type]
    .map(key=>[key,
        fns[key](post)
    ])

)).toObject();



// import Map from "collections/map";
// "reblog-button",
// "like-button"
















// let obj = {};
// return obj;
// [].concat(
//     defaultKeys.map(key=>[key,post[key]]),
//     transformKeys[post.type].map(key=>[key,fns[key](post)])
// ).forEach(key_value=>{
//     let [key,value] = key_value;
//     obj[key] = value;
// });
//

// defaultKeys.forEach(key=>{
//     obj[key] = post[key];
// });
//
// transformKeys[post.type].forEach(key=>{
//     obj[key] = fns[key](post);
// });
