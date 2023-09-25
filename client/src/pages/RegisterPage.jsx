import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { register } from "../api"

export function RegisterPage() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    async function registerUser(ev) {

        ev.preventDefault()
        
        register({ name, email, password })
            .then(() => {

                alert('Register succes, now you can login')

            }).catch(() => {

                alert('Register failed, comeback later')

            })
    }

    return (
        <div className="grow flex items-center justify-around">
            <div className="mb-32">
                <h1 className="text-4xl text-center mb-3">Register</h1>
                <form onSubmit={registerUser} className="max-w-md mx-auto">
                    <input placeholder="username" type="text"
                        value={name}
                        onChange={event => setName(event.target.value)} 
                    />
                    <input placeholder="your@email.com" type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)} 
                    />
                    <input placeholder="password" type="password" 
                        value={password}
                        onChange={event => setPassword(event.target.value)}
                    />
                    <button className="primary mt-1">Register</button>
                    <div className="text-center text-gray-500 py-3">
                        Already a member?  
                        <Link to="/login" className="underline">Login now</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}
