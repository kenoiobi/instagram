import BackArrow from "../../components/BackArrow/BackArrow"
import Logo from "../../components/Logo/Logo"

function LoginForm(){
  return (
    <div>
      <div>
	<input placeholder="Email"/>
      </div>

      <div>
	<input placeholder="Password"/>
      </div>

      <div>
	<input placeholder="Full Name"/>
      </div>

      <div>
	<input placeholder="Username"/>
      </div>

      <div>
	    People who use our service may have uploaded your contact information to instagram. <a>Learn More</a>
      </div>
      <div>
	    By signing up, you agree to our <a>Terms</a>, <a>Privacy Policy</a> and <a>Cookies Policy</a>.
      </div>

      <div>
	<button>
	  Sign up
	</button>
      </div>
    </div>
  )
}

function SignUp(){
  return (
    <div>
      {/* <Logo/> */}
      {/* <Header/> */}
      {/* <Or/> */}
      <LoginForm/>

      <div>
	Have an account?
      </div>

      <div>
	<a href="/login">Login</a>
      </div>

    </div>
  )
}

export default SignUp
