import React, { Component } from 'react'
import Pictures from './Pictures'
import Documents from './Documents'
import StudyMaterial from './StudyMaterial'

class LocalDiskE1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            pictures : false,
            documents : false,
            studymaterial : false,
             
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
        const {pictures,documents,studymaterial} = this.state
        // console.log(programfiles,users,windows)
        // const ele = open ? (<><div>Program Files</div>
        //                     <div>Users</div>
        //                     <div>Windows</div></>)
        //                 : <></>
        return (
            <>
                {open &&
                    (<>
                        <div id="pictures" className="child" onClick={this.handleChange}>
                            Pictures
                            <Pictures open={pictures}/>
                        </div>
                        <div id="documents" className="child" onClick={this.handleChange}>
                            Documents
                            <Documents open={documents} />
                        </div>
                        <div id="studymaterial" className="child" onClick={this.handleChange}>
                            Study Material
                            <StudyMaterial open={studymaterial} />
                        </div>
                    </>)
                }
            </>
        )
    }
}

export default LocalDiskE1