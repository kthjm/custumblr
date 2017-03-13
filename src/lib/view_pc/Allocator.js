import React from "react";

import HeadComponent from "./Component/Head";
import PostComponent from "./Component/Post";
import PostsComponent from "./Component/Posts";

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
