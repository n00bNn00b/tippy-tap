import React from "react";

const ResetPassWord = () => {
  return (
    <div className="card flex mx-auto my-20 w-96 bg-base-100 shadow-2xl">
      <figure>
        <h1 className="font-bold">Reset Password</h1>
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

        <input
          type="submit"
          value="Reset Password"
          className="btn btn-primary text-white my-3"
        />
      </form>
    </div>
  );
};

export default ResetPassWord;
