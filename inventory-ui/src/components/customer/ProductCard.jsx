import api from "../api/api";

export default function ProductCard({ product }) {
    const buy = async () => {
        await api.post("/orders", {
            productId: product._id,
            quantity: 1
        });
        alert("Order placed");
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5>{product.name}</h5>
                    <p>₹{product.price}</p>
                    <button className="btn btn-success btn-sm" onClick={buy}>
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
}