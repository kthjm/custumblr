import React from "react";
import brux from "brux";
import Hub from "./Hub";
import Alloc from "./Alloc";

const [head_alloc,post_alloc,posts_alloc] = (()=>(

    ["Head","Post","Posts"]
    .map(type=>new Alloc(
        require(`./${type}/attr`),
        require(`./${type}/style`)
    ))

))();

console.log(head_alloc);
console.log(post_alloc);
console.log(posts_alloc);

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

    propsStructurer(){return {

        post : (post=>{
            if(post) return true;
            else return false;
        })(this.state.post),

        Head:{
            alloc:head_alloc,
            cq:this.props.br.cq
        },

        Post:{
            alloc:post_alloc,
            post:this.state.post,
            cq:this.props.br.cq
        },

        Posts:{
            alloc:posts_alloc,
            posts:this.state.posts,
            cq:this.props.br.cq
        }

    }}

    render(){return(<div><Hub {...this.propsStructurer()} /></div>)}

    componentDidUpdate(preprops,prestate){this.props.br.cq({type:"didupdate"})}

}
