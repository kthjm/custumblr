import React from "react";

import Posts from "./Component/Posts";
import Post from "./Component/Post";

module.exports = props => (({post,Post,Posts})=>(

    <div>

        {(()=>{

            console.log(post);
            console.log(Post);
            console.log(Posts);

            if(post) return <Post {...Post} />;

            else return <Posts {...Posts} />;

        })()}

    </div>

))(props)
