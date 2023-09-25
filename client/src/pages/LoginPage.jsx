import { useContext, useState } from "react"
import { Link, Navigate } from "react-router-dom"

import { UserContext } from "../context/userContext"
import { login } from "../api"

export function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)

    const { setUser } = useContext(UserContext)

    function userLogin(event) {   
        event.preventDefault()

        login({ email, password })
            .then((res) => {
                alert('Login successful')
                setUser(res.data)
                setRedirect(true)

            }).catch((err) => {
                alert('Login failed')
            })       
    }

    if(redirect) 
        return <Navigate to={'/'} />;

    return (
        <div className="grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-3">Login</h1>
                <form onSubmit={userLogin} className="max-w-md mx-auto">
                    <input placeholder="your@email.com" type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)} 
                    />
                    <input placeholder="password" type="password"
                        value={password}
                        onChange={event => setPassword(event.target.value)} 
                    />
                    <button className="primary mt-1">Login</button>
                    <div className="text-center text-gray-500 py-3">
                        Don't have account yet?  
                        <Link to="/register" className="underline"> Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}