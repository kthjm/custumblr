import React from "react";
import brux from "brux";
import Allocator from "./Allocator";

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
            cq:this.props.br.cq
        },

        Post:{
            post:this.state.post,
            cq:this.props.br.cq
        },

        Posts:{
            posts:this.state.posts,
            cq:this.props.br.cq
        }

    }}

    render(){return(<div><Allocator {...this.propsStructurer()} /></div>)}

    componentDidUpdate(preprops,prestate){this.props.br.cq({type:"didupdate"})}

}
