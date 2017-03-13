import React from "react";

export default p => (({posts,cq})=>(<div>

    {posts.map(post=>(

        <div {...alloc("test",{cq:cq,post:post})}>

            {post.id}

        </div>

    ))}

</div>))(p)

const alloc = (name,attr,style) => Object.assign(

    attr_alloc[name](attr),

    {style:style_alloc[name](style)}

);

const attr_alloc = {

    test : ({post,cq}) => ({

        ["className"] : "a_post",

        ["data-id"] : post["id"],

        ["data-reblogKey"] : post["reblog-key"],

        ["key"] : `a_post_${post.id}`,

        ["onClick"] : cq

    })

};

const style_alloc = {

    test : ({post}) => {switch(post.type){

        case "quote":return style.test;

        default:return style.test2;

    }}

};

const style = {

    test : {

        padding : 30,

        fontSize : 30,

        color : "#587357"

    },

    test2 : {

        padding : 30,

        fontSize : 40,

        color : "#581157"

    }

};







// className="a_post"
// data-id={post["id"]}
// data-reblogKey={post["reblog-key"]}
// key={`a_post_${post.id}`}
// onClick={cq}
