import React from "react";

// import Post from "./Component/Post";
// import Posts from "./Component/Posts";

const Post = require("./Component/Post");
const Posts = require("./Component/Posts");

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
