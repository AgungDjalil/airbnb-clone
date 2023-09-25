import { createContext, useEffect, useState } from "react";
import { profile } from "../api";

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    
    useEffect(() => {
        
        if(!user) {
            profile()
                .then(({data}) => {
                        setUser(data.name)
                        console.log(user)
                    })
                .catch((err) => {
                    console.log(err)
                })
        }
    }, [])

    return (
        <UserContext.Provider value={{
            user, setUser
        }}>
            {children}
        </UserContext.Provider>
    )
}
