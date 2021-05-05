import React from "react";
import { useForm } from "react-hook-form";
import "../index.css";

const AddUserForm = (props) => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(`Los datos del form son: ${JSON.stringify(data)}`);
    props.addUser(data);
    //limpiar campos
    e.target.reset();
  };

  return (
    <h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          ref={register({
            required: { value: true, message: "Campo Requerido" },
          })}
        />
        <div className="alert">{errors?.name?.message}</div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          ref={register({
            required: { value: true, message: "Campo Requerido" },
          })}
        />
        <div className="alert">{errors?.username?.message}</div>
        <button>Add new user</button>
      </form>
    </h1>
  );
};

export default AddUserForm;
