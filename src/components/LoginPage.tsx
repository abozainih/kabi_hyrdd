import {Row, Col, Typography, theme, Space, Grid} from 'antd';
import styles from "@/styles/Login.module.scss"
import Link from 'next/link';
import LoginForm from "./LoginForm"
import React from 'react';
import { LangContext } from '@/contexts/lang';

const {useBreakpoint} = Grid
const LoginPage = () => {
    const {xs,md,sm,xl} = useBreakpoint()
    const { token } = theme.useToken();
    const langData = React.useContext(LangContext)
    return ( 
        <Row gutter={[0,25]} justify={"space-between"}>
            <Col xl={16} lg={14} md={12} sm={24} xs={24}>
                <Space size={"small"} className={((xs||md||sm) && !xl ?styles.w100:styles.w60) +` ${styles.leadingText} ${styles.py1}`} direction={"vertical"}>
                    <Typography.Title  className={styles.m0} level={1}>{langData.t("login:hi")}</Typography.Title>
                    <Typography.Title className={styles.m0} level={1}>{langData.t("login:welcome")}</Typography.Title>
                    <Typography.Title  className={styles.m0} style={{color:token.colorPrimary}} level={1}>{langData.t("login:HYRDD")}</Typography.Title>
                    <Typography.Paragraph className={styles.mt1}>{langData.t("login:noaccount")} <Link href={"#"} style={{color:token.colorPrimary}}>{langData.t("login:register")}</Link></Typography.Paragraph>
                </Space>
            </Col>
            <Col xl={6} lg={8} md={10} sm={24} xs={24} className={`${styles.dFlex} ${styles.flexDC} ${styles.alginItemsEnd}`}>
                <LoginForm/>
            </Col>
        </Row>
    );
}
 
export default LoginPage;