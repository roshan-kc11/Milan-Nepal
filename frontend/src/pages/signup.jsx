
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/login", { replace: true });
  }

  return (
    <div className="signup-page">
      <div className="signup-box">
        <h1>Create Account</h1>
        <p>Sign up to get started</p>

        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            required
          />
<label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            required
          />
<label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
          />
<label htmlFor="confirmPassword">Confirm Password</label>   
          <input
            type="password"
            placeholder="Confirm Password"
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;