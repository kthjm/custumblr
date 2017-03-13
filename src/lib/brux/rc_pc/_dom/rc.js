export default {

    cause : "_dom",

    commands : [

        {
            condition:{

                type:"click",

                className:"a_post"

            },

            query:["posts"],

            business:(e,clone,set,send) => {

                console.log(e.target.dataset);

                console.log(clone);

            }
        }

    ]

}
