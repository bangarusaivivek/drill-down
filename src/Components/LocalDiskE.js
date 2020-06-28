import React, { Component } from 'react'
import LocalDiskE1 from './LocalDiskE1'

class LocalDiskE extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpened : false,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        // console.log("local disk c")
        // e.stopPropagation()
        this.setState(prevState => {
            return{
                isOpened : !prevState.isOpened
            }
        })
    }
    
    render() {
        const {isOpened} = this.state
        return (
            <div onClick={this.handleChange}>Local Disk E
                <LocalDiskE1 open={isOpened} />
            </div>
        )
    }
}

export default LocalDiskE
