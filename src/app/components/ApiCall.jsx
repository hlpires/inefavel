import React, { useState, useEffect } from 'react'
import { ResponsiveLine } from '@nivo/line'
import Search from './Search';

const ApiCall = ({ apiCall, data }) => {

    const [user, setUser] = useState("")
    const [dataX, setDataX] = useState([
        {
            "id": "japan",
            "color": "hsl(93, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 83
                },
                {
                    "x": "helicopter",
                    "y": 225
                },
                {
                    "x": "boat",
                    "y": 21
                },
                {
                    "x": "train",
                    "y": 41
                },
                {
                    "x": "subway",
                    "y": 68
                },
                {
                    "x": "bus",
                    "y": 292
                },
                {
                    "x": "car",
                    "y": 141
                },
                {
                    "x": "moto",
                    "y": 120
                },
                {
                    "x": "bicycle",
                    "y": 248
                },
                {
                    "x": "horse",
                    "y": 154
                },
                {
                    "x": "skateboard",
                    "y": 222
                },
                {
                    "x": "others",
                    "y": 10
                }
            ]
        },
        {
            "id": "france",
            "color": "hsl(20, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 283
                },
                {
                    "x": "helicopter",
                    "y": 243
                },
                {
                    "x": "boat",
                    "y": 58
                },
                {
                    "x": "train",
                    "y": 275
                },
                {
                    "x": "subway",
                    "y": 285
                },
                {
                    "x": "bus",
                    "y": 157
                },
                {
                    "x": "car",
                    "y": 268
                },
                {
                    "x": "moto",
                    "y": 267
                },
                {
                    "x": "bicycle",
                    "y": 17
                },
                {
                    "x": "horse",
                    "y": 270
                },
                {
                    "x": "skateboard",
                    "y": 19
                },
                {
                    "x": "others",
                    "y": 170
                }
            ]
        },
        {
            "id": "us",
            "color": "hsl(47, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 75
                },
                {
                    "x": "helicopter",
                    "y": 147
                },
                {
                    "x": "boat",
                    "y": 9
                },
                {
                    "x": "train",
                    "y": 300
                },
                {
                    "x": "subway",
                    "y": 114
                },
                {
                    "x": "bus",
                    "y": 45
                },
                {
                    "x": "car",
                    "y": 126
                },
                {
                    "x": "moto",
                    "y": 6
                },
                {
                    "x": "bicycle",
                    "y": 84
                },
                {
                    "x": "horse",
                    "y": 77
                },
                {
                    "x": "skateboard",
                    "y": 298
                },
                {
                    "x": "others",
                    "y": 46
                }
            ]
        },
        {
            "id": "germany",
            "color": "hsl(17, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 126
                },
                {
                    "x": "helicopter",
                    "y": 175
                },
                {
                    "x": "boat",
                    "y": 220
                },
                {
                    "x": "train",
                    "y": 107
                },
                {
                    "x": "subway",
                    "y": 292
                },
                {
                    "x": "bus",
                    "y": 67
                },
                {
                    "x": "car",
                    "y": 95
                },
                {
                    "x": "moto",
                    "y": 216
                },
                {
                    "x": "bicycle",
                    "y": 68
                },
                {
                    "x": "horse",
                    "y": 78
                },
                {
                    "x": "skateboard",
                    "y": 264
                },
                {
                    "x": "others",
                    "y": 136
                }
            ]
        },
        {
            "id": "norway",
            "color": "hsl(166, 70%, 50%)",
            "data": [
                {
                    "x": "plane",
                    "y": 276
                },
                {
                    "x": "helicopter",
                    "y": 298
                },
                {
                    "x": "boat",
                    "y": 203
                },
                {
                    "x": "train",
                    "y": 155
                },
                {
                    "x": "subway",
                    "y": 69
                },
                {
                    "x": "bus",
                    "y": 279
                },
                {
                    "x": "car",
                    "y": 129
                },
                {
                    "x": "moto",
                    "y": 253
                },
                {
                    "x": "bicycle",
                    "y": 26
                },
                {
                    "x": "horse",
                    "y": 232
                },
                {
                    "x": "skateboard",
                    "y": 113
                },
                {
                    "x": "others",
                    "y": 4
                }
            ]
        }
    ])

    useEffect(() => {
        if (data?.length > 200) {
            let newObject = {}
            data.forEach((item) => {
                newObject = {
                    [item?.["riotIdGameName"]]: {
                        "gold": (newObject[item?.["riotIdGameName"]]?.["gold"] + item?.["challenges"]?.["goldPerMinute"] || item?.["challenges"]?.["goldPerMinute"]),
                        "name": item?.["riotIdGameName"],
                        "matches": (newObject[item?.["riotIdGameName"]]?.["matches"] + 1 || 1),
                        "minions": (newObject[item?.["riotIdGameName"]]?.["minions"] + item?.["totalMinionsKilled"] || item?.["totalMinionsKilled"]),
                        "x": item?.["riotIdGameName"],
                        "y": 10,
                    }
                }
                return newObject
            })

            let newData = Object.values(newObject).map((item) => {
                newObject = {
                    ...item,
                    "goldTotal": item["gold"],
                    "mediaGold": item["gold"] / item["matches"],
                    "mediaMinions": item["minions"] / item["matches"],
                }
                return newObject
            })

            console.log(newData)
            // setDataX(newData)
        }

    }, [data]);

    return (
        <div>
            <Search apiCall={(user) => apiCall(user)} />
            <div style={{ width: "1000px", height: "500px", position: "relative" }}>
                <h1 style={{ marginTop: "70px", marginLeft: "30px" }}>Farm por minuto</h1>
                <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                    <ResponsiveLine
                        data={dataX}
                        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{
                            type: 'linear',
                            min: 'auto',
                            max: 'auto',
                            stacked: true,
                            reverse: false
                        }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'transportation',
                            legendOffset: 36,
                            legendPosition: 'middle',
                            truncateTickAt: 0
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'count',
                            legendOffset: -40,
                            legendPosition: 'middle',
                            truncateTickAt: 0
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabel="data.yFormatted"
                        pointLabelYOffset={-12}
                        enableTouchCrosshair={true}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            </div>
        </div>
    )
}

export default ApiCall