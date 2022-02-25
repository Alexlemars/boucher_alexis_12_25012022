import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
import { dataPerformanceFormat } from '../../../API/Data/API-format/API-format-performance';


function Radarchartgraph({Performance}) {

    const data = dataPerformanceFormat(Performance)
    console.log(data);
    
    return (
        <div className="wrap">
            <ResponsiveContainer width="100%" height="100%">
            <RadarChart
                data={data}
                outerRadius={window.innerWidth > 1340 ? '70%' : '60%'}
            >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis
                    dataKey="activity"
                    stroke="#fff"
                    tickLine={false}
                    tickSize={10}
                    fontSize={12}
                />
                <Radar
                    dataKey="value"
                    fill="rgb(255, 1, 1)"
                    fillOpacity={0.7}
                />
            </RadarChart>
        </ResponsiveContainer>
        </div>
    );
}

export default Radarchartgraph;