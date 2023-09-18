import './Login.css'

function Login() {

  return (
<>
  <div>
    <form>
      <h1>LOGIN</h1>
      <span>Please enter your login and password!</span>
      <input type="username" placeholder="username" />
      <input type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <button>Sign In</button>
      <span>Don’t have an account? <a href="#">Sign up</a></span>
      </form>
    </div>

  <div>
    <h1>Welcome Back!</h1>
    <p>To keep connected with us please login with your personal info</p>
    <button>Sign In</button>
  </div>
</>
  )
}

export default Login
