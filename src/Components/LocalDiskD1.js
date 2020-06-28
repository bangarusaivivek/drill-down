import React, { Component } from 'react'
import Personals from './Personals'
import Projects from './Projects'
import Office from './Office'

class LocalDiskD1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            personals : false,
            projects : false,
            office : false,
             
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
        const {personals,projects,office} = this.state
        // console.log(programfiles,users,windows)
        // const ele = open ? (<><div>Program Files</div>
        //                     <div>Users</div>
        //                     <div>Windows</div></>)
        //                 : <></>
        return (
            <>
                {open &&
                    (<>
                        <div id="personals" className="child" onClick={this.handleChange}>
                            Personals
                            <Personals open={personals}/>
                        </div>
                        <div id="projects" className="child" onClick={this.handleChange}>
                            Projects
                            <Projects open={projects} />
                        </div>
                        <div id="office" className="child" onClick={this.handleChange}>
                            Office
                            <Office open={office} />
                        </div>
                    </>)
                }
            </>
        )
    }
}

export default LocalDiskD1