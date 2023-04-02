import {Layout, Grid, Drawer, Button, Menu, Badge, Row,Col} from "antd";
import * as React from 'react';
import styles from "@/styles/Sidebar.module.scss"
import {LeftOutlined, RightOutlined} from "@ant-design/icons"
import Nextsidebar from "./nextSidebar";
import { ItemsContext } from "@/contexts/sidebarItems";
import { TogglerProps } from "@/types/toggler";

const {useBreakpoint} = Grid
const Sidebar = ({toggler, setToggler}:TogglerProps) => {
    const [colapsed, setColapsed] = React.useState<boolean>(false)
    const [itemKey, setItemKey] = React.useState<string>("dashboard")
    const {Items, itemsWithChilds} = React.useContext(ItemsContext)
    const {lg} = useBreakpoint();
    const icon = colapsed? <Button size={"middle"} onClick={()=>setColapsed(false)} shape={"circle"} icon={<RightOutlined/>} />
                           :<Button size={"middle"}  onClick={()=>setColapsed(true)} shape={"circle"} icon={<LeftOutlined/>} />
    function onSelectItem({key}:{key:string}){
        setItemKey(key)
    }

    return ( 
        <Row>
            { (lg)?
            <>
            
                <Col>
                    <Badge offset={[-10,38]} count={icon}>
                        <Layout.Sider collapsed={colapsed} theme="light">
                            <Menu style={{ minHeight: 'calc(100vh - 70px)' }} onSelect={onSelectItem} defaultSelectedKeys={["jobs"]} className={`${styles.pt1} ${styles.borderRight}`} items={Items}></Menu>
                        </Layout.Sider>
                    </Badge>
                </Col>
                <Col>
                    <Nextsidebar itemKey={itemKey} />
                </Col>
            </>
                :
            <Drawer
                placement={"left"}
                open={toggler}
                onClose={()=>setToggler(false)}
                maskClosable
            >
                <Menu defaultSelectedKeys={["jobs"]} defaultOpenKeys={["jobs1"]}  mode="inline" items={itemsWithChilds} />
                </Drawer>
            }
        </Row>
     );

}
export default Sidebar;