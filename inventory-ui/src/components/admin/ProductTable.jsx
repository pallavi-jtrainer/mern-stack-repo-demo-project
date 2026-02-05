import api from "../api/api";
import UpdateProductModal from "./UpdateProductModal";

export default function ProductTable({ products, onChange }) {
    const del = async (id) => {
        await api.delete(`/products/${id}`);
        onChange();
    };

    return (
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>ID</th><th>Name</th><th>Price</th><th>Qty</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map(p => (
                    <tr key={p._id}>
                        <td>{p._id}</td>
                        <td>{p.name}</td>
                        <td>{p.price}</td>
                        <td>{p.quantity}</td>
                        <td>
                            <UpdateProductModal product={p} onUpdated={onChange} />
                            <button className="btn btn-danger btn-sm ms-2"
                                onClick={() => del(p._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
