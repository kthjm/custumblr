import React from "react";

export default props => (({posts,cq})=>(

    <div>

        {posts.map(

            post=>(

                <div
                    className="a_post"
                    data-id={post["id"]}
                    data-reblogKey={post["reblog-key"]}
                    key={`a_post_${post.id}`}
                    onClick={cq}
                >
                    {post.id}

                </div>

            )

        )}

    </div>

))(props)
