import BaseLayout from "@/components/BaseLayout";
import Dashboard from "@/components/dashboard/";
import { Usercontext } from "@/contexts/user";
import Router from "next/router";
import React from 'react';

const Panel = () => {
    const { user } = React.useContext(Usercontext);
    
    React.useEffect(() => {
        if (!user) Router.push("/login");
    }, [user]);

    return (

        <BaseLayout title="Dashboard" PageComponent={Dashboard} />
    )

}
 
export default Panel;