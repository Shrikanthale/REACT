
import React from 'react'
class Mounting1 extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color : "red"
        }
    }
    static getDerivedStateFromProps(props,state){
        return {color:props.color}
    }
    render(){
        return(
            <div>
                <h1> the car color is {this.state.color} And car name is {this.state.name} </h1>
            </div>
        )
    }
    componentDidMount(){
        setTimeout( () =>{  this.setState ({ name : "tata" })   },7000 )
    }
}

export default Mounting1