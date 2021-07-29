
import React from 'react'
class Updating extends React.Component{
    ChangeColor = () => {
        this.setState({color:"Blue"})
    }
    constructor(props){
        super(props)
        this.state = {
            color : "red"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return {color:props.color}
    // }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(prevprop,prevstate){  //props , state
        this.color=prevstate.color
    }
    render(){
        return(
            <div>
                <h1> the car color is {this.state.color} </h1>
                <h2>the backup {this.color} </h2>
                <button type="button" onClick={this.ChangeColor}>Change color into blue</button>
            </div>
        )
    }
   
}

export default Updating