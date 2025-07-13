import { Link } from "react-router";


const SignUp = () => {
  return (
    <div data-theme="forest" className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center">Sign Up</h2>

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

          <button className="btn btn-primary w-full">Sign Up</button>
          <Link to="/login" className="justify-self-start">Already an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
