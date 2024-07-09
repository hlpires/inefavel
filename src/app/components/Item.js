import React from 'react'

const Item = () => {
    return (
        <div style={{ marginTop: "20px", marginLeft: "30px ", color: "white" }}>
            <h2>Items</h2>
            <div style={{ display: 'flex', marginTop: "15px" }}>
                <img style={{ width: "40px", height: "40px" }} src='https://cdn.mobalytics.gg/assets/lol/images/dd/game-items/1055.png?v05'></img>
                <img style={{ width: "40px", height: "40px", marginLeft: "10px" }} src='https://cdn.mobalytics.gg/assets/lol/images/dd/game-items/1055.png?v05'></img>
            </div>

        </div>
    )
}

export default Item