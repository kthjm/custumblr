import {defaultKeys,copyKeys,transformKeys,fns} from "./consts";

export const transform = post => new Map([].concat(

    [].concat(defaultKeys,copyKeys[post.type])
    .map(key=>{if(post[key]) return [key,post[key]]})
    .filter(arr=>arr),

    transformKeys[post.type]
    .map(key=>[key,fns[key](post)])

)).toObject()

export const jsonFetch = path => (

    fetch(path)
    .then(res=>res.text())
    .then(text=>JSON.parse(text.slice(
        text.indexOf("{"),
        text.lastIndexOf(";")
    )))

)













// module.exports = post => new Map([].concat(
//
//     [].concat(defaultKeys,copyKeys[post.type])
//     .map(key=>{if(post[key]) return [key,post[key]]})
//     .filter(arr=>arr),
//
//     transformKeys[post.type]
//     .map(key=>[key,
//         fns[key](post)
//     ])
//
// )).toObject();



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
