import {transform,jsonFetch} from "./modules";

export default {

    cause : "_path",

    commands : [

        {
            condition:{
                type:"popstate",
                path:"/"
            },
            query:[],
            business:(e,clone,set,send)=>history.replaceState(null,null,"/page/1")
        },

        {

            condition:{
                type:"popstate",
                path:"/page/:num"
            },

            query:["posts","page","post"],

            business : (e,clone,set,send) => (num=>{

                console.log("/page/:num");

                if(clone.post) set("post",null);

                if(num <= clone.page) return send();

                jsonFetch(`${location.pathname}?format=json`)
                .then(json=>{
                    console.log(json);
                    json.posts.forEach(post=>clone.posts.push(transform(post)));
                    json.posts.forEach(post=>{
                        console.log(`↓${post.type}`);
                        console.log(post);
                    });
                    set("page",num);
                    send();
                }).catch(err=>console.error(err));

            })((path=>Number(
                path.slice(path.lastIndexOf("/")+1)
            ))(
                location.pathname
            ))

        },

        {

            condition:{
                type:"popstate",
                path:"/post/:id/:slug",
                // /post/148120701519/justintaco-i-dont-know-why-this-amuses-me-so
                // prevent : (e,clone) => {}
            },
            query:[],
            business : (e,clone,set,send) => (post_id=>{

                console.log("/post/:id/:slug");
                history.replaceState(null,null,post_id);

            })((p=>p.slice(
                0,p.lastIndexOf("/")
            ))(
                location.pathname
            ))

        },

        {

            condition:{
                type:"popstate",
                path:"/post/:id",
                // /post/148120701519/
                // prevent : (e,clone) => {}
            },

            query:["posts","post"],

            business : (e,clone,set,send) => (([post_id,same])=>{

                console.log("/post/:id");

                if(same){
                    console.log("same is exist");
                    console.log(same);
                    set("post",same);
                    return send();
                }

                console.log("same is not exist. so i fetch.");
                jsonFetch(`${post_id}?format=json`)
                .then(json=>{
                    console.log(json.posts[0]);
                    set("post",transform(json.posts[0]));
                    send();
                }).catch(err=>console.error(err));

            })((post_id=>[
                post_id,
                clone.posts.filter(post=>post.id==post_id.slice(post_id.lastIndexOf("/")+1))[0]
            ])(
                location.pathname
            ))

        }

    ]

}

// const transforms = {
//
//     photo : post => (
//
//         obj=>{
//
//             obj.photo = (arr=>{
//
//                 if(post.photos.length) post.photos.forEach(
//
//                     photo=>arr.push(photransform(photo))
//
//                 );
//
//                 else arr.push(photransform(photo));
//
//                 return arr;
//
//             })([]);
//
//
//
//         }
//
//     )({})
//
// };
//
// const transformers = {};
//
// const photransform = photo => (obj=>{
//
//     [
//         "photo-url-1280",
//         "height",
//         "width"
//     ].forEach(key=>{
//
//         obj[key] = photo[key];
//
//     });
//
//     return obj;
//
// })({})
//
// const post_keys = {
//
//     default : [],
//
//     photo : [],
//
// }
// const pop = new PopStateEvent("popstate");
// const post = "post";
// const hispath = (path,replace) => {
//
//     console.log(`${location.pathname} => ${path}`);
//
//     history[`${(()=>{
//         if(replace) return "replace";
//         else return "push";
//     })()}State`](null,null,path);
//
//     // setTimeout(()=>window.dispatchEvent(pop),1000);
//
// };
// Promise.all(
//     [1,2,3,4,5].map(num=>fetch(`./page/${num}?format=json`).then(res=>res.text()))
// ).then(texts=>{
//
//     let response = texts.map(text=>JSON.parse(
//         text.slice(text.indexOf("{"),text.lastIndexOf(";"))
//     ));
//
//     console.log(response);
//
//     history.pushState(null,null,response[2].posts[0].id);
//
//     window.dispatchEvent(new PopStateEvent("popstate"));
//
// })
// .catch(err=>console.error(err));
// {
//     condition:{
//
//         type:"popstate",
//         path:"/:id",
//         prevent : (e,clone) => {
//             if(location.pathname == "post"){
//                 console.log("still location.");
//                 return true;
//             }
//         }
//
//     },
//
//     query:[],
//
//     business:(e,clone,set,send) => {
//         console.log(`${location.pathname} => post${location.pathname}`);
//         history.replaceState(null,null,`post${location.pathname}`);
//         window.dispatchEvent(pop);
//     }
// }
// "http://ttttthhhhhhheemeeeee.tumblr.com"






// fetch("./page/1/?format=json")
// .then(res=>res.text())
// .then(text=>console.log(JSON.parse(
//
//     text.slice(text.indexOf("{"),text.lastIndexOf(";"))
//
// )))
// .catch(err=>console.error(err));
//
// fetch("./page/1/?format=json")
// .then(res=>res.text())
// .then(text=>console.log(JSON.parse(
//
// 	text.slice(text.indexOf("{"),text.lastIndexOf(";"))
//
// ))).catch(err=>console.error(err));
