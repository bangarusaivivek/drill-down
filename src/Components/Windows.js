import React from 'react'

function Windows(props) {
    const {open} = props
    return (
        <div>
            {open && 
                (
                    <>
                    <div className="child">Boot</div>
                    <div className="child">File Manager</div>
                    </>
                )
            }
        </div>

    )
}

export default Windows