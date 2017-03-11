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
                ).then(texts=>console.log(
                    texts.map(text=>JSON.parse(
                        text.slice(text.indexOf("{"),text.lastIndexOf(";"))
                    ))
                ))
                .catch(err=>console.error(err));

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

            }
        }

    ]

}
