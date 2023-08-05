import React from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const url = "http://localhost:5000/signup";
  const handleSignUp = async (e) => {
    e.preventDefault();
    const firstName = e.target.firstName.value;
    const middleName = e.target.middleName.value || " ";
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const userID = Math.floor(Math.random() * 1000 * 10000000);

    console.log(
      firstName,
      middleName,
      lastName,
      email,
      phone,
      password,
      confirmPassword,
      userID
    );
    if (password === confirmPassword) {
      await axios
        .post(
          url,
          {
            userID,
            firstName,
            middleName,
            lastName,
            email,
            phone,
            password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.status === 422 || !res.data) {
            toast.error("Invalid Registration!");
          } else {
            toast.success(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.response.status === 422) {
            toast.warning(err.response.data.error);
          }
        });
    } else {
      toast.error("Password did not match!");
    }
  };
  return (
    <div className="card my-20 flex mx-auto w-96 bg-base-100 shadow-2xl">
      <figure>
        <h1 className="font-bold">Sign Up</h1>
      </figure>
      <form onSubmit={handleSignUp} className="card-body">
        <label className="label">
          <span className="label-text">
            First Name <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="i.e: Felicia"
          name="firstName"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <label className="label">
          <span className="label-text">Middle Name</span>
        </label>
        <input
          type="text"
          placeholder="(Optional)"
          name="middleName"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">
            Last Name <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="i.e: Herman"
          name="lastName"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <label className="label">
          <span className="label-text">
            Email <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="email"
          placeholder="i.e: felicia@example.com"
          name="email"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <label className="label">
          <span className="label-text">
            Phone <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="+123456789"
          name="phone"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">
            Password <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          name="password"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <label className="label">
          <span className="label-text">
            Confirm Password <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          name="confirmPassword"
          className="input input-bordered w-full max-w-xs"
          required
        />
        <input
          type="submit"
          value="Sign Up"
          className="btn btn-primary flex mx-auto my-3 text-white"
        />
      </form>
    </div>
  );
};

export default Signup;
