import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
//COMPONENTS
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddForm";
import EditUserForm from "./components/EditUserForm";

function App() {
  const usersData = [
    { id: uuidv4(), name: "Tanie", username: "usernameTania" },
    { id: uuidv4(), name: "Lexfer", username: "usernameLexfer" },
    { id: uuidv4(), name: "Francisco", username: "usernameFrancisco" },
  ];
  const [users, setUsers] = useState(usersData);

  //Agregar Usuarios
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //Eliminar usuarios
  const deleteUser = (id) => {
    const arrayFiltrado = users.filter((user) => user.id !== id);
    //console.log(id);
    setUsers(arrayFiltrado);
  };

  //Editar usuarios
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    username: "",
  });
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
    });
  };

  //Actualizar usuario
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD APP with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm currentUser={currentUser} updateUser={updateUser} />
            </div>
          ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View User</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
}

export default App;
