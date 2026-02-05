import api from "../api/api";

export default function UserTable({ users, onChange }) {
    const toggle = async (u) => {
        await api.put(`/users/${u._id}`, { isActive: !u.isActive });
        onChange();
    };

    return (
        <table className="table table-bordered">
            <thead className="table-dark">
                <tr>
                    <th>Email</th><th>Role</th><th>Status</th><th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map(u => (
                    <tr key={u._id}>
                        <td>{u.email}</td>
                        <td>{u.role}</td>
                        <td>{u.isActive ? "Active" : "Inactive"}</td>
                        <td>
                            <button className="btn btn-sm btn-warning"
                                onClick={() => toggle(u)}>
                                {u.isActive ? "Deactivate" : "Activate"}
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
