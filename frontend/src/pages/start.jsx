
import { Link } from "react-router"

const start = () => {
  return (
    <div className="justify-self-center">
      <h1 className="text-5xl">Welcome to Chat-if-y</h1>
        <div className="">
          <Link to="/signup" className="btn btn-sm btn-primary">Sign Up</Link>
          <Link to="/login" className="btn btn-sm btn-accent">Log In</Link>
        </div>
    </div>
  )
}

export default start