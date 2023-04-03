import React from "react"
import {Layout, Menu} from "antd"
import styles from "@/styles/Sidebar.module.scss"
import type { MenuProps } from 'antd';
import { ItemsContext } from "@/contexts/sidebarItems";
type NextsidebarProps={
    itemKey:string|"dashboard"
}  
const Nextsidebar = ({itemKey} : NextsidebarProps) => {
    const {subItems} = React.useContext(ItemsContext)
    return ( 
        <Layout.Sider className={styles.subsidebar}  theme="light">
            <Menu defaultSelectedKeys={["jobs1"]} items={subItems[itemKey]}></Menu>
        </Layout.Sider>
     );
}
 
export default Nextsidebar;
