import {Button, Typography, Row, Col, Space, Dropdown, Avatar, Grid} from "antd"
import type { MenuProps } from 'antd';
import {MenuOutlined, BellOutlined, QuestionCircleOutlined, UserOutlined, DownOutlined, UpOutlined, LogoutOutlined} from  "@ant-design/icons"
import styles from "@/styles/Navbar.module.scss"
import React from 'react';
import { Usercontext } from "@/contexts/user";
import { TogglerProps } from "@/types/toggler";
import { LangContext } from "@/contexts/lang";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from 'next/image'


const { useBreakpoint } = Grid;

const Navbar = ({setToggler}:TogglerProps) => {

    const {t,i18n} = React.useContext(LangContext)
    const router = useRouter()
    const {md, lg,xs} = useBreakpoint();
    const [open, setOpen] = React.useState<boolean>(false);
    const {user, setUser} = React.useContext(Usercontext);
    const Signout = ()=>{
        setUser(null);
        setOpen(false);
    }
    const items: MenuProps['items'] = [
          {
            label: t("navbar:signout"),
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
            <Row align={"middle"} justify={"space-between"}>
                <Col className={`${styles.dFlex} ${styles.aligItemsCenter}`}>
                        {(!(lg) && user) && <MenuOutlined onClick={()=>setToggler(true)} className={`${styles.navBarIconMenu} `+(i18n.language=="en"?styles.mr1:styles.ml1)}/>}
                        <Image width={xs?90:200} height={xs?20:32} src={"/static/images/LOGO-h-01.png"} alt="HYRDD" />
                </Col>
                <Col>
                   <Space size={!(lg||md)? (xs?2:"small"):"middle"}>
                        <Link href={router.asPath} locale={i18n.language == "en"? "ar":"en"}>
                            <Button size={xs?"small":"middle"}>
                                {i18n.language == "ar"? (!xs?"English":"EN"): (!xs?"العربية":"ع")}
                            </Button>
                        </Link>
                    {
                        user && 
                        <>
                            <Button type={"text"} shape={"circle"} size={xs?"small":"large"} icon={<BellOutlined />} />
                            <Button type={"text"} shape={"circle"} size={xs?"small":"large"} icon={<QuestionCircleOutlined />} />
                            <Dropdown
                            
                             onOpenChange={(open)=> setOpen(open)}
                             placement={i18n.language=="en"?"bottomRight":"bottomLeft"}
                             arrow={{pointAtCenter:false}}
                             trigger={['click']}
                             menu={{items}}>
                                <Space className={styles.cursorPointer} size={!xs?"small":2}>
                                    {(lg||md) && <span>{`${user.firstName} ${user.lastName}`}</span>}
                                    <Avatar size={!xs?"default":"small"} icon={<UserOutlined />} />
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