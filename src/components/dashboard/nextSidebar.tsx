import React from "react"
import {Layout, Menu} from "antd"
import styles from "@/styles/Sidebar.module.scss"
import type { MenuProps } from 'antd';
type NextsidebarProps={
    itemKey:string|"dashboard"
}
type MenuItem = {
    [key: string]: MenuProps['items']
  }
const subItems : MenuItem = {
    "dashboard": [
      { label: "dashboard1", key: "dashboard1", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "dashboard2", key: "dashboard2", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "dashboard3", key: "dashboard3", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "dashboard4", key: "dashboard4", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
    ],
    "jobs": [
      { label: "jobs1", key: "jobs1", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "jobs2", key: "jobs2", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "jobs3", key: "jobs3", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "jobs4", key: "jobs4", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
    ],
    "candidates": [
      { label: "candidates1", key: "candidates1", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "candidates2", key: "candidates2", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "candidates3", key: "candidates3", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "candidates4", key: "candidates4", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
    ],
    "agencies": [
      { label: "agencies1", key: "agencies1", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "agencies2", key: "agencies2", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "agencies3", key: "agencies3", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "agencies4", key: "agencies4", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
    ],
    "folders": [
      { label: "folders1", key: "folders1", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "folders2", key: "folders2", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "folders3", key: "folders3", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "folders4", key: "folders4", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
    ],
    "settings": [
      { label: "settings1", key: "settings1", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "settings2", key: "settings2", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "settings3", key: "settings3", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
      { label: "settings4", key: "settings4", className: styles.menuItem },
      { type: 'divider', className: "divider-item" },
    ],
  }
  
const Nextsidebar = ({itemKey} : NextsidebarProps) => {

    return ( 
        <Layout.Sider className={styles.subsidebar}  theme="light">
            <Menu items={subItems[itemKey]}></Menu>
        </Layout.Sider>
     );
}
 
export default Nextsidebar;
