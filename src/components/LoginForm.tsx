import {Row, Col, Button, Typography, theme, Form, Input, Checkbox, Alert} from 'antd';
import {ExclamationCircleOutlined} from  "@ant-design/icons"
import styles from "@/styles/Login.module.scss"
import React from 'react';
import data from  "../userData.json"
import Link from 'next/link';
import { Usercontext } from '@/contexts/user';
import { LangContext } from '@/contexts/lang';

const LoginForm = ()=>{
    const { token } = theme.useToken();
    const langData = React.useContext(LangContext)
    const [disabled, setDisabled] = React.useState<boolean>(false)
    const [form] = Form.useForm()
    const [showAlert,setShowAlert] = React.useState<boolean>(false)
    const {user,setUser} = React.useContext(Usercontext)
    const onValuesChange =(changedValues:any,allValues:any)=>{
        if(form.isFieldTouched("password") && form.isFieldTouched("email")){
            form.validateFields()
            .then(values=>setDisabled(false))
            .catch(error=>setDisabled(true))
        }
    }

    const onFinish = (values:any)=>{
        if(data.some(user => user.email == values.email && user.password == values.password))
        {
          setUser(data.filter(user=> user.email == values.email && user.password == values.password)[0]);
        }else setShowAlert(true)
    }

    const onFinishFeild = ()=>{
        setDisabled(true) 
    }
    const validateMessages = {
        required: "${name} is required!",
      }
    const passwordLabel = (
        <div>
            <span>{langData.t("login:password")}</span>
            <Typography.Link style={{color:token.colorPrimary}}  href="#API">{langData.t("login:forgotpassword")}</Typography.Link>
        </div>
    );
    return (
        <Form
        form={form}
        name="loginForm"
        layout={"vertical"}
        validateTrigger={"onBlur"}
        initialValues={{ remember: true }}
        validateMessages={validateMessages}
        onValuesChange={onValuesChange}
        onFinishFailed={onFinishFeild}
        onFinish={onFinish}
        className={styles.form}
        >
            {
                showAlert &&
                <Form.Item>
                    <Alert message="Invalid Email/Password!" type="error" />
                </Form.Item>
            }
            <Form.Item
                label={langData.t("login:email")}
                name="email"
                rules={[{ required: true, type:"email"}]}
            >
                <Input type={"email"} placeholder="you@example.com"  suffix={ <ExclamationCircleOutlined className={form.getFieldError('email').length>0? styles.dFlex : styles.dNone} />}/>
            </Form.Item>
            <Form.Item
                label={passwordLabel}
                name="password"
                validateTrigger={["onBlur"]}
                rules={[{ required: true}]}
                className={styles.passwordLabel}
                
            >
                <Input
                    type="password"
                    placeholder="Enter your password"

                    suffix={ <ExclamationCircleOutlined className={form.getFieldError('password').length>0? styles.dFlex : styles.dNone} />}
                />
            </Form.Item>
            <Form.Item className={styles.remember}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>{langData.t("login:remmberme")}</Checkbox>
                </Form.Item>

                <Link href="#" style={{color:token.colorPrimary}}>
                    {langData.t("login:resetmulti")}
                </Link>
            </Form.Item>

            <Form.Item>
                <Button style={disabled? {borderColor:"transparent"} : {}} disabled={disabled} block type="primary" htmlType="submit">
                    {langData.t("login:signin")}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm;