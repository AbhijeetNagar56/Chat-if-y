import { Link } from "react-router";


const LogIn = () => {
  return (
    <div data-theme="dark" className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Log In</h2>

          <label className="form-control w-full mb-4">
            <div className="label">
              <span className="label-text">Username</span>
            </div>
            <input type="text" placeholder="Username" className="input input-bordered w-full" />
          </label>

          <label className="form-control w-full mb-6">
            <div className="label">
              <span className="label-text">Password</span>
            </div>
            <input type="password" placeholder="Password" className="input input-bordered w-full" />
          </label>

          <button className="btn btn-accent w-full">Log In</button>
          <Link to="/signup" className="justify-self-start">Don't have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
