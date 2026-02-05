import ProductCard from "../components/ProductCard";
import OrdersView from "../customer/OrdersView"
import ProfileCard from "../components/ProfileCard";
import api from "../api/api";
import { useEffect, useState } from "react";

export default function CustomerDashboard({ view }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("/products").then(r => setProducts(r.data));
    }, []);

    if (view === "orders") return <OrdersView />;
    if (view === "profile") return <ProfileCard />;

    return (
        <div className="row">
            {products.map(p => (
                <ProductCard key={p._id} product={p} />
            ))}
        </div>
    );
}
