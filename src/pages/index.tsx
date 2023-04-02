import React from 'react'
import { Usercontext } from '@/contexts/user'
import Router from 'next/router'

export default function Home() {
  const {user} = React.useContext(Usercontext)
  React.useEffect(()=>{
    user ? Router.push("/dashboard") : Router.push("/login")
  })
  return;
}
