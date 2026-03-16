import React, { useState, useEffect } from "react";
import UserTable from "./components/UserTable";
import UserForm from "./components/UserForm";
import { getUsers, addUser, updateUser, deleteUser } from "./services/api";

function App() {

const [users, setUsers] = useState([]);
const [editingUser, setEditingUser] = useState(null);

const loadUsers = async () => {
const res = await getUsers();
setUsers(res.data);
};

useEffect(() => {
loadUsers();
}, []);

const handleAddUser = async (user) => {
await addUser(user);
loadUsers();
};

const handleDeleteUser = async (id) => {
await deleteUser(id);
loadUsers();
};

const handleEditUser = (user) => {
setEditingUser(user);
};

const handleUpdateUser = async (id, user) => {
await updateUser(id, user);
setEditingUser(null);
loadUsers();
};

return (

<div style={{ width: "600px", margin: "auto" }}>

<h1>User CRUD Management</h1>

<UserForm
addUser={handleAddUser}
updateUser={handleUpdateUser}
editingUser={editingUser}
/>

<UserTable
users={users}
deleteUser={handleDeleteUser}
editUser={handleEditUser}
/>

</div>

);

}

export default App;