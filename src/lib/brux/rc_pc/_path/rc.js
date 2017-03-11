export default {

    cause : "_path",

    commands : [

        {
            condition:{

                path:"/"

            },

            query:[],

            business:(e,clone,set,send) => {

                console.log("/");

            }
        }

    ]

}
