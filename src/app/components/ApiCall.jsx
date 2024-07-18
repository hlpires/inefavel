import React, { useState, useEffect } from 'react'
import { ResponsiveBar } from '@nivo/bar'
import Search from './Search';

const ApiCall = ({ apiCall, data }) => {

    const [user, setUser] = useState("")
    const [dataX, setDataX] = useState([])

    useEffect(() => {
        if (data.length > 0) {
            let newData = data.map((item) => {
                let newObject = {
                    name: item?.["challenges"]?.["riotIdGameName"],
                    goldPerMinute: item?.["challenges"]?.["goldPerMinute"]
                }
                return newObject
            })
            console.log(newData)
        }
        setDataX([
            {
                "country": "AD",
                "hot dog": 124,
            },
            {
                "country": "AC",
                "burger": 190,
            },

        ])
    }, [data]);

    return (
        <div>
            <Search apiCall={(user) => apiCall(user)} />
            <div style={{ width: "1000px", height: "500px", position: "relative" }}>
                <h1 style={{ marginTop: "70px", marginLeft: "30px" }}>Farm por minuto</h1>
                <div style={{ position: "absolute", width: "100%", height: "100%" }}>
                    <ResponsiveBar
                        data={dataX}
                        keys={[
                            'hot dog',
                            'burger',
                            'sandwich',
                            'kebab',
                            'fries',
                            'donut'
                        ]}
                        indexBy="country"
                        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                        padding={0.3}
                        valueScale={{ type: 'linear' }}
                        indexScale={{ type: 'band', round: true }}
                        colors={{ scheme: 'nivo' }}
                        defs={[
                            {
                                id: 'dots',
                                type: 'patternDots',
                                background: 'inherit',
                                color: '#38bcb2',
                                size: 4,
                                padding: 1,
                                stagger: true
                            },
                            {
                                id: 'lines',
                                type: 'patternLines',
                                background: 'inherit',
                                color: '#eed312',
                                rotation: -45,
                                lineWidth: 6,
                                spacing: 10
                            }
                        ]}
                        fill={[
                            {
                                match: {
                                    id: 'fries'
                                },
                                id: 'dots'
                            },
                            {
                                match: {
                                    id: 'sandwich'
                                },
                                id: 'lines'
                            }
                        ]}
                        borderColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'country',
                            legendPosition: 'middle',
                            legendOffset: 32,
                            truncateTickAt: 0
                        }}
                        axisLeft={{
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'food',
                            legendPosition: 'middle',
                            legendOffset: -40,
                            truncateTickAt: 0
                        }}
                        labelSkipWidth={12}
                        labelSkipHeight={12}
                        labelTextColor={{
                            from: 'color',
                            modifiers: [
                                [
                                    'darker',
                                    1.6
                                ]
                            ]
                        }}
                        legends={[
                            {
                                dataFrom: 'keys',
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 120,
                                translateY: 0,
                                itemsSpacing: 2,
                                itemWidth: 100,
                                itemHeight: 20,
                                itemDirection: 'left-to-right',
                                itemOpacity: 0.85,
                                symbolSize: 20,
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                        role="application"
                        ariaLabel="Nivo bar chart demo"
                        barAriaLabel={e => e.id + ": " + e.formattedValue + " in country: " + e.indexValue}
                    />
                </div>
            </div>
        </div>
    )
}

export default ApiCall