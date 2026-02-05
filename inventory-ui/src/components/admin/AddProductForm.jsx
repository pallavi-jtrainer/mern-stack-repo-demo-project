import { useState } from "react";
import api from "../api/api";

export default function AddProductForm({ onProductAdded }) {
    const [p, setP] = useState({});

    const submit = async (e) => {
        e.preventDefault();
        await api.post("/products", p);
        onProductAdded();
    };

    return (
        <form className="card p-3 mb-4" onSubmit={submit}>
            <h5>Add Product</h5>
            <div className="row">
                <div className="col">
                    <input className="form-control" placeholder="Name"
                        onChange={e => setP({ ...p, name: e.target.value })} />
                </div>
                <div className="col">
                    <input className="form-control" type="number" placeholder="Price"
                        onChange={e => setP({ ...p, price: e.target.value })} />
                </div>
                <div className="col">
                    <input className="form-control" type="number" placeholder="Qty"
                        onChange={e => setP({ ...p, quantity: e.target.value })} />
                </div>
                <div className="col">
                    <button className="btn btn-primary w-100">Add</button>
                </div>
            </div>
        </form>
    );
}
