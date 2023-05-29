import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";

const Signup = () => {

    const {createUser,userProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {

    createUser(data.email,data.password)
    .then(result =>{
        const createdUser = result.user;
        console.log('signup',createdUser);


              userProfile(data.name,data.photo)

              .then(()=>{
                console.log('user updated');
                Swal.fire({
                    title: 'Sign Up successful',
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  });
                  navigate('/')

              })
              .catch(err =>{
                console.log(err);
              })

     
        
        reset()

    })
    .catch(err =>{
        alert(err)
        console.log(err);
    })

    
    console.log(data);
  };

  return (
    <>
    <Helmet>
        <title>Bistro Boss | Sign Up</title>
    </Helmet>
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left md:w-1/2">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-red-500">Name field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <span className="text-red-500">Photo URL field is required</span>
              )}
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
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">Email field is required</span>
              )}
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
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
              />
              {errors.password?.type === "required" && (
                <p className="text-red-500">password name is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500">Password must be 6 character</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500">
                  Password must have one Uppercase letter one lowercase letter
                  one number and one special character
                </p>
              )}
              {/* <button
                type="button"
                onClick={() => reset()}
                className="btn btn-outline btn-sm mt-4 w-14">
                Reset
              </button> */}
            </div>

            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center mb-3">
            <small>
              Allready have an account ?{" "}
              <Link to="/login" className="text-blue-500">
                login
              </Link>
            </small>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Signup;
