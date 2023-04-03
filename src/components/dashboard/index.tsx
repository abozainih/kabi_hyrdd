import Sidebar from "./sidebar";
import {Row, Col, Space, Input, Button, Grid} from "antd";
import {SearchOutlined, ReloadOutlined,FilterOutlined, DownloadOutlined, UploadOutlined, PlusCircleFilled} from "@ant-design/icons"
import styles from "@/styles/dashboard.module.scss"
import JobCard from "./card";

const {useBreakpoint} = Grid
const Dashboard = () => {
    const {xs,xl} = useBreakpoint()
    return (
        <Row gutter={[0,10]} className={`${styles.mt1} ${styles.mx1}`}>
            <Col span={24}>
                <Row justify={"space-between"}>
                    <Col>
                        <Space>
                            <Input size={xs?"middle":"large"} placeholder="Search" />
                            <Button size={xs?"middle":"large"} className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`}  type="primary" icon={<SearchOutlined style={{fontSize:"10px"}} />} />
                            <Button size={xs?"middle":"large"} className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.secoundryButton}`} icon={<ReloadOutlined style={{fontSize:"10px"}} />} />
                            <Button size={xs?"middle":"large"} className={`${styles.ml1} ${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.secoundryButton}`} icon={<FilterOutlined />}>{xl?<span>Fillter</span>:""}</Button>
                        </Space>
                    </Col>
                    <Col>
                        <Space>
                            <Button size={xs?"middle":"large"} className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.secoundryButton}`} icon={<DownloadOutlined style={{fontSize:"10px"}} />}>{xl?"Download Template":""}</Button>
                            <Button size={xs?"middle":"large"} className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.secoundryButton}`} icon={<UploadOutlined style={{fontSize:"10px"}} />}>{xl?"Import Jobs":""}</Button>
                            <Button size={xs?"middle":"large"} type="primary"  className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`} icon={<PlusCircleFilled />}>{xl?"Add new Job":""}</Button>
                        </Space>
                    </Col>
                </Row>
            </Col>
            <Col span={24}>
                <JobCard/>
            </Col>
        </Row>
    );
}
 
export default Dashboard;