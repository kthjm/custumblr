const jsonFetch = path => (

    fetch(path)
    .then(res=>res.text())
    .then(text=>JSON.parse(text.slice(
        text.indexOf("{"),
        text.lastIndexOf(";")
    )))

);

export default {

    cause : "_path",

    commands : [

        {
            condition:{
                type:"popstate",
                path:"/"
            },

            query:[],

            business:(e,clone,set,send) => history.replaceState(null,null,"/page/1")

        },

        {
            condition:{
                type:"popstate",
                path:"/page/:num"
            },

            query:["posts"],

            business:(e,clone,set,send) => {

                console.log("/page/:num");

                jsonFetch(`${location.pathname}?format=json`)
                .then(json=>{
                    json.posts.forEach(post=>clone.posts.push(post))
                    send();
                }).catch(err=>console.error(err));

            }
        },

        {
            condition:{

                type:"popstate",
                path:"/post/:id/:summary",
                // prevent : (e,clone) => {}

            },

            query:["post"],

            business:(e,clone,set,send) => {

                console.log("/post/:id/:summary");

                (post_id=>(

                    jsonFetch(`${post_id}?format=json`)
                    .then(json=>{
                        set("post",json.posts[0]);
                        send();
                    }).catch(err=>console.error(err))

                ))(
                    (p=>p.slice(0,p.lastIndexOf("/")))
                    (location.pathname)
                );
                // /post/148120701519/justintaco-i-dont-know-why-this-amuses-me-so

            }
        },

    ]

}

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
