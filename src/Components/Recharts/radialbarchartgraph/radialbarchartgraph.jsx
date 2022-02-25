import React from 'react';
import './radialbarchartgraph.css';
import {
    ResponsiveContainer,
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
} from 'recharts'; 


function Radialbarchartgraph({todayScore}) {


    const data = [
        {
            score: todayScore,
        },
    ];


    
    return (
        <div className="wrap">
            <div className="legend-container">
                <span className="score-heading">{`Score`}</span>
                <div className="legend-content">
                    <p className="score-number">{todayScore * 100}%</p>
                    <p className="goal-text">de votre objectif</p>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    width="100%"
                    height="100%"
                    innerRadius="71%"
                    outerRadius="90%"
                    barSize={10}
                    data={data}
                    startAngle={90}
                    endAngle={450}
                >
                    <PolarAngleAxis
                        type="number"
                        domain={[0, 1]}
                        angleAxisId={0}
                        tick={false}
                    />
                    <RadialBar
                        minAngle={15}
                        clockWise
                        dataKey="score"
                        fill="#FF0000"
                        cornerRadius={10}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
            
                
        </div>
    );
}

export default Radialbarchartgraph;