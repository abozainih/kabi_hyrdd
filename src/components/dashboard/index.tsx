import Sidebar from "./sidebar";
import {Row, Col, Space, Input, Button, Grid,Dropdown} from "antd";
import {SearchOutlined, ReloadOutlined,FilterOutlined, MoreOutlined, DownloadOutlined, UploadOutlined, PlusCircleFilled} from "@ant-design/icons"
import styles from "@/styles/dashboard.module.scss"
import JobCard from "./card";
import type { MenuProps } from 'antd';
const {useBreakpoint} = Grid

const Items: MenuProps["items"] = [
    {
        label:"Download Template",
        key:"1",
        icon:<DownloadOutlined/>
    },
    {
        label:"Import Jobs",
        key:"2",
        icon:<UploadOutlined/>
    },
    {
        label:"Add new Job",
        key:"3",
        icon:<PlusCircleFilled/>
    }
]
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
                            <Button size={xs?"middle":"large"} className={(xs?` `:`${styles.ml1} `)+ `${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.secoundryButton} `} icon={<FilterOutlined />}>{xl?<span>Fillter</span>:""}</Button>
                        </Space>
                    </Col>
                    <Col>
                    {
                        xs?
                            <Dropdown menu={{ items:Items }} placement={"bottomRight"} trigger={['click']} arrow={{ pointAtCenter: true }}>
                                <Button className={styles.secoundryButton} icon={<MoreOutlined />}/>
                            </Dropdown>
                        :
                            <Space>
                                <Button size={"large"} className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.secoundryButton}`} icon={<DownloadOutlined style={{fontSize:"10px"}} />}>{xl?"Download Template":""}</Button>
                                <Button size={"large"} className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.secoundryButton}`} icon={<UploadOutlined style={{fontSize:"10px"}} />}>{xl?"Import Jobs":""}</Button>
                                <Button size={"large"} type="primary"  className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`} icon={<PlusCircleFilled />}>{xl?"Add new Job":""}</Button>
                            </Space> 
                    }
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