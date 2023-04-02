import React from 'react';
import BaseLayout from '@/components/BaseLayout';
import LoginPage from '@/components/LoginPage';
import { Usercontext } from '@/contexts/user';
import  Router  from 'next/router';

const Login = () => {
    const {user} = React.useContext(Usercontext)
    React.useEffect(() => {
        if (user) Router.push("/dashboard");
    }, [user]);
    return ( 
        <BaseLayout title='Login' PageComponent={LoginPage} />
    );
}
 
export default Login;