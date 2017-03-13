 function Alloc(attr_alloc,style_alloc){

    this.attr_alloc = attr_alloc;

    this.style_alloc = style_alloc;

    this.alloc = this.alloc.bind(this);

}

Alloc.prototype.alloc = function(name,attr,style){

    return Object.assign(

        this.attr_alloc[name](attr),

        {style:this.style_alloc[name](style)}

    )

};

module.exports = Alloc;
