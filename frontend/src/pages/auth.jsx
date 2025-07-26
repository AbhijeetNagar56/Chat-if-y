
import { useState } from "react";
import axiosInstance from "../api/axios";


const fetchUsers = async () => {
  try {
    const response = await axiosInstance.get('/');
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};

fetchUsers();

const auth = () => {
  const [su, setsu] = useState(true);
  if (su) {
    return (
      
      <div data-theme="forest" className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Sign Up</h2>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input type="text" placeholder="Name" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="text" placeholder="Email" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="password" placeholder="Password" className="input input-bordered w-full" />
            </label>

            <button className="btn btn-primary w-full">Sign Up</button>
            <p className="justify-self-start" onClick={() => { setsu(false) }}>Already an account?</p>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div data-theme="forest" className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="card w-full max-w-sm shadow-xl bg-base-100">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center">Log In</h2>

            <label className="form-control w-full mb-4">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input type="text" placeholder="Email" className="input input-bordered w-full" />
            </label>

            <label className="form-control w-full mb-6">
              <div className="label">
                <span className="label-text">Password</span>
              </div>
              <input type="password" placeholder="Password" className="input input-bordered w-full" />
            </label>

            <button className="btn btn-accent w-full">Log In</button>
            <p onClick={() => { setsu(true) }} className="justify-self-start">Don't have an account?</p>
          </div>
        </div>
      </div>
    )
  }
};

export default auth;
