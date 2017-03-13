export default function Alloc(attr_alloc,style_alloc){

    this.attr_alloc = attr_alloc;

    this.style_alloc = style_alloc;

    this.alloc = this.alloc.bind(this);

}

Alloc.prototype.alloc = (name,attr,style) => (

    Object.assign(

        this.attr_alloc[name](attr),

        {style:this.style_alloc[name](style)}

    )

);

// export default (name,attr,style) => (
//
//     Object.assign(
//
//         attr_alloc[name](attr),
//
//         {style:style_alloc[name](style)}
//
//     )
//
// );
