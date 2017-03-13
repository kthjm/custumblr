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

// AccentColor:"#529ECC"
// AvatarShape:"square"
// BackgroundColor:"#36465d"
// HeaderImage:"http://static.tumblr.com/cde615adb8927934b22c914cc8ec05e1/d1rkenh/7sooav1n4/tumblr_static_tumblr_static_7pcf47zlm4cgsck88oc004wgk_focused_v3.gif"
// TitleColor:"#FFFFFF"
// TitleFont:"'Gibson', sans-serif"
// TitleFontWeight:"bold"
