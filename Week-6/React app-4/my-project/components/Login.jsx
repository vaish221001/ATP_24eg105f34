import { useForm } from "react-hook-form";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Check console for login data!");
  };

  return (
    <div>
      <div>
        <div>
          <h2>Welcome Back</h2>
          <p>Enter your credentials to access your account</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Email Address</label>
            <input 
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="name@example.com"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <div>
              <label>Password</label>
              <a href="#">Forgot password?</a>
            </div>
            <input 
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="••••••••"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">
            Sign In
          </button>
        </form>

        <div>
          <p>
            Don't have an account? <a href="/register">Create an account</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
