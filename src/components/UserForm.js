import React, { useState, useEffect } from "react";

function UserForm({ addUser, updateUser, editingUser }) {

const [name, setName] = useState("");
const [email, setEmail] = useState("");

useEffect(() => {
if (editingUser) {
setName(editingUser.name);
setEmail(editingUser.email);
}
}, [editingUser]);

const handleSubmit = (e) => {
e.preventDefault();

const user = { name, email };

if (editingUser) {
updateUser(editingUser.id, user);
} else {
addUser(user);
}

setName("");
setEmail("");
};

return (
<div>
<h2>{editingUser ? "Edit User" : "Add User"}</h2>

<form onSubmit={handleSubmit}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e) => setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e) => setEmail(e.target.value)}
/>

<button type="submit">
{editingUser ? "Update" : "Add"}
</button>

</form>
</div>
);
}

export default UserForm;