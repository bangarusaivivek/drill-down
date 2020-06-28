import React, { Component } from 'react'
import ProgramFiles from './ProgramFiles'
import Users from './Users'
import Windows from './Windows'

class LocalDiskC1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            programfiles : false,
            users : false,
            windows : false,
             
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
        const {open} = this.props
        const {programfiles,users,windows} = this.state
        console.log(programfiles,users,windows)
        // const ele = open ? (<><div>Program Files</div>
        //                     <div>Users</div>
        //                     <div>Windows</div></>)
        //                 : <></>
        return (
            <>
                {open &&
                    (<>
                        <div id="programfiles" className="child" onClick={this.handleChange}>
                            Program Files
                            <ProgramFiles open={programfiles}/>
                        </div>
                        <div id="users" className="child" onClick={this.handleChange}>
                            Users
                            <Users open={users} />
                        </div>
                        <div id="windows" className="child" onClick={this.handleChange}>
                            Windows
                            <Windows open={windows} />
                        </div>
                    </>)
                }
            </>
        )
    }
}

export default LocalDiskC1
