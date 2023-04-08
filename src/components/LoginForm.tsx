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
    const [error,setError] = React.useState<{email:boolean,password:boolean}>({email:false,password:false})
    const [form] = Form.useForm()
    const [showAlert,setShowAlert] = React.useState<boolean>(false)
    const {setUser} = React.useContext(Usercontext)

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.type == "email"?
            form.validateFields(["email"])
            .then(val=>setError(prev=>{return{password:prev.password,email:false}}))
            .catch(err=>setError(prev=>{return{password:prev.password,email:true}}))
            :
            form.validateFields(['password'])
            .then(val=>setError(prev=>{return{password:false,email:prev.email}}))
            .catch(err=>setError(prev=>{return{password:true,email:prev.email}}))

      }

    const onFinish = (values:any)=>{
        if(data.some(user => user.email == values.email && user.password == values.password))
        {
          setUser(data.filter(user=> user.email == values.email && user.password == values.password)[0]);
        }else setShowAlert(true)
    }

    const onFinishFeild = ()=>{
        form.getFieldsError(["password","email"]).forEach(item=>{
            if(item.errors.length>0){
                item.name[0]=="email"?
                    setError(prev=>{return{password:prev.password,email:true}})
                    :
                    setError(prev=>{return{password:true,email:prev.email}})
            }
        })
    }
    const validateMessages = {
        required: "Required Field",
      }
    const passwordLabel = (
        <div className={`${styles.dFlex} ${styles.justifyContentBetween}`}>
            <span className={styles.formLabel}>{langData.t("login:password")}</span>
            <Typography.Link style={{color:token.colorPrimary}}  href="#API">{langData.t("login:forgotpassword")}</Typography.Link>
        </div>
    );
    return (
        <Form
        form={form}
        name="loginForm"
        layout={"vertical"}
        size={"middle"}
        initialValues={{ remember: true }}
        validateMessages={validateMessages}
        // onValuesChange={onValuesChange}
        onFinishFailed={onFinishFeild}
        onFinish={onFinish}
        className={styles.form}
        requiredMark={false}
        >
            {
                showAlert &&
                <Form.Item>
                    <Alert message="Invalid Email/Password!" type="error" />
                </Form.Item>
            }
            <Form.Item
                label={<span className={styles.formLabel}>{langData.t("login:email")}</span>}
                name="email"
                rules={[{ required: true, type:"email"}]}
                className={styles.mb1}            >
                <Input
                 type={"email"}
                 onChange={onChange}
                //  onBlur={onBlur}
                 placeholder="you@example.com"
                 suffix={<ExclamationCircleOutlined className={error.email? styles.dFlex : styles.dNone} />}
                 />
            </Form.Item>
            <Form.Item
                label={passwordLabel}
                name="password"
                rules={[{ required: true}]}
                className={`${styles.passwordLabel} ${styles.mb1}`}
            >
                <Input
                    type="password"
                    onChange={onChange}
                    placeholder="Enter your password"
                    suffix={ <ExclamationCircleOutlined className={error.password? styles.dFlex : styles.dNone} />}
                />
            </Form.Item>
            <Form.Item className={`${styles.remember} ${styles.mb1}`}>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>{langData.t("login:remmberme")}</Checkbox>
                </Form.Item>
                <Form.Item noStyle>
                    <Link href="#" style={{color:token.colorPrimary}}>
                        {langData.t("login:resetmulti")}
                    </Link>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button style={(error.email || error.password)? {borderColor:"transparent"} : {}} disabled={(error.email || error.password)? true:false} block type="primary" htmlType="submit">
                    {langData.t("login:signin")}
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
