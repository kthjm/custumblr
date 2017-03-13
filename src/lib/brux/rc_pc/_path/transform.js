import {photo_transform} from "./transform_modules";

const defaultKeys = [
    "type",
    "id",
    "reblog-key",
    "date-gmt",
    "tags"
];

const copyKeys = {
    quote:["quote-text","quote-source"],
    text:[],
    photo:["photo-caption"],
    video:["video-player-500","video-caption"],
    audio:["audio-player"],
    link:["link-text","link-url"],
    answer:[],
    conversation:["conversation-text","conversation-title"],
    regular:["regular-body","regular-title"]
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
    .map(key=>{if(post[key]) return [key,
        post[key]
    ]}).filter(arr=>arr),

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
