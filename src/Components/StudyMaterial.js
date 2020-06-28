import React from 'react'

function StudyMaterial(props) {
    const {open} = props
    return (
        <div>
            {open && 
                (
                    <>
                    <div className="child">Html.html</div>
                    <div className="child">Css.pdf</div>
                    <div className="child">Js.pdf</div>
                    </>
                )
            }
        </div>

    )
}

export default StudyMaterial
