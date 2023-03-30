import type { AppProps } from 'next/app'
import {ConfigProvider} from "antd"
import  "@/styles/globals.scss"
export default function App({ Component, pageProps }: AppProps) {

  return(
    <ConfigProvider theme={{
      token:{
          colorPrimary:"#7B68F6",
      },
      components:{
        Layout:{
          colorBgHeader:"#fff"
        },
        Button:{
          colorBgContainerDisabled:"#F6F4FF",
          colorBorder:"transparent"
        }
      }
    }}>
      <Component {...pageProps} />
    </ConfigProvider>
    )
  }
