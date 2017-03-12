const pop = new PopStateEvent("popstate");

const jsonFetch = path => (

    fetch(path)
    .then(res=>res.text())
    .then(text=>JSON.parse(text.slice(
        text.indexOf("{"),
        text.lastIndexOf(";")
    )))

)

export default {

    cause : "_path",

    commands : [

        {
            condition:{

                type:"popstate",

                path:"/"

            },

            query:[],

            business:(e,clone,set,send) => {

                console.log("/");

                Promise.all([1,2,3,4,5].map(num=>jsonFetch(`/page/${num}?format=json`)))
                .then(jsons=>console.log(jsons))
                .catch(err=>console.error(err));

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


            }
        },

        {
            condition:{

                type:"popstate",

                path:"/post/:id",

                prevent : (e,clone) => {}

            },

            query:[],

            business:(e,clone,set,send) => {

                console.log(location.pathname);

                jsonFetch(`${location.pathname}?format=json`)
                .then(json=>console.log(json))
                .catch(err=>console.error(err));

            }
        },

        {
            condition:{

                type:"popstate",

                path:"/:id",

                prevent : (e,clone) => {

                    if(location.pathname == "post"){
                        console.log("still location.");
                        return true;
                    }

                }

            },

            query:[],

            business:(e,clone,set,send) => {

                console.log(`${location.pathname} => post${location.pathname}`);

                history.replaceState(null,null,`post${location.pathname}`);

                window.dispatchEvent(pop);

            }
        }

    ]

}










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
