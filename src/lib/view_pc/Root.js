import React from "react";
import brux from "brux";

export default class Root extends React.Component{

    componentWillMount(){
        console.log(this.props.data.init);
        this.demand = this.demand.bind(this);
        brux.on_snatch(this.demand);
        this.props.data.init(this.state);
        delete this.props.data.init;
        console.log(this.props.data.init);
    }

    componentWillUnmount(){
        brux.off_snatch(this.demand);
        brother.fin();
    }

    constructor(props){

        super(props);
        this.state = {};

    }

    componentDidMount(){

        cq({type:"didmount"});

    }

    demand(){this.setState(brux.supply());}

    componentWillReceiveProps(nextprops){}

    shouldComponentUpdate(nextprops,nextstate){return true;}

    componentWillUpdate(nextprops,nextstate){}

    stateStructurer(){}

    render(){return(

        <div>hello</div>

    )}

    componentDidUpdate(preprops,prestate){

        cq({type:"didupdate"});

    }

}
