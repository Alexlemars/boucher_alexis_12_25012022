import React from 'react';
import "./linechartgraph.css"
import {
    ResponsiveContainer,
    LineChart,
    XAxis,
    YAxis,
    Tooltip,
    Line,
} from 'recharts';
import { dataAverageFormat } from '../../../API/Data/API-format/API-format-average';


function Linechartgraph({AverageSessions}) {

    const data = dataAverageFormat(AverageSessions)

    const CustomToolTip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <span className="customTooltip-content">
                    {`${payload[0].value} min`}
                </span>
            );
        }
        return null;
    };
    
    return (
        <div className="wrap">
            <span className="averageSessions-heading">
                {`Durée moyenne des sessions`}
            </span>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={data}
                    margin={{ top: -30, right: -10, left: -20, bottom: -30 }}
                >
                    <Line
                        type="monotone"
                        dataKey="sessionLength"
                        stroke="rgba(255, 255, 255, 0.6)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ stroke: '#FF0000', r: 5, strokeWidth: 0 }}
                    />
                    <XAxis
                        dataKey="firstLetterDay"
                        axisLine={false}
                        tickLine={false}
                        tick={{
                            fill: '#fff',
                            fontSize: '12',
                            dy: -35,
                            opacity: '0.7',
                            
                        }}
                    />
                    <YAxis
                        dataKey="sessionLength"
                        domain={[-40, 'dataMax + 60']}
                        hide={true}
                    />
                    <Tooltip
                        content={<CustomToolTip/>}
                        position={{ y: 120 }}
                        wrapperStyle={{
                            color: '#000',
                            background: '#fff',
                            fontSize: '8px',
                            padding: '7px',
                        }}
                        cursor={{
                            stroke: 'rgba(0, 0, 0, 0.1)',
                            strokeWidth: 62,
                            position: 'right',
                        }}
                        allowEscapeViewBox={{ x: false, y: false }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Linechartgraph;