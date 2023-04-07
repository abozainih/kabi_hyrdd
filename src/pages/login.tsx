import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import LoginPage from '@/components/LoginPage';
import { Usercontext } from '@/contexts/user';
import  Router  from 'next/router';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getStaticProps({ locale }:{locale:string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'login',
        'navbar',
      ])),
    },
  }
}
const Login = () => {
    const {user} = React.useContext(Usercontext)
    React.useEffect(() => {
        if (user) Router.push("/dashboard");
    }, [user]);
    return ( 
      !user && <BaseLayout title='Login' PageComponent={LoginPage} />
    );
}
 
export default Login;