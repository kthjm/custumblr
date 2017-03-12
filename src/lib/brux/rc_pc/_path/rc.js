const pop = new PopStateEvent("popstate");
// const post = "post";
const hispath = (path,replace) => {

    history[`${(()=>{
        if(replace) return "replace";
        else return "push";
    })()}State`](null,null,path);

    window.dispatchEvent(pop);

};

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

            query:["page"],

            business:(e,clone,set,send) => {

                // Promise.all([1,2,3,4,5].map(num=>jsonFetch(`/page/${num}?format=json`)))
                // .then(jsons=>console.log(jsons))
                // .catch(err=>console.error(err));

                hispath("/page/1",true);

            }
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
                    console.log(json);
                    console.log(clone);
                    clone.posts.concat(json.posts);
                    console.log(clone);
                    send();
                })
                .catch(err=>console.error(err));

                // Promise.all([1,2,3,4,5].map(num=>jsonFetch(`/page/${num}?format=json`)))
                // .then(jsons=>console.log(jsons))
                // .catch(err=>console.error(err));

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

                console.log(location.pathname);

                let post_id = (p=>(
                    p.slice(0,p.lastIndexOf("/"))
                ))(location.pathname);

                console.log(`${post_id}?format=json`);

                jsonFetch(`${post_id}?format=json`)
                .then(json=>{
                    console.log(clone);
                    clone.post = Object.assign({},json.posts[0]);
                    console.log(clone);
                    send();
                })
                .catch(err=>console.error(err));

            }
        },

    ]

}


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
// "http://ttttthhhhhhheemeeeee.tumblr.com/post/148120701519/justintaco-i-dont-know-why-this-amuses-me-so"






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
