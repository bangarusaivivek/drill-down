import React from 'react'

function Projects(props) {
    const {open} = props
    return (
        <div>
            {open && 
                (
                    <>
                    <div className="child">Calculator Application</div>
                    <div className="child">Notes Application</div>
                    </>
                )
            }
        </div>

    )
}

export default Projects
