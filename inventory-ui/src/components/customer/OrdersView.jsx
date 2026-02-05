import { useEffect, useState, useContext } from "react";
import api from "../api/api";
import { AuthContext } from "../context/AuthContext";

export default function OrdersView() {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (!user?._id) return;

        api
            .get(`/orders/customer/${user._id}`)
            .then((res) => setOrders(res.data))
            .catch((err) => {
                console.error("Failed to load orders", err);
            });
    }, [user]);

    if (!orders.length) {
        return <p className="text-muted">No orders found.</p>;
    }

    return (
        <table className="table table-bordered mt-3">
            <thead className="table-dark">
                <tr>
                    <th>Order ID</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Status</th>
                    <th>Created At</th>
                </tr>
            </thead>

            <tbody>
                {orders.map((o) => (
                    <tr key={o._id}>
                        <td>{o._id}</td>
                        <td>{o.productId}</td>
                        <td>{o.quantity}</td>
                        <td>₹{o.totalAmount}</td>
                        <td>
                            <span className="badge bg-info">{o.status}</span>
                        </td>
                        <td>{new Date(o.createdAt).toLocaleString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}