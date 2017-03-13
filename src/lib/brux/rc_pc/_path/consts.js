export const defaultKeys = [
    "type",
    "id",
    "reblog-key",
    "date-gmt",
    "tags"
];

export const copyKeys = {
    quote:["quote-text","quote-source"],
    text:[],
    photo:["photo-caption"],
    video:["video-player-500","video-caption"],
    audio:["audio-player"],
    link:["link-text","link-url"],
    answer:[],
    conversation:["conversation-text","conversation-title"],
    regular:["regular-body","regular-title"]
};

export const transformKeys = {
    quote:[],
    text:[],
    photo:["photo"],
    video:[],
    audio:[],
    link:[],
    answer:[],
    conversation:[],
    regular:[]
};

export const fns = {

    ["photo"] : post => (arr=>{

        if(post.photos.length) post.photos.forEach(photo=>arr.push(photo_transform(photo)));

        else arr.push(photo_transform(post));

        return arr;

    })([]),

};

const photo_transform = photo => (obj=>{

    [
        "photo-url-1280",
        "photo-url-500",
        "height",
        "width"

    ].forEach(key=>{

        obj[key] = photo[key];

    });

    return obj;

})({});
