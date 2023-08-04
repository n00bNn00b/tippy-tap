import React from "react";

const Login = () => {
  return (
    <div className="card flex mx-auto my-20 w-96 bg-base-100 shadow-2xl">
      <figure>
        <h1 className="font-bold">Login</h1>
      </figure>
      <form className="card-body">
        <label className="label">
          <span className="label-text">
            Email <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="email"
          placeholder="i.e: felicia@example.com"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">
            Password <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="password"
          placeholder="Type your password"
          className="input input-bordered w-full max-w-xs"
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
