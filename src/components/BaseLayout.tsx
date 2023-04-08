import Head from 'next/head'
import React from 'react'
import {Layout, Grid, ConfigProvider} from "antd"
import Navbar from "@/components/Navbar"
import styles from "@/styles/Home.module.scss"
import { Usercontext } from '@/contexts/user'
import Sidebar from './dashboard/sidebar'
import ItemsProvider from '@/contexts/sidebarItems'
import { LangContext } from '@/contexts/lang'

type BaseLayoutProp ={
    title:string,
    PageComponent:React.FC
}

const {useBreakpoint} = Grid;
const BaseLayout = ({title,PageComponent}:BaseLayoutProp) => {
    const [toggler, setToggler] = React.useState(false);
    const {i18n} = React.useContext(LangContext)
    const {lg, md} = useBreakpoint();
    const {user} = React.useContext(Usercontext)

    return (
      <ConfigProvider direction={i18n.language == "en"? "ltr":"rtl"}  theme={{
        token:{
            colorPrimary:"#7B68F6",
        },
        components:{
          Layout:{
            colorBgHeader:"#fff"
          },
          Button:{
            colorBgContainerDisabled:"#F6F4FF",
          }
        }
      }}>
        <Head>
          <title>HYRDD-{title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Layout.Header className={(user? `${styles.borderBottom} `+ styles.px1 : !lg? !md? styles.px1 :styles.px2 :  styles.px10)}>
            <Navbar toggler={toggler} setToggler={setToggler} />
          </Layout.Header>
          <Layout hasSider style={{ minHeight: 'calc(100vh - 70px)' }}>
            { user &&
              <ItemsProvider>
                  <Sidebar toggler={toggler} setToggler={setToggler} />
              </ItemsProvider>
              }
            <Layout.Content  className={user? styles.px0 : `${styles.main} ${styles.pt5} ` +  (!lg? !md? styles.px1 :styles.px2 :  styles.px10)}>
              <PageComponent />
            </Layout.Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    )
}
export default BaseLayout;