import React from 'react';
import { Line, LineChart } from 'recharts';


const Chart = () => {
    const data = [
        { name: 'Page A', uv: 400, pv: 2100, amt: 2400 },
        { name: 'Page B', uv: 500, pv: 1200, amt: 2400 },
        { name: 'Page C', uv: 300, pv: 1400, amt: 2400 },
        { name: 'Page D', uv: 600, pv: 2400, amt: 2400 },
        
    ];
    return (
        <div>
            <LineChart width={400} height={400} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            </LineChart>

        </div>
    );
};

export default Chart;