import { ResponsiveContainer, PieChart, Pie} from 'recharts';

import { PieGraphicProps } from './interfaces';

const PieGraphic = ({ graphic }: PieGraphicProps) => {
    const data01 = [
        { name: graphic.status, value: 100}
    ]
    
    return (
        <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data01}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill={data01[0].name}
                />
            </PieChart>
        </ResponsiveContainer>
      );
}

export default PieGraphic;