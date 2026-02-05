import { useContext } from "react"
import { AuthContext } from "../auth/AuthContext"

export default function Navbar() {
    const {user, logout} = useContext(AuthContext);

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
           <span className="navbar-brand">Inventory Management System</span>
           <span className="text-light" style={{marginLeft: "66%"}}>
            Welcome {user.role}
            <button className="btn btn-sm btn-outline-light ms-3"
            onClick={logout}
            >Logout</button>
           </span>
        </nav>
    )
}