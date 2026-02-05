import { useState, useContext } from "react";
import Sidebar from "./Sidebar";
import CustomerDashboard from "../dashboards/CustomerDashboard";
import Navbar from "../components/Navbar";
import { AuthContext } from "../auth/AuthContext";

export default function CustomerLayout() {
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
                        { label: "My Orders", onClick: () => setView("orders") },
                        { label: "Profile", onClick: () => setView("profile") }
                    ]}
                />

                {/* MAIN CONTENT */}
                <div className="flex-grow-1 p-4 bg-light">
                    <CustomerDashboard view={view} />
                </div>
            </div>
        </div>
    );
}
