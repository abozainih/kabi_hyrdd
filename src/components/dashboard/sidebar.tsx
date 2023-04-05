import {Layout, Grid, Drawer, Button, Menu, Badge, Row,Col} from "antd";
import * as React from 'react';
import styles from "@/styles/Sidebar.module.scss"
import {LeftOutlined, RightOutlined} from "@ant-design/icons"
import Nextsidebar from "./nextSidebar";
import { ItemsContext } from "@/contexts/sidebarItems";
import { TogglerProps } from "@/types/toggler";
import { DirContext } from "@/contexts/direction";

const {useBreakpoint} = Grid
const Sidebar = ({toggler, setToggler}:TogglerProps) => {
    const {dir} = React.useContext(DirContext)
    const [colapsed, setColapsed] = React.useState<boolean>(false)
    const [itemKey, setItemKey] = React.useState<string>("jobs")
    const {Items, itemsWithChilds} = React.useContext(ItemsContext)
    const {lg,xl} = useBreakpoint();
    const icon = colapsed? dir == "ltr"?<Button size={"middle"} onClick={()=>setColapsed(false)} shape={"circle"} icon={<RightOutlined/>} />:<Button size={"middle"}  onClick={()=>setColapsed(false)} shape={"circle"} icon={<LeftOutlined/>} />
                           : dir=="ltr"?<Button size={"middle"}  onClick={()=>setColapsed(true)} shape={"circle"} icon={<LeftOutlined/>} />: <Button size={"middle"}  onClick={()=>setColapsed(true)} shape={"circle"} icon={<RightOutlined/>} />
    function onSelectItem({key}:{key:string}){
        setItemKey(key)
    }
    return ( 
        <Row gutter={[10,0]}>
            { (lg)?
            <>
            
                <Col>
                    <Badge className={styles.h100} offset={[dir=="ltr"?-10:10,38]} count={icon}>
                        <Layout.Sider className={`${styles.h100} ${styles.borderRight}`} collapsed={colapsed} theme="light">
                            <Menu style={{ minHeight: 'calc(100vh - 70px)' }} onSelect={onSelectItem} defaultSelectedKeys={["jobs"]} className={`${styles.pt1}`} items={Items}></Menu>
                        </Layout.Sider>
                    </Badge>
                </Col>
                <Col  className={`${styles.mt1}`}>
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