import * as React from 'react';

export const DirContext = React.createContext({} as {dir:"rtl"|"ltr", setDir:React.Dispatch<React.SetStateAction<"rtl" | "ltr">>});


const DirProvider = ({children}:{children:React.ReactNode}) => {
    const [dir, setDir] = React.useState<"rtl"|"ltr">("ltr");
    return ( 
        <DirContext.Provider value={{dir,setDir}}>
            {children}
        </DirContext.Provider>
     );
}
 
export default DirProvider