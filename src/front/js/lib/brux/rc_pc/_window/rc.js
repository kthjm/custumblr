export default {

    cause : "_window",

    commands : [

        {
            condition : {

                type : "keydown",

                gentle : 40

            },

            query : [],

            business : (e,query,set,end) => {

                console.log("i keydown!!");

                console.log(e);

            }


        }

    ]

}
