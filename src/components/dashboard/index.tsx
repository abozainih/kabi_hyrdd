import * as React from 'react';
import {Row, Col, Space, Input, Button, Grid,Dropdown, AutoComplete} from "antd";
import {SearchOutlined, ReloadOutlined,FilterOutlined, MoreOutlined, DownloadOutlined, UploadOutlined, PlusCircleFilled} from "@ant-design/icons"
import styles from "@/styles/dashboard.module.scss"
import JobCard from "./card";
import type { MenuProps } from 'antd';
import data from  "@/data.json"
import { cardPropsTypes } from "@/types/card";
import CreateForm from './createForm';

const {useBreakpoint} = Grid

const Dashboard = () => {
    const [open, setOpen] = React.useState(false);
    const [dataCard,setDataCard] = React.useState(data);
    const [options, setOptions] = React.useState<{}[]>();
    const [searchValue, setSearchValue] = React.useState<string>()
    const {xs,xl} = useBreakpoint()
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
            icon:<PlusCircleFilled/>,
            onClick:()=>setOpen(true)
        },
    
    ]
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
    vacanciesField:number,
    deleteItem:(id:string)=>void
    ):cardPropsTypes {
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
            vacanciesField,
            deleteItem
        } as cardPropsTypes
        
    }

    const deleteItem =(id:string)=>{
        const newData = dataCard.filter(item=>{
            return item.id != id
        })
        setDataCard(newData)
    }
    const onSearch=(value:string)=>{
        const opt = dataCard.filter(item=>{
            return item.jobTitle.toLowerCase().includes(value.toLowerCase())
        }).reduce((arr,item)=>{
            if(!arr.some(ar=>ar.label == item.jobTitle)){
                arr.push({label:item.jobTitle,value:item.jobTitle})
            }
            return arr
        },[{label:"",value:""}]).filter(item=>item.label !="")
        setOptions(opt)
    }
    const onSelectItem = (value:string)=>{
        setSearchValue(value)
    }

    const filterData =()=>{
        const newData = dataCard.filter(item=>{
            return item.jobTitle == searchValue
        })
        setDataCard(newData)
    }

    const resetData=()=>{
        setDataCard(data)
        setSearchValue("")
    }
    const setValue=(value:string)=>{
        setSearchValue(value)
    }
    return (
        <>
            <CreateForm setOpen={setOpen} open={open} setDataCard={setDataCard}/>
            <Row  gutter={[0,10]} className={`${styles.my1} ${styles.mx1}`}>
                <Col span={24}>
                    <Row justify={"space-between"}>
                        <Col>
                            <Space>
                                <AutoComplete onChange={setValue} allowClear value={searchValue} onSearch={onSearch} onSelect={onSelectItem} options={options} filterOption={true} style={{ width: 200 }} size={xs?"middle":"large"} placeholder="Search" />
                                <Button onClick={filterData} size={xs?"middle":"large"} className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`}  type="primary" icon={<SearchOutlined style={{fontSize:"10px"}} />} />
                                <Button onClick={resetData} size={xs?"middle":"large"} className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter} ${styles.secoundryButton}`} icon={<ReloadOutlined style={{fontSize:"10px"}} />} />
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
                                    <Button  size={"large"} onClick={()=>setOpen(true)} type="primary"  className={`${styles.dFlex} ${styles.justifyContentCenter} ${styles.alignItemsCenter}`} icon={<PlusCircleFilled />}>{xl?"Add new Job":""}</Button>
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
                                item.vacanciesField,
                                deleteItem
                                )}/>
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}
 
export default Dashboard;