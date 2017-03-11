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
                .then(res=>res.json())
                .then(json=>console.log(json))
                .catch(err=>console.error(err));

            }
        }

    ]

}
