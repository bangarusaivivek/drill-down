import React from 'react'

function Personals(props) {
    const {open} = props
    return (
        <div>
            {open && 
                (
                    <>
                    <div className="child">MyPhoto.png</div>
                    <div className="child">Resume.pdf</div>
                    </>
                )
            }
        </div>

    )
}

export default Personals
