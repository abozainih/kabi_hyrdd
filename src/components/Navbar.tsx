import {Button, Typography, Row, Col, Space, Dropdown, Avatar, Grid} from "antd"
import type { MenuProps } from 'antd';
import {MenuOutlined, BellOutlined, QuestionCircleOutlined, UserOutlined, DownOutlined, UpOutlined, LogoutOutlined} from  "@ant-design/icons"
import styles from "@/styles/Navbar.module.scss"
import React from 'react';
import { Usercontext } from "@/contexts/user";
import { TogglerProps } from "@/types/toggler";

const { useBreakpoint } = Grid;

const Navbar = ({setToggler}:TogglerProps) => {

    const { md, lg} = useBreakpoint();
    const [open, setOpen] = React.useState<boolean>(false);
    const {user, setUser} = React.useContext(Usercontext);
    const Signout = ()=>{
        setUser(null);
        setOpen(false);
    }
    const items: MenuProps['items'] = [
          {
            label: "1st menu item",
            key: '0',
          },
          {
            label: "2nd menu item",
            key: '1',
          },
          {
            type: 'divider',
          },
          {
            label: 'Sign out',
            icon: <LogoutOutlined />,
            danger:true,
            key: '3',
            onClick:Signout
          },
    ]

    if (!(lg||md) && user) {
        items.unshift({type:"divider"})
        items.unshift({label:`${user.firstName} ${user.lastName}`,key:'6', style:{textAlign:"center"}})
      }
    return (
        <nav className={styles.navbar}>
            <Row justify={"space-between"}>
                <Col>
                    <Space>
                        {(!(lg) && user) && <MenuOutlined onClick={()=>setToggler(true)}  style={{fontSize:"20px"}} />}
                        <Typography.Text strong className={styles.title}>HYRDD</Typography.Text>
                    </Space>
                </Col>
                <Col>
                   <Space size={!(lg||md)? "small":"middle"}>
                        <Button >
                            <Typography.Text strong>العربية</Typography.Text>
                        </Button>
                    {
                        user && 
                        <>
                            <Button type={"text"} shape={"circle"} size={"large"} icon={<BellOutlined />} />
                            <Button type={"text"} shape={"circle"} size={"large"} icon={<QuestionCircleOutlined />} />
                            <Dropdown
                            
                             onOpenChange={(open)=> setOpen(open)}
                             placement={"bottomRight"}
                             arrow={{pointAtCenter:false}}
                             trigger={['click']}
                             menu={{items}}>
                                <Space style={{cursor:"pointer"}} size={"small"}>
                                    {(lg||md) && <span>{`${user.firstName} ${user.lastName}`}</span>}
                                    <Avatar icon={<UserOutlined />} />
                                    {open ? <UpOutlined /> : <DownOutlined />}
                                </Space>
                            </Dropdown>
                        </>
                    }    
                    </Space>
                </Col>
            </Row>
        </nav>
     );
}
 
export default Navbar;