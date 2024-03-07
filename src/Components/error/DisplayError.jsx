import React, { Component } from 'react';
import Error from "./Error";
import Task2 from "../task2/Task2";

export default class DisplayError extends Component {
       constructor(){
        super()
        this.state = {
            hasError:false,
            error:undefined
        }
    }
     static getDerivedStateFromError(error){
    return{
        hasError:true,
        error:error
    }
  }

  componentDidCatch(error,errorInf){
    // console.log("error",error,errorInf)
  }
  render() {
    return (<>
       {this.state.hasError ? <Error/> : <Task2/>}
   </> )
  }
}
