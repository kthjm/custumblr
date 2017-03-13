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

                let {id} = e.target.dataset;

                console.log(clone.posts.filter(post=>post.id==id)[0]);

            }
        }

    ]

}
