import * as React from 'react';
import {Row, Col, Space, Input, Button, Grid,Dropdown} from "antd";
import {SearchOutlined, ReloadOutlined,FilterOutlined, MoreOutlined, DownloadOutlined, UploadOutlined, PlusCircleFilled} from "@ant-design/icons"
import styles from "@/styles/dashboard.module.scss"
import JobCard from "./card";
import type { MenuProps } from 'antd';
import data from  "@/data.json"
import { cardPropsTypes } from "@/types/card";
import CreateForm from './createForm';

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
        label:<CreateForm/>,
        key:"3",
    }
]
const Dashboard = () => {
    const [dataCard,setDataCard] = React.useState(data);
    const {xs,xl} = useBreakpoint()
    function getData(
    id:string,
    jobTitle: string,
    reqType: string,
    reqStatus:boolean,
    orgStructure : string,
    Units : string[],
    hiringManagers: string[],
    vacanciesBudget:number,
    vacanciesOpen:number,
    vacanciesField:number):cardPropsTypes {
        return     {
            id,
            jobTitle,
            reqType,
            reqStatus,
            orgStructure,
            Units,
            hiringManagers,
            vacanciesBudget,
            vacanciesOpen,
            vacanciesField
        } as cardPropsTypes
        
    }
    return (
        <Row  gutter={[0,10]} className={`${styles.my1} ${styles.mx1}`}>
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
                                <CreateForm setDataCard={setDataCard}/>
                            </Space> 
                    }
                    </Col>
                </Row>
            </Col>
            {dataCard.map(item=>{
                return (
                    <Col span={24}>
                        <JobCard {...getData(
                            item.id,
                            item.jobTitle,
                            item.reqType,
                            item.reqStatus,
                            item.orgStructure,
                            item.Units,
                            item.hiringManagers,
                            item.vacanciesBudget,
                            item.vacanciesOpen,
                            item.vacanciesField
                            )}/>
                    </Col>
                )
            })}
        </Row>
    );
}
 
export default Dashboard;