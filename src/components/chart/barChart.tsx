import { FC } from 'react';
import { BarChart as BarChartCp, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const data = [
  { name: 'Enero', value: 4000 },
  { name: 'Febrero', value: 3000 },
  { name: 'Marzo', value: 2000 },
  { name: 'Abril', value: 5000 },
  { name: 'Mayo', value: 200 },
  { name: 'Junio', value: 1000 },
  { name: 'Julio', value: 2600 },
  { name: 'Agosto', value: 2300 }
];

interface Props {
  width?: number
}

const BarChart: FC<Props> = ({ width }) => (
  <BarChartCp width={width ? width-60 : 500} className='w-full' height={300} data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Bar dataKey="value" fill="#8884d8" />
  </BarChartCp>
);

export default BarChart;
