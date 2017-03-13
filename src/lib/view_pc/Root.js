import React from "react";
import brux from "brux";
import Allocator from "./Allocator";

export default class Root extends React.Component{

    componentWillMount(){
        console.log(this.props);
        console.log(this.props.br);
        this.demand = this.demand.bind(this);
        brux.on_snatch(this.demand);
        this.props.br.init(this.state);
        delete this.props.br.init;
        console.log(this.props.br);
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

    stateStructurer(){}

    render(){return(

        <div>

            <Allocator {...this.state} />

        </div>

    )}

    componentDidUpdate(preprops,prestate){this.props.br.cq({type:"didupdate"})}

}
