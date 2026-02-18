import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const Form = () => {
    
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        age: yup.number('Age is required').min(0, "Age must be a positive number").typeError("Age must be a number and Age is required").required("Age is required"),
        password: yup.string().min(4, "Password must be at least 4 characters").max(8).required("Password is required"),
        confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match").required("Confirm Password is required"),
    })
    
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    
  const onsubmit = (data) => {
    console.log("hello world", data);
    
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div className="mb-3">
        <label className="me-3">Name</label>
        <input type="text" placeholder="Enter name" {...register("name")} />
      </div>
      {errors.name && <p className="text-danger">{errors.name.message}</p>}
      <div className="mb-3">
        <label className="me-3">Email address </label>
        <input type="text" placeholder="Enter email" {...register("email")} />
      </div>
      {errors.email && <p className="text-danger">{errors.email.message}</p>}
      <div className="mb-3">
        <label className="me-3">Age</label>
        <input type="number" placeholder="Enter age" {...register("age")} />
      </div>
      {errors.age && <p className="text-danger">{errors.age.message}</p>}
      <div className="mb-3" >
        <label className="me-3">Password</label>
        <input type="password" placeholder="Password" {...register("password")} />
      </div>
      {errors.password && <p className="text-danger">{errors.password.message}</p>}
      <div className="mb-3" >
        <label className="me-3">Confirm Password</label>
        <input type="password" placeholder="Confirm Password" {...register("confirmPassword")} />
      </div>
      {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
      <button  type="submit">
        Submit
      </button>
    </form>
  );
}

export default Form