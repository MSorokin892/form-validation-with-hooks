import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">First Name</label>
      <input
        name={"firstName"}
        placeholder={"First Name"}
        {...register("firstName", {
            required: true
        })}
      />
      {errors.firstName && <p>This field is required</p>}

      <label htmlFor="lastName">Last Name</label>
      <input
        name={"lastName"}
        placeholder={"Last Name"}
        {...register("lastName", {
          required: true
        })}
      />
      {errors.lastName && <p>This field is required</p>}

      <label htmlFor="password">Password</label>
      <input
        name={"password"}
        placeholder={"Password"}
        {...register("password", {
          required: true
        })}
      />
      {errors.password && <p>This field is required</p>}

      <input type="submit" />
    </form>
  );
}

export default App;
