import React from 'react'

function ProgramFiles(props) {
    const {open} = props
    return (
        <div>
            {open && 
                (
                    <>
                    <div className="child">Windows NT</div>
                    <div className="child">Windows Mail</div>
                    <div className="child">Windows Photo Viewer</div>
                    </>
                )
            }
        </div>

    )
}

export default ProgramFiles
