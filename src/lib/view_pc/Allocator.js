import React from "react";

import Posts from "./Component/Posts";
import Post from "./Component/Post";

module.exports = props => (({page,posts,post})=>(

    <div>

        {(()=>{

            if(post) return <Post {...post} />

            else return <Posts posts={posts} />

        })()}

    </div>

))(props);
