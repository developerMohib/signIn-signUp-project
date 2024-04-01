import { Link } from "react-router-dom";

const LogIn = () => {
    const handlelogin =(e)=>{
        e.preventDefault();
        const email = e.target.email.value ;
        const password = e.target.password.value;
        console.log(email, password);
    }

  return (
    <div>
      <div className="hero bg-base-200">
        <div className="">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 shadow-2xl bg-base-100">
            <form onSubmit={handlelogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <div>
                <p> New Here ? Please <Link to='/register'  className="btn" > Register </Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
