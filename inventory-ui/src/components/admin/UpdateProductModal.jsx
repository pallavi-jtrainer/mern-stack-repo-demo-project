import { useState } from "react";
import api from "../api/api";

export default function UpdateProductModal({ product, onUpdated }) {
    const [data, setData] = useState({
        price: product.price,
        quantity: product.quantity
    });

    const update = async () => {
        await api.put(`/products/${product._id}`, data);
        onUpdated();
    };

    return (
        <>
            <button
                className="btn btn-warning btn-sm"
                data-bs-toggle="modal"
                data-bs-target={`#m-${product._id}`}
            >
                Update
            </button>

            <div className="modal fade" id={`m-${product._id}`}>
                <div className="modal-dialog">
                    <div className="modal-content p-3">
                        <input
                            className="form-control mb-2"
                            value={data.price}
                            onChange={e => setData({ ...data, price: e.target.value })}
                        />
                        <input
                            className="form-control mb-2"
                            value={data.quantity}
                            onChange={e => setData({ ...data, quantity: e.target.value })}
                        />
                        <button className="btn btn-success" onClick={update}>
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
