import React, {Component} from "react";

export default class Ccomponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: "бэковское значение высоты"
        };
        this.increment = this.increment.bind(this)
        this.dicrement = this.dicrement.bind(this)
    }
    increment(){
        this.setState(state =>({
            count:state.count+1

        }));
    }
    dicrement(){
        this.setState(state =>({
           count:state.count-1

        }));
    }
}

