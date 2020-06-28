import React, { Component } from 'react'
import LocalDiskC1 from './LocalDiskC1'
import LocalDiskD1 from './LocalDiskD1'
import LocalDiskE1 from './LocalDiskE1'

class Data extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            localdiskc : false,
            localdiskd : false,
            localdiske : false,
             
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const {id} = event.target
        console.log(id)
        this.setState(prevState => {
            // console.log(prevState[this.state.programfiles])
            return {
                [id] : !prevState[id]
            }
        })

    }
    
    render() {
        // const {open} = this.props
        const {localdiskc,localdiskd,localdiske} = this.state
        // console.log(programfiles,users,windows)
        // const ele = open ? (<><div>Program Files</div>
        //                     <div>Users</div>
        //                     <div>Windows</div></>)
        //                 : <></>
        return (
            <>
                
                
                <div id="localdiskc" className="main" onClick={this.handleChange}>
                    Local Disk (:C)
                    <LocalDiskC1 open={localdiskc}/>
                </div>
                <div id="localdiskd" className="main" onClick={this.handleChange}>
                    Local Disk (:D)
                    <LocalDiskD1 open={localdiskd} />
                </div>
                <div id="localdiske" className="main" onClick={this.handleChange}>
                    Local Disk (:E)
                    <LocalDiskE1 open={localdiske} />
                </div>
            </>
                
        )
    }
}

export default Data
