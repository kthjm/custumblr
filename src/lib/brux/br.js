import {Brother} from "brux";

const device = (user=>{
    if(user.indexOf("mobile") != -1) return "mobile";
    else return "pc";
})(navigator.userAgent.toLowerCase());


export default (br=>{

    br.device = device;

    ["popstate","keydown"].forEach(event=>window.addEventListener(event,br.cq));

    console.log(br);

    return br;

})(new Brother(require(`./rc_${device}/rcs`)));













// import rcs from "./rcs";

// console.log(rcs);

// const devices = ["pc","mobile"];
