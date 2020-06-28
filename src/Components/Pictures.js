import React from 'react'

function Pictures(props) {
    const {open} = props
    return (
        <div>
            {open && 
                (
                    <>
                    <div className="child">Cat.png</div>
                    </>
                )
            }
        </div>

    )
}

export default Pictures
