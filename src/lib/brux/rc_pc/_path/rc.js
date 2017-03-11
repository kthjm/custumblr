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

                Promise.all(
                    [1,2,3,4,5].map(num=>fetch(`./page/${num}?format=json`).then(res=>res.text()))
                ).then(texts=>{

                    let response = texts.map(text=>JSON.parse(
                        text.slice(text.indexOf("{"),text.lastIndexOf(";"))
                    ));

                    console.log(response);

                    history.pushState(null,null,response[2].posts[0].id);

                    window.dispatchEvent(new PopStateEvent("popstate"));

                })
                .catch(err=>console.error(err));


            }
        },

        {
            condition:{

                type:"popstate",

                path:"/:post_id"

            },

            query:[],

            business:(e,clone,set,send) => {

                console.log(location.pathname);


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
