import React from "react";

const Signup = () => {
  return (
    <div className="card my-20 flex mx-auto w-96 bg-base-100 shadow-2xl">
      <figure>
        <h1 className="font-bold">Sign Up</h1>
      </figure>
      <form className="card-body">
        <label className="label">
          <span className="label-text">
            First Name <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="i.e: Felicia"
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">Middle Name</span>
        </label>
        <input
          type="text"
          placeholder="(Optional)"
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
          className="input input-bordered w-full max-w-xs"
        />
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
            Phone <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="text"
          placeholder="+123456789"
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
          className="input input-bordered w-full max-w-xs"
        />
        <label className="label">
          <span className="label-text">
            Confirm Password <span className="text-error">*</span>
          </span>
        </label>
        <input
          type="password"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
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
