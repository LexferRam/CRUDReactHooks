import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {
  console.log(props.currentUser); //usuario que va a ser editado

  const { register, errors, handleSubmit, setValue } = useForm({
    defaultValues: props.currentUser, //usuario que va ser modificado(los datos se pintaran en el form de editar)
  });

  //setValue() permite que el form de editar sobrescriba cada vez que que se quiera editar un user
  useEffect(() => {
    setValue("name", props.currentUser.name);
    setValue("username", props.currentUser.username);
  });

  const onSubmit = (data, e) => {
    console.log(data);
    data.id = props.currentUser.id;
    props.updateUser(props.currentUser.id, data);
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
        <div>{errors?.name?.message}</div>
        <label>Username</label>
        <input
          type="text"
          name="username"
          ref={register({
            required: { value: true, message: "Campo Requerido" },
          })}
        />
        <div>{errors?.username?.message}</div>
        <button>Edit user</button>
      </form>
    </h1>
  );
};

export default EditUserForm;
