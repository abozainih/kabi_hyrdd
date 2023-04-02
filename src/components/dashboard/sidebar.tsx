import {Layout, Drawer, Typography, Button, Menu, Badge, Row,Col} from "antd";
import * as React from 'react';
import styles from "@/styles/Sidebar.module.scss"
import {DashboardFilled, AccountBookFilled, CrownFilled, FolderFilled, SettingFilled, LeftOutlined, RightOutlined} from "@ant-design/icons"
import Nextsidebar from "./nextSidebar";

const items = [
    {label: "Dashboard", key:"dashboard", icon: <DashboardFilled style={{fontSize:"17px"}} />, className: styles.menuItem},
    {label:"Jobs", key:"jobs", icon:<AccountBookFilled style={{fontSize:"17px"}}  />, className: styles.menuItem},
    {label:"Candidates", key:"candidates", icon:<DashboardFilled style={{fontSize:"17px"}}  />, className: styles.menuItem},
    {label:"Agencies", key:"agencies", icon:<CrownFilled style={{fontSize:"17px"}}  />, className: styles.menuItem},
    {label:"Folders", key:"folders", icon:<FolderFilled style={{fontSize:"17px"}}  />, className: styles.menuItem},
    {label:"Settings", key:"settings", icon:<SettingFilled style={{fontSize:"17px"}}  />, className: styles.menuItem}
]
const Sidebar = () => {
    const [colapsed, setColapsed] = React.useState(false)
    const [itemKey, setItemKey] = React.useState("dashboard");
    const icon = colapsed? <Button size={"middle"} onClick={()=>setColapsed(false)} shape={"circle"} icon={<RightOutlined/>} />
                           :<Button size={"middle"}  onClick={()=>setColapsed(true)} shape={"circle"} icon={<LeftOutlined/>} />
    function onSelectItem({key}:{key:string}){
        setItemKey(key)
    }
    return ( 
        <Row>
            <Col>
                <Badge offset={[-10,38]} count={icon}>
                    <Layout.Sider collapsed={colapsed} theme="light">
                        <Menu style={{ minHeight: 'calc(100vh - 70px)' }} onSelect={onSelectItem} defaultSelectedKeys={["dashboard"]} className={`${styles.pt1} ${styles.borderRight}`} items={items}></Menu>
                    </Layout.Sider>
                </Badge>
            </Col>
            <Col>
                <Nextsidebar itemKey={itemKey} />
            </Col>
            {/* <Drawer
                placement={"left"}
                open={true}
                maskClosable
            >
                <Menu style={{paddingTop:"15px"}} mode="inline" items={items} />
            </Drawer> */}
        </Row>
     );
}
 
export default Sidebar;