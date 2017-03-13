import React from "react";

export default p => (({posts,alloc,cq})=>(<div>

    {posts.map(post=>(

        <div {...alloc("test",{cq:cq,post:post},{post:post})}>

            {post.id}

        </div>

    ))}

</div>))(p)
