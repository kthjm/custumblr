import React from "react";

import PostComponent from "./Component/Post";
import PostsComponent from "./Component/Posts";

module.exports = props => (({post,Post,Posts})=>(

    <div>

        {(()=>{

            if(post) return(

                <PostComponent {...Post} />

            );

            else return(

                <PostsComponent {...Posts} />

            );

        })()}

    </div>

))(props)
