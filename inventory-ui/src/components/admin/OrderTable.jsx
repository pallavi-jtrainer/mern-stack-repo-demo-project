import api from "../api/api";

export default function OrderTable({ orders, onChange }) {
    const updateStatus = async (id, status) => {
        await api.put(`/orders/${id}`, { status });
        onChange();
    };

    return (
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>ID</th><th>Product</th><th>Qty</th><th>Total</th><th>Status</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(o => (
                    <tr key={o._id}>
                        <td>{o._id}</td>
                        <td>{o.productId}</td>
                        <td>{o.quantity}</td>
                        <td>{o.totalAmount}</td>
                        <td>
                            <select value={o.status}
                                onChange={e => updateStatus(o._id, e.target.value)}>
                                <option>CREATED</option>
                                <option>CANCELLED</option>
                                <option>COMPLETED</option>
                            </select>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
