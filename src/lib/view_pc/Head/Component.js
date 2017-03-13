import React from "react";

import Alloc from "../Alloc";
import attr from "./attr";
import style from "./style";
const alloc = new Alloc(attr,style).alloc;

console.log(alloc);

export default p => (({cq})=>(<div>

    <div>head</div>

</div>))(p)
