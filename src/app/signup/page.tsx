import BackArrow from "../../components/BackArrow/BackArrow"
import Logo from "../../components/Logo/Logo"
import "./signup.css"

function SignupForm(){
  return (
    <div className="signupform">
      <div>
	<input placeholder="Email"/>
      </div>

      <div>
	<input placeholder="Password"/>
      </div>

      <div>
	<input placeholder="Full Name"/>
      </div>

      <div className="marginbottom">
	<input placeholder="Username"/>
      </div>

      <div className="text">
			      People who use our service may have uploaded your contact information to instagram. <a href="/learnmore">Learn More</a>
      </div>
      <div className="text">
			      By signing up, you agree to our <a href="/terms">Terms</a>, <a href="/privacy">Privacy Policy</a> and <a href="/cookies">Cookies Policy</a>.
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
      <Logo/>
      {/* <Header/> */}
      {/* <Or/> */}
      <SignupForm/>

      <div className="center">
	Have an account?
      </div>

      <div className="center">
	<a href="/login">Login</a>
      </div>

    </div>
  )
}

export default SignUp
