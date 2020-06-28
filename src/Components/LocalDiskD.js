import React, { Component } from 'react'
import LocalDiskD1 from './LocalDiskD1'

class LocalDiskD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpened : false,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        // console.log("local disk c")
        this.setState(prevState => {
            return{
                isOpened : !prevState.isOpened
            }
        })
    }
    
    render() {
        const {isOpened} = this.state
        return (
            <div onClick={this.handleChange}>Local Disk D
                <LocalDiskD1 open={isOpened} />
            </div>
        )
    }
}

export default LocalDiskD
