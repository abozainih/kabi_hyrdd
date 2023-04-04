import * as React from 'react';
import styles from "@/styles/Card.module.scss"
import { Card, Button, Space, Row, Col, Typography, Divider, Grid, Dropdown } from 'antd';
import {MoreOutlined, DeleteOutlined, EditFilled, DiffOutlined} from "@ant-design/icons"
import type { MenuProps } from 'antd';
import { cardPropsTypes } from '@/types/card';
import DeleteModal from './deleteModal';

const {useBreakpoint} = Grid

const JobCard = (
    {
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
    } : cardPropsTypes
    ) => {

    const {md,xl,xs} = useBreakpoint()
    const [open,setOpen] = React.useState<boolean>(false);
    const DropdownItem: MenuProps["items"] = [
        {
            key:"1",
            label: "Request Job",
            icon:<DiffOutlined />
        },
        {
            key:"2",
            label:"Delete item",
            icon:<DeleteOutlined/>,
            danger:true,
            onClick:()=>setOpen(true)
        },
    ]
    const extras = (xs?
        <Dropdown menu={{ items:DropdownItem }} placement={"bottomRight"} trigger={['click']} arrow={{ pointAtCenter: true }}>
                        <Button icon={<MoreOutlined />}/>
                    </Dropdown>
                    :
                    <Space>
                        <Button type={"primary"}>Request Job</Button>
                        <Button icon={<MoreOutlined />}/>
                        <Button icon={<EditFilled />}/>
                        <Button onClick={()=>setOpen(true)} danger icon={<DeleteOutlined />}/>
                    </Space>)

    return ( 
        <>
        <DeleteModal id={id} deleteItem={deleteItem} open={open} setOpen={setOpen}/>
        <Card title={<><span style={{fontWeight:"normal"}}>#{id}:</span> {jobTitle}</> } extra={extras}>
            <Row>
                <Col md={24} xl={8}>
                        <Row gutter={[0,((!xl && md)|| xs)?15:10]}>
                            <Col xs={24} md={8} xl={24}>
                                <Space size={0} direction={"vertical"}>
                                    <Typography.Text strong>Requsutuin Type</Typography.Text>
                                    <Typography.Text>{reqType}</Typography.Text>
                                </Space>
                            </Col>
                            <Col xs={24} md={8} xl={24}>
                            <Space size={0} direction={"vertical"}>
                                    <Typography.Text strong className={styles.primaryColor}>Organization Structure</Typography.Text>
                                    <Typography.Text>{orgStructure}</Typography.Text>
                                </Space>
                            </Col>
                            <Col xs={24} md={8} xl={24}>
                            <Space size={0} direction={"vertical"}>
                                    <Typography.Text strong>Units</Typography.Text>
                                    <Typography.Text>{Units?.toString()}</Typography.Text>
                                </Space>
                            </Col>
                            {xl && <Divider className={styles.my1} />} 
                            <Col span={24}>
                                <Space direction={"vertical"}>
                                    <Typography.Text strong>Hiring manager</Typography.Text>
                                    <Space>
                                        {hiringManagers.map(item=>{
                                            return(

                                                <Typography.Text className={`${styles.bgSuccess} ${styles.hiringManagers}`} >{item}</Typography.Text>
                                            )
                                        })}
                                    </Space>
                                </Space>
                            </Col>
                        </Row>
                       {((md&&!xl) || xs) && <Divider className={styles.my1} />} 
                </Col>
                <Col xs={24} md={24} xl={16}>
                    <Row gutter={[0,25]}>
                        <Col style={{textAlign:((!xl && md)|| xs)?"start":"end"}} span={24}>
                            <Space size={0} direction={"vertical"}>
                                <Typography.Text>Current Requisition Status</Typography.Text>
                                <Typography.Text type={reqStatus? "success":"danger"}>{reqStatus? "Requested":"Not Requested"}</Typography.Text>
                                <Typography.Link>View Details</Typography.Link>
                            </Space>
                        </Col>
                        <Col span={24}>
                            <Row justify={((!xl && md)|| xs)?"start":"end"} gutter={[0,25]}>
                                <Col xs={24} md={7} lg={8} xl={7}>
                                    <Card bordered={false} style={{height:"100%"}} size={"small"} className={styles.card}>
                                        <Typography.Text strong>{vacanciesBudget}</Typography.Text>
                                        <Typography.Paragraph>Total Budgeted Vacancies</Typography.Paragraph>
                            
                                    </Card>
                                </Col>
                                <Col xs={24} md={7} lg={8} xl={7}>
                                    <Card bordered={false} style={{height:"100%"}} size={"small"} className={styles.card}>
                                        <Typography.Text type={"success"} strong>{vacanciesOpen}</Typography.Text>
                                        <Typography.Paragraph>Vacancies still open</Typography.Paragraph>
                                    </Card>
                                </Col>
                                <Col xs={24} md={7} lg={8} xl={7}>
                                    <Card bordered={false} style={{height:"100%"}} size={"small"} className={styles.card}>
                                    <Typography.Text type={"danger"} strong>{vacanciesField}</Typography.Text>
                                    <Typography.Paragraph>Vacancies Field</Typography.Paragraph>
                                        
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Card>
        </>
     );
}
 
export default JobCard;