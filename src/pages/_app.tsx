import type { AppProps } from 'next/app'
import * as React from 'react';
import UserProvider from '@/contexts/user'
import "@/styles/globals.scss"
import { appWithTranslation } from 'next-i18next'
import LangProvider, { LangContext } from '@/contexts/lang'
import DirProvider from '@/contexts/direction';
function App({ Component, pageProps }: AppProps) {

  const {i18n} = React.useContext(LangContext)
  return(
    <DirProvider>
        <UserProvider>
          <LangProvider>
            <Component {...pageProps} />
          </LangProvider>
        </UserProvider>
    </DirProvider>
    )
  }

export default appWithTranslation(App)
