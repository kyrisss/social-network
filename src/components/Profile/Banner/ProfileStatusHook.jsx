import React, { useEffect, useState } from "react";

const ProfileStatus = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activeEditMode= () => {
        setEditMode(true)
    }

    const deactiveEditMode= () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    const onChangeStatus = (e) =>{
        setStatus(e.target.value)
    }

    useEffect( () => {
        setStatus(props.status)
    }, [props.status])
    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activeEditMode} >{status || "======"}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} onBlur={deactiveEditMode} onChange={onChangeStatus} value={status} />
                </div>
            }
        </div>
    )
}



export default ProfileStatus