import React from 'react'

class Mounting2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            play : "FootBall"
        }
    }
    static getDerivedStateFromProps(props,state){
        return {play:props.play}
    }
    render(){
        return(
            <div>
                <h2> {this.state.play} </h2>
                <h2> player name is : {this.state.player} </h2>
            </div>
        )
    }
    componentDidMount(){
        setTimeout( ()=> { this.setState ({ player : "Suresh Raina" }) },7000 )
    }
}
export default Mounting2