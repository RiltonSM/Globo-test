import { useState, useEffect } from 'react';

//Services
import apiServerStatus from '../../services/apiServerStatus';

//Components
import Sidebar from '../../components/Sidebar';
import { Row, Container } from '../../components/Main/styles';
import LineGraphic from '../../components/LineGraphic';
import PieGraphic from '../../components/PieGraphic';

//Styles
import { 
    Content, 
    GraphicContainer, 
    GraphicTitle,
    GraphicLineContainer,
    GraphicLineTitle
} from './styles';

const Dashboard = () => {
    const [cpuData, setCpuData] = useState({
        labels: [],
        data: []
    });
    const [memoryData, setMemoryData] = useState({
        labels: [],
        data: []
    });
    const [clusterStatus, setClusterStatus] = useState({
        status: ""
    });

    useEffect(() => {
        const getCpuUsageData = async () => {
            const { data } = await apiServerStatus.get("/b1bc5162-7cf2-4599-b1f5-e3bd58fcf07f");

            setCpuData(data);
        }

        const getMemoryUsageData = async () => {
            const { data } = await apiServerStatus.get("/d23c3262-967e-4567-b7f6-2fd263748811");

            setMemoryData(data);
        }

        const getClusterStatus = async () => {
            const { data } = await apiServerStatus.get("/cab2791c-7c85-4461-b95c-86bc1a12dc72");

            setClusterStatus(data);
        }

        getCpuUsageData();
        getMemoryUsageData();
        getClusterStatus();
    }, []);

    return(
        <>
            <Row>
                <Sidebar/>
                <Container>
                    <Content>
                        <GraphicLineContainer>
                            <GraphicLineTitle>Consumo de CPU</GraphicLineTitle>
                            <LineGraphic graphic={cpuData} />
                        </GraphicLineContainer>

                        <GraphicLineContainer>
                            <GraphicLineTitle>Consumo de Memória</GraphicLineTitle>
                            <LineGraphic graphic={memoryData} />
                        </GraphicLineContainer>

                        <GraphicContainer>
                            <GraphicTitle>Status do Cluster</GraphicTitle>
                            <PieGraphic graphic={clusterStatus}/>
                        </GraphicContainer>
                    </Content>
                </Container>
            </Row>
        </>
    )
}

export default Dashboard;