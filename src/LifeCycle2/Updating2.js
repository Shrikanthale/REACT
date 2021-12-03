import React from 'react'

class Updating2 extends React.Component{
    changePlay = () => {
        this.setState({play : "table tennis"})
    }
    constructor(props){
        super(props)
        this.state={
            play : "FootBall"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return {play:props.play}
    // }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(pprop,pstate){
        this.play = pstate.play
    }
    render(){
        return(
            <div>
                <h2> {this.state.play} </h2>
                <h2> for Backup {this.play} </h2>
                <h2> player name is : {this.state.player} </h2>
                <button type="button" onClick = {this.changePlay}>CHANGE PLAY</button>
            </div>
        )
    }
   
}
export default Updating2