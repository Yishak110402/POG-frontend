import { createContext, useState } from "react"

export const RegisterContext = createContext()

export default function RegisterProvider({children}){
    const [dialogOpen, setDialogOpen] = useState(true)

    function handleRegister(e){
        e.preventDefault()
        setDialogOpen(true)
    }
    return <RegisterContext.Provider
    value={{
        handleRegister,
        dialogOpen,
        setDialogOpen
    }}>
        {children}
    </RegisterContext.Provider>
}