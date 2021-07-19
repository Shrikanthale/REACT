import React from 'react'
// declaring class

class ChangeFormat extends React.Component{ 
    constructor(props){                       // whenever class object will be created then constructor come into the picutre (props-bydefault)
        super(props)                          // inherit the all features of parent componet
        this.state = {
            play : "cricket",
            player : "11"
        }
    }
    changeplay = () => {
        this.setState({play : "Football" ,name : "ravi"})           //  it is state predefined function. it work as update the properties or add properties
    }
    changeplayer = () => {
        this.setState({player : "10"})
    }
    // render() function really similary to the main() function. its function and its predifine for us it will call by default 
    render(){ 
        return(                                             // this. - will help to access all content of header class
            <div>
                <h1> i am coatch {this.state.name} Game name is {this.state.play} </h1>             
                <h2>Number of playes {this.state.player} </h2>
                <button type="button" onClick = {this.changeplay}>Change Play</button>   
                <button type="button" onClick = {this.changeplayer}>Change Player</button>
            </div>
                                      // onClick - mention whatever done when someone click button bevhior some function excute
                                      // onChange - prefer for input tag 
        )
    }
}

export default ChangeFormat