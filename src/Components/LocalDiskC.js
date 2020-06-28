import React, { Component } from 'react'
import LocalDiskC1 from './LocalDiskC1'

class LocalDiskC extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isOpened : false,
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e){
        console.log(e.target)
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
        // console.log(isOpened)
        return (
            <>
                <div onClick={this.handleChange}>Local Disk C
                    <LocalDiskC1 open={isOpened}/>
                </div>
            </>
        )
    }
}

export default LocalDiskC
