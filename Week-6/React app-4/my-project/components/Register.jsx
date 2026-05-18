import { useForm } from "react-hook-form";

function Register() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    alert("Check console for registration data!");
  };

  return (
    <div>
      <div>
        <div>
          <h2>Create Account</h2>
          <p>Join our community of developers today</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <label>First Name</label>
              <input 
                {...register("firstName", { required: "Required" })}
                placeholder="John"
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>
            
            <div>
              <label>Last Name</label>
              <input 
                {...register("lastName", { required: "Required" })}
                placeholder="Doe"
              />
              {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <label>Email Address</label>
            <input 
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
              })}
              type="email"
              placeholder="john@example.com"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label>Choose Password</label>
            <input 
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Min 6 characters" }
              })}
              type="password"
              placeholder="••••••••"
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <div>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">
              I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
            </label>
          </div>

          <button type="submit">
            Create Your Account
          </button>
        </form>

        <p>
          Already have an account? <a href="/login">Sign In</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
