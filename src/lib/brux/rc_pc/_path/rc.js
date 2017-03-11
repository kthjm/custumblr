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

                fetch("./page/1000/?format=json")
                .then(res=>res.text())
                .then(text=>console.log(JSON.parse(

                    text.slice(text.indexOf("{"),text.lastIndexOf(";"))

                )))
                .catch(err=>console.error(err));

            }
        }

    ]

}
