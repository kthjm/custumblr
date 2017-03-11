import React from "react";
import {render} from "react-dom";
import {device,init,cq,fin} from "./brux/br";

const assets = [];

export default function(){

    if(!assets.length) return rendering();

    Promise.all(assets.map(asset=>fetch(asset).then(res=>res.blob())))
    .then(blobs=>blobs.map(blob=>URL.createObjectURL(blob)))
    .then(brls=>rendering(brls))
    .catch(err=>console.error(err));

}

const rendering = brls => render(

    ((Root,data)=>{

        if(brls) data.brls = brls;
        return <Root data = {data} />;

    })(
        require(`./view_${device}/Root`),
        {init:init,cq:cq,fin:fin}
    ),

    document.getElementById("app")

);

















// import Root from "./lib/Root";
// ↑ここだ。この「lib」がどれになるかによって、どのRootが選ばれてどのrcsが選ばれるかが決定される。
// pc/mobileとか。
// ちょっとRootの使い回しを考えたことが無かったから距離感が掴みにくい
// でも、Rootをswitchしたら、それまでのデータが失われるから、あんまり良いことではないよね。
// 端末の種類とかでswitchするとかがラインかな。

// ココとかbrotherとかstylesとかでそれぞれに見合う粒度で各々がswitchしたらいいと思う
