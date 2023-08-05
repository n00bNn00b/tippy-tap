import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const [userID, setUserID] = useState();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const url = "http://localhost:5000/login";
    console.log(userID);
    await axios
      .post(
        url,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status !== 200) {
          toast.error("Invalid Credentials!");
        } else {
          toast.success(res.data.message);
          setUserID(res.data.userID);
        }
      })
      .catch((err) => {
        // console.log(err);
        if (err.response.status === 400) {
          toast.error(err.response.data.error);
        } else if (err.response.status === 404) {
          toast.warning(err.response.data.error);
        } else {
          toast.error(err.response.data.error);
        }
      });
  };
  return (
    <div className="card flex mx-auto my-20 w-96 bg-base-100 shadow-2xl">
      <figure>
        <h1 className="font-bold">Login</h1>
      </figure>
      <form onSubmit={handleLogin} className="card-body">
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
          autoComplete="on"
          required
        />
        <label className="label">
          <span className="label-text">
            Password <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="password"
          placeholder="Type your password"
          name="password"
          className="input input-bordered w-full max-w-xs"
          autoComplete="on"
          required
        />
        <input
          type="submit"
          value="Login"
          className="btn btn-primary text-white my-3"
        />
      </form>
    </div>
  );
};

export default Login;
