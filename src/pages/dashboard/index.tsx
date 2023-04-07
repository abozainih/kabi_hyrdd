import BaseLayout from "@/components/BaseLayout";
import Dashboard from "@/components/dashboard/";
import { Usercontext } from "@/contexts/user";
import Router from "next/router";
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export async function getServerSideProps({ locale }:{locale:string}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'navbar',
        'dashboard',
        'card'

      ])),
    },
  }
}
const Panel = () => {
    const { user } = React.useContext(Usercontext);    
    React.useEffect(() => {
        if (!user) Router.push("/login");
    }, [user]);

    return (
        user &&  <BaseLayout title="Dashboard" PageComponent={Dashboard} />
    )
      
      
    

}
 
export default Panel;