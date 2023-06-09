import {Row, Col, Typography, theme, Space, Grid} from 'antd';
import styles from "@/styles/Login.module.scss"
import Link from 'next/link';
import LoginForm from "./LoginForm"
import React from 'react';
import { LangContext } from '@/contexts/lang';

const {useBreakpoint} = Grid
const LoginPage = () => {
    const {xs,md,sm,xl} = useBreakpoint()
    const {t,i18n} = React.useContext(LangContext)
    return ( 
        <Row className={styles.h100} align="middle" gutter={[0,25]} justify={"space-between"}>
            <Col xs={xs?24:undefined} className={`${styles.banner} ` + (i18n.language=="ar" && styles.rotateRight)} span={12}  >
                <Space size={"small"} className={`${styles.pt2} ${styles.pb1}`} direction={"vertical"}>
                    <Typography.Title  className={styles.m0} level={1}>{t("login:hi")}</Typography.Title>
                    <Typography.Title className={styles.m0} level={1}>{t("login:welcome")}</Typography.Title>
                    <Typography.Title  className={`${styles.m0} ${styles.primaryColor}`}  level={1}>{t("login:HYRDD")}</Typography.Title>
                    <Typography.Paragraph className={styles.my1}>{t("login:noaccount")} <Link href={"#"} className={styles.primaryColor}>{t("login:register")}</Link></Typography.Paragraph>
                </Space>
            </Col>
            <Col xs={xs?24:undefined} span={12}  className={`${styles.dFlex} ${styles.alignItemsEnd} ${styles.flexDC}`}>
                <LoginForm/>
            </Col>
        </Row>
    );
}
 
export default LoginPage;