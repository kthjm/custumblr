import React from "react";

import HeadComponent from "./Head/Component";
import PostComponent from "./Post/Component";
import PostsComponent from "./Posts/Component";

export default p => (({post,Post,Posts,Head})=>(<div>


            <HeadComponent {...Head} />

    {(()=>{

        if(post) return(

            <PostComponent {...Post} />

        );

        else return(

            <PostsComponent {...Posts} />

        );

    })()}

</div>))(p)
