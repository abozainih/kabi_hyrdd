import type { AppProps } from 'next/app'
import * as React from 'react';
import UserProvider from '@/contexts/user'
import "@/styles/globals.scss"
import { appWithTranslation } from 'next-i18next'
import LangProvider from '@/contexts/lang'
function App({ Component, pageProps }: AppProps) {

  return(
        <UserProvider>
          <LangProvider>
            <Component {...pageProps} />
          </LangProvider>
        </UserProvider>
    )
  }

export default appWithTranslation(App)
