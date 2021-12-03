import React from 'react'
class Updating3 extends React.Component{
    changeEducation=()=>{
        this.setState({education:"BCS"})
    }
    constructor(props){
        super(props)
        this.state={
            education:"msc"
        }
    }
    // static getDerivedStateFromProps(props,state){
    //     return {education:"BCA"}
    // }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(pprop,pstate){
        this.education = pstate.education
    }
    render(){
        return(
            <div>
                <h1> name of course : {this.state.education} </h1>
                <h1> backup course is : {this.education} </h1>
                <button type="button" onClick = {this.changeEducation}>change education</button>
            </div>
        )
    }
}

export default Updating3