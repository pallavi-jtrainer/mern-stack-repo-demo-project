import { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import AdminDashboard from "../dashboards/AdminDashboard";
import Navbar from "../components/Navbar";
import { AuthContext } from "../auth/AuthContext";

export default function AdminLayout() {
    const [view, setView] = useState("products");
    const { logout } = useContext(AuthContext);

    return (
        <div className="vh-100 d-flex flex-column">
            {/* TOP NAVBAR */}
            <Navbar />

            <div className="d-flex flex-grow-1">
                {/* LEFT SIDEBAR */}
                <Sidebar
                    onLogout={logout}
                    links={[
                        { label: "Products", onClick: () => setView("products") },
                        // { label: "Orders", onClick: () => setView("orders") },
                        // { label: "Users", onClick: () => setView("users") }
                    ]}
                />

                {/* MAIN CONTENT */}
                <div className="flex-grow-1 p-4 bg-light">
                    <AdminDashboard view={view} />
                </div>
            </div>
        </div>
    );
}