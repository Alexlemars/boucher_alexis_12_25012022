import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    ResponsiveContainer,
} from 'recharts';
import { dataPerformanceFormat } from '../../../API/Data/API-format/API-format-performance';
import PropTypes from 'prop-types';

/**
 * RadarChartGraph with Recharts contain the array's data
 * @param {array} userPerformance - value & kind.
 * @returns {ReactElement} RadarChart
 */

function Radarchartgraph({Performance}) {

     // Format the data'userPerformance for the requested format's design

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
Radarchartgraph.propTypes = {
    userPerformance: PropTypes.array,
};

export default Radarchartgraph;