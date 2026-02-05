import { useContext, useState } from "react"
import { AuthContext } from "../../auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../auth/AuthService";

export default function Login() {
    const { login } = useContext(AuthContext);
    const [form, setForm] = useState({});
    const  navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault();

        const res = await loginUser(form);
        login(res.data.token, res.data.user);
        navigate("/dashboard")
    }

    return(
        <div className="container mt-5" style={{maxWidth: "400px"}}>
            <div className="card p-4 shadow">
                <div className="card-header">
                    <h2>Login Form</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={submit}>                
                        <input placeholder="Email" type="email"
                        className="form-control"
                        onChange={(e) => setForm({...form, email: e.target.value})}
                        />
                        <br/>
                        <input placeholder="Password" type="password" 
                        className="form-control"
                        onChange={(e) => setForm({...form, password: e.target.value})}/>
                        <br/>
                        <button type="submit" className="btn btn-primary">Login</button>
                        <br/>
                        New User? <Link to="/register">Sign Up</Link>
                    
                    </form>
                </div>
                
            </div>
        </div>
        
    )
}