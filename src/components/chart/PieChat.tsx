import { PieChart as PieChartCp, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { COLORS } from '../../types/types';
import { FC } from 'react';

interface Props {
    data: { name: string, value: number }[]
}

const PieChart: FC<Props> = ({ data }) => (
    <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
            <PieChartCp>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
                {/* <Legend /> */}
            </PieChartCp>
        </ResponsiveContainer>
    </div>
);

export default PieChart;
