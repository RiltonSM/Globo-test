import { useState, useEffect } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, TooltipProps } from 'recharts';

//Assets
import colors from '../../assets/css/colors'

//Interfaces
import { LineGraphicProps, DataInterface } from './interfaces';

const LineGraphic = ({ graphic }: LineGraphicProps) => {
    const [data, setData] = useState<Array<DataInterface>>([]);

    useEffect(() => {
        const generateDataArray = () => {
            console.log(graphic);
            const dataFormated = graphic.data.map((item, index) => {
                return {
                    label: graphic.labels[index],
                    consumo: item
                }
            });

            setData(dataFormated);
        }

        generateDataArray();
    }, [graphic]);

    return(
        <ResponsiveContainer>
            <LineChart
                data={data}
                margin={{ top: 20, right: 0, bottom: 20, left: 0 }}
                syncId="test"
            >
                <XAxis dataKey="label" axisLine={{ stroke: 'red' }} />
                <YAxis domain={[0.01, 'auto']} ticks={[0, 50, 100]} />
                <Tooltip />
                <Line type='monotone' dataKey='consumo' stroke={colors.primary} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineGraphic;