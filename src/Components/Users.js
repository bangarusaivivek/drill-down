import React from 'react'

function Users(props) {
    const {open} = props
    return (
        <div>
            {open && 
                (
                    <>
                    <div className="child">Nishant</div>
                    <div className="child">Siddharth</div>
                    </>
                )
            }
        </div>

    )
}

export default Users