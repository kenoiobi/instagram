import Logo from "../../components/Logo/Logo"
import "./login.css"

function LoginForm(){
  return (
    <div className="loginform">
      <div>
	<input placeholder="Email"/>
      </div>

      <div>
	<input placeholder="Password"/>
      </div>

      <div>
	<button>
	  Login
	</button>
      </div>
    </div>
  )
}

function Login(){
  return (
    <div>
      <Logo/>
      {/* <Header/> */}
      {/* <Or/> */}
      <LoginForm/>

      <div className="center line">
	Don't have an account?
      </div>

      <div className="center">
	<a href="/signup">Signup</a>
      </div>

    </div>
  )
}

export default Login
