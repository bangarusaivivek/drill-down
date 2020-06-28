import React from 'react'

function Documents(props) {
    const {open} = props
    return (
        <div>
            {open && 
                (
                    <>
                    <div className="child">ProgressReport.docx</div>
                    <div className="child">DesignDoc.pdf</div>
                    </>
                )
            }
        </div>

    )
}

export default Documents
