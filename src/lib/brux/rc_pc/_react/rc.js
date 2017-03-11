const pop = new PopStateEvent("popstate");

export default {

    cause : "_react",

    commands : [

        {
            condition:{

                type:"didmount"

            },

            query:[],

            business:(e,query,set,send) => {

                console.log("didmount");

                window.dispatchEvent(pop);

            }
        },

        {
            condition:{

                type:"didupdate"

            },

            query:[],

            business:(e,query,set,send) => {

                console.log("no name");

            }
        }

    ]

}
