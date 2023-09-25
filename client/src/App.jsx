import { RouterProvider } from "react-router-dom"
import { router } from "./routes"

import { UserContextProvider } from "./context/userContext"
import axios from 'axios'

export function App() {

  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  )
}

export default App
