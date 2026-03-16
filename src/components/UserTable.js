import React from "react";

function UserTable({ users, deleteUser, editUser }) {

return (

<table border="1" cellPadding="10">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{users.map((user) => (
<tr key={user.id}>

<td>{user.id}</td>
<td>{user.name}</td>
<td>{user.email}</td>

<td>
<button onClick={() => editUser(user)}>
Edit
</button>

<button onClick={() => deleteUser(user.id)}>
Delete
</button>
</td>

</tr>
))}

</tbody>

</table>

);

}

export default UserTable;