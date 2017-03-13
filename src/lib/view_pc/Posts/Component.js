import React from "react";

import Alloc from "../Alloc";
import attr from "./attr";
import style from "./style";
const alloc = new Alloc(attr,style).alloc;

export default p => (({posts,cq})=>(<div>

    {posts.map(post=>(

        <div {...alloc("test",{cq:cq,post:post},{post:post})}>

            {post.id}

        </div>

    ))}

</div>))(p)
