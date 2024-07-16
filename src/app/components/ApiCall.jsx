import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';

const ApiCall = ({ apiCall }) => {

    const [user, setUser] = useState("")

    return (
        <div
            style={{ background: "pink", height: "50px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <input
                onChange={(e) => setUser(e.target.value)}
                value={user}
                placeholder='Invocador + #TAG'
                style={{ height: "40px", width: "280px", marginLeft: "5px" }}>
            </input>
            <div
                onClick={() => apiCall(user)}
                style={{ width: "40px", height: "40px", marginLeft: "10px", marginRight: "10px", cursor: "pointer" }}>
                <SearchIcon style={{ fontSize: "35px" }} />
            </div>
        </div>
    )
}

export default ApiCall