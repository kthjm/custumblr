import React from "react";
import brux from "brux";
import Hub from "./Hub";
import Alloc from "./Alloc";

const componentypes = ["Head","Post","Posts"];

const allocs = new Map(componentypes.map(type=>[type,
    new Alloc(...["attr","style"].map(as=>require(`./${type}/${as}`))).alloc
]));

export default class Root extends React.Component{

    componentWillMount(){
        this.demand = this.demand.bind(this);
        brux.on_snatch(this.demand);
        this.props.br.init(this.state);
        delete this.props.br.init;
    }

    componentWillUnmount(){
        brux.off_snatch(this.demand);
        this.props.br.fin();
    }

    constructor(props){
        super(props);
        this.state = {
            page : 0,
            posts : [],
            post : null
        };
    }

    componentDidMount(){this.props.br.cq({type:"didmount"})}

    demand(){this.setState(brux.supply());}

    componentWillReceiveProps(nextprops){}
    shouldComponentUpdate(nextprops,nextstate){return true;}
    componentWillUpdate(nextprops,nextstate){}

    propStructure(){return {

        post:(post=>{
            if(post) return true;
            else return false;
        })(this.state.post),

        Head:{
            alloc:allocs.get("Head"),
            cq:this.props.br.cq
        },

        Post:{
            alloc:allocs.get("Post"),
            post:this.state.post,
            cq:this.props.br.cq
        },

        Posts:{
            alloc:allocs.get("Posts"),
            posts:this.state.posts,
            cq:this.props.br.cq
        }

    }}

    render(){return(<div><Hub {...this.propStructure()} /></div>)}

    componentDidUpdate(preprops,prestate){this.props.br.cq({type:"didupdate"})}

}


// const allocs = (obj=>{
//
//     componentypes.forEach(type=>{
//
//         obj[type] = new Alloc(
//
//             ...["attr","style"].map(as=>require(`./${type}/${as}`))
//
//         ).alloc;
//
//     });
//
//     return obj;
//
// })({});
// const [head_alloc,post_alloc,posts_alloc] = (()=>(
//
//     ["Head","Post","Posts"]
//     .map(type=>new Alloc(
//
//     ).alloc)
//
// ))();
// require(`./${type}/attr`),
// require(`./${type}/style`)
