export default {

    test : ({post,cq}) => ({

        ["className"] : "a_post",
        ["data-id"] : post["id"],
        ["data-reblogKey"] : post["reblog-key"],
        ["key"] : `a_post_${post.id}`,
        ["onClick"] : cq

    })

};
