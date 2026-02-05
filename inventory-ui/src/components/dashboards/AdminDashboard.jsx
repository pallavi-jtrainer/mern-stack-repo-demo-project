import ProductTable from "../components/ProductTable";
import AddProductForm from "../components/AddProductForm";
import OrderTable from "../components/OrderTable";
import UserTable from "../components/UserTable";
import api from "../api/api";
import { useEffect, useState } from "react";

export default function AdminDashboard({ view }) {
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);

    const load = () => {
        api.get("/products").then(r => setProducts(r.data));
        api.get("/orders").then(r => setOrders(r.data));
        api.get("/users").then(r => setUsers(r.data));
    };

    useEffect(load, []);

    if (view === "orders")
        return <OrderTable orders={orders} onChange={load} />;

    if (view === "users")
        return <UserTable users={users} onChange={load} />;

    return (
        <>
            <AddProductForm onProductAdded={load} />
            <ProductTable products={products} onChange={load} />
        </>
    );
}





// import { useEffect, useState } from "react";
// import api from "../../api/api";
// import Navbar from "../Navbar";
// import ProductTable from "../admin/ProductTable";

// export default function AdminDashboard() {
//     const [products, setProducts] = useState([]);

//     const loadProducts = () => {
//         api.get("/products")
//         .then(res => setProducts(res.data))
//         .catch(err => console.log(err.message));
//     }

//     useEffect(() => {
//         loadProducts();
//     }, []);

//     return(
//         <>
//             <Navbar />
//             <div className="container">
//                 <h3>Admin Dashboard</h3>

//                 <ProductTable products={products} onChange={loadProducts}/>
//             </div>
//         </>
//     )
// }