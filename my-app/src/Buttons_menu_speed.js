import React, {Component} from "react";

export default class Ccomponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: "бэковское значение скорости"
        };
        this.inspeed = this.inspeed.bind(this)
        this.dicspeed = this.dicspeed.bind(this)
    }
    inspeed(){
        this.setState(state =>({
            count:state.count+1

        }));
    }
    dicspeed(){
        this.setState(state =>({
           count:state.count-1

        }));
    }
}
