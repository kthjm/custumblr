module.exports = props => (({posts})=>(

    <div>

        {posts.map(

            post=>(

                <div>{post.id}</div>

            )

        )}

    </div>

))(props);
