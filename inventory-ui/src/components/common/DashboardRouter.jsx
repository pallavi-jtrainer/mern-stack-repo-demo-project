import { useContext } from "react";
import { AuthContext } from "../../auth/AuthContext";
import AdminDashboard from "../dashboards/AdminDashboard";
import CustomerDashboard from "../dashboards/CustomerDashboard";

export default function DashboardRouter() {
    const { user } = useContext(AuthContext);
    // console.log("role: ", user)
    return user.role === "ADMIN" ? <AdminDashboard/> : <CustomerDashboard/>
}