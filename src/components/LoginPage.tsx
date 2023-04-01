import {Row, Col, Typography, theme} from 'antd';
import styles from "@/styles/Login.module.scss"
import Link from 'next/link';
import LoginForm from "./LoginForm"
import React from 'react';

const LoginPage = () => {
    const { token } = theme.useToken();
    return ( 
        <Row gutter={[0,25]} className={styles.pheader}>
            <Col xl={16} lg={14} md={12} sm={24} xs={24}>
                <Typography.Title  className={styles.m0} level={1}>Hi!</Typography.Title>
                <Typography.Title className={styles.m0} level={1}>Welcome back to</Typography.Title>
                <Typography.Title  className={styles.m0} style={{color:token.colorPrimary}} level={1}>HYRDD</Typography.Title>
                <Typography.Text className={styles.m0}>if you dont have account, you can <Link href={"#"} style={{color:token.colorPrimary}}>Register here!</Link></Typography.Text>
            </Col>
            <Col xl={8} lg={10} md={12} sm={24} xs={24} className={`${styles.dFlex} ${styles.flexDC} ${styles.alginItemsEnd}`}>
                <LoginForm/>
            </Col>
        </Row>
    );
}
 
export default LoginPage;