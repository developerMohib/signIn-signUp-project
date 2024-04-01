import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/Provider";

const Register = () => {

  // call the function
  const {createUser} = useContext( AuthContext );

  // console.log(authInfo, 'from hijibiji function');

    const handleRegister =(e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value ;
        const password = e.target.password.value;
        console.log(name, email, password);

        
        createUser(email, password)
        .then(result => {
          console.log(result.user)
        })
        .catch(error => {
          console.log(error)
        })
    }
    return (
        <div>
      <div className="hero bg-base-200">
        <div className="">
          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div>
                <p> Already Have an Account <Link to='/login' className="btn" > Log in </Link> </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Register;