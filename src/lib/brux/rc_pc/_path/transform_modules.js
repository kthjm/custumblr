export default {

    photo_transform : photo => (obj=>{

        [
            "photo-url-1280",
            "height",
            "width"

        ].forEach(key=>{

            obj[key] = photo[key];

        });

        return obj;

    })({})

}
