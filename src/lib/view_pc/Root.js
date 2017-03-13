import React from "react";
import brux from "brux";

export default class Root extends React.Component{

    componentWillMount(){
        console.log(this.props);
        console.log(this.props.br_init);
        this.demand = this.demand.bind(this);
        brux.on_snatch(this.demand);
        this.props.br_init(this.state);
        delete this.props.br_init;
        console.log(this.props.br_init);
    }

    componentWillUnmount(){
        brux.off_snatch(this.demand);
        brother.br_fin();
    }

    constructor(props){

        super(props);

        this.state = {

            page : 0,

            posts : [],

            post : null

        };

    }

    componentDidMount(){this.props.data.cq({type:"didmount"})}

    demand(){this.setState(brux.supply());}

    componentWillReceiveProps(nextprops){}
    shouldComponentUpdate(nextprops,nextstate){return true;}
    componentWillUpdate(nextprops,nextstate){}

    stateStructurer(){



    }

    render(){return(

        <div>hello</div>

    )}

    componentDidUpdate(preprops,prestate){this.props.data.cq({type:"didupdate"})}

}
