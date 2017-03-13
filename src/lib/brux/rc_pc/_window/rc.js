export default {

    cause : "_window",

    commands : [

        {
            condition : {

                type : "keydown",

                gentle : 40

            },

            query : ["page"],

            business : (e,clone,set,end) => {

                if(e.keyCode == 78){

                    history.replaceState(null,null,`/page/${clone.page + 1}`);

                    window.dispatchEvent(new PopStateEvent("popstate"));

                }

            }


        }

    ]

}
