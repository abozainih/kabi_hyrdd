import React from 'react';

type User= {
    firstName : string,
    lastName : string,
    email : string
}

type UserContext = {
    user : User | null,
    setUser : React.Dispatch<React.SetStateAction<User | null>>
}

type UserProviderChildren = {
    children:React.ReactNode
}

export const Usercontext = React.createContext({} as UserContext)

const UserProvider=({children} : UserProviderChildren)=>{

    const [user,setUser] = React.useState<User | null>(null)
    return (
        <Usercontext.Provider value={{ user, setUser }}>
            {children}
        </Usercontext.Provider>
    )
}
export default UserProvider