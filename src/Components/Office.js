import React from 'react'

function Office(props) {
    const {open} = props
    return (
        <div>
            {open && 
                (
                    <>
                    <div className="child">Reports.docx</div>
                    </>
                )
            }
        </div>

    )
}

export default Office
