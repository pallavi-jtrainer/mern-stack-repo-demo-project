export default function Sidebar({ links, onLogout }) {
    return (
        <div className="bg-dark text-light p-3 vh-100" style={{ width: "220px" }}>
            <h5 className="mb-4">Inventory</h5>
            <ul className="nav flex-column">
                {links.map(l => (
                    <li key={l.label} className="nav-item mb-2">
                        <button className="btn btn-dark w-100 text-start"
                            onClick={l.onClick}>
                            {l.label}
                        </button>
                    </li>
                ))}
            </ul>
            <button className="btn btn-outline-light mt-4" onClick={onLogout}>
                Logout
            </button>
        </div>
    );
}