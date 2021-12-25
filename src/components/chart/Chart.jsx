import "./chart.scss"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function Chart({data,title,dataKey,height,type}) {
    
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
  
            <ResponsiveContainer width="100%" height={height}>
        <LineChart  data={data}>
        <XAxis dataKey="name" stroke='#5550bd' />
        <YAxis />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

    
        </div>
    )
}
