import React from 'react'

class ChangeSet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            color : "green",
            model : "r25"
        }
    }
    changeColor = () => {
        this.setState({color:"RED"})
    }
    changeModel = () => {
        this.setState({model:"p34"})
    }
    render(){
        return(
            <div>
                <h1>color is {this.state.color}  </h1>
                <h1>model is {this.state.model} </h1>
                <button type="button" onClick = {this.changeColor}>Change Color</button>
                <button type="button" onClick = {this.changeModel}>Change Model</button>
            </div>
        )
    }
}

export default ChangeSet