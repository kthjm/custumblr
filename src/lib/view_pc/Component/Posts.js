import React from "react";

export default p => (({posts,cq})=>(<div>

    {posts.map(post=>(

        <div {...attr("test",p)}>

            {post.id}

        </div>

    ))}

</div>))(p)

const attr = (name,{post,cq}) => Object.assign({},

    {style:style[name]},

    (()=>{switch(name){

        case "test" : return {

            ["className"] : "a_post",

            ["data-id"] : post["id"],

            ["data-reblogKey"] : post["reblog-key"],

            ["key"] : `a_post_${post.id}`,

            ["onClick"] : cq

        }

    }})()

);

const style = {

    "test":{

        padding : 30,

        fontSize : 30,

        color : "#587357"

    }

}









// className="a_post"
// data-id={post["id"]}
// data-reblogKey={post["reblog-key"]}
// key={`a_post_${post.id}`}
// onClick={cq}
