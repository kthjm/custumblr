export default {

    cause : "_dom",

    commands : [

        {
            condition:{

                type:"click",

                className:"a_post"

            },

            query:["posts"],

            business:(e,clone,set,send) => (({id})=>{

                history.pushState(null,null,`/post/${id}`);

                window.dispatchEvent(new PopStateEvent("popstate"));

            })(e.target.dataset)
        }

    ]

}
