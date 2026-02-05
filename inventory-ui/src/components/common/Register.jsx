import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../auth/AuthService";

export default function Register() {
    const [form, setForm] = useState({})
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();

    const submit = async(e) => {
        e.preventDefault();
        // console.log(form);
        if(form.password === confirm) {
            await registerUser(form);
            alert("Registration Successful");
            
        } else {
            alert("registration unsuccessful");
        }
        navigate("/login")
    }

    return (
        <div className="container mt-5" style={{maxWidth: "600px"}}>
            <div className="card p-4 shadow">
                <div className="card-header bg-primary text-light">
                    <h2>Register</h2>
                </div>
                <div className="card-body">
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <input className="form-control"
                            placeholder="First Name"
                            onChange={(e)=> setForm({...form, firstName: e.target.value})}/>
                        </div>
                         <div className="form-group" style={{ "margin-top": "3%"}}>
                            <input className="form-control"
                            placeholder="Last Name"
                            onChange={(e)=> setForm({...form, lastName: e.target.value})}/>
                        </div>
                         <div className="form-group" style={{ "margin-top": "3%"}}>
                            <input className="form-control"
                            placeholder="Address"
                            onChange={(e)=> setForm({...form, address: e.target.value})}/>
                        </div>
                         <div className="form-group" style={{ "margin-top": "3%"}}>
                            <input className="form-control"
                            placeholder="Email" type="email"
                            onChange={(e)=> setForm({...form, email: e.target.value})}/>
                        </div>
                        <div className="form-group" style={{ "margin-top": "3%"}}>
                            <input className="form-control"
                            placeholder="Password" type="password"
                            onChange={(e)=> setForm({...form, password: e.target.value})}/>
                        </div>
                        <div className="form-group" style={{ "margin-top": "3%"}}>
                            <input className="form-control"
                            placeholder="Confirm Password" type="password"
                            onChange={(e)=> setConfirm(e.target.value)}/>
                        </div>
                        <div className="form-group" style={{ marginTop: "3%"}}>
                            <button className="btn btn-success" type="submit">Register</button>
                        </div>
                    </form>

                    <p className="mt-3 text-center">
                        ALready Registered? <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}