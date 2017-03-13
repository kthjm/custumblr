export default {

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
