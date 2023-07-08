import { useState ,useCallback} from 'react'
import './index.css'
import { GoogleLoginButton ,AppleLoginButton} from 'react-social-login-buttons'
import { LoginSocialGoogle } from 'reactjs-social-login'




const Login = () => {

    

    const [email, sendEmail] = useState("")
    const [password, sendPassword] = useState("")
    // const [google, sendGoogle] = useState()
    // const [email, sendEmail] = useState()
    // const [email, sendEmail] = useState()

    const emailEnter = (e) => {
        sendEmail(e.target.value)
    }

    const passwordEnter = (e) => {
        sendPassword(e.target.value)
    }

    const submitButton = (e) => {
        e.preventDefault()
    }

    const client_id='733207078783-tmfk93pummf82pfh1h67u8m3ukstcaac.apps.googleusercontent.com'

    const [provider, setProvider] = useState(true)
  const [profile, setProfile] = useState(false)

  const onLoginStart = (req, res) => {
    alert('login start')
    setProfile(true)
    setProvider(false)
    console.log(res)


  }

  const onLogoutSuccess = (res) => {
    setProfile(false)
    setProvider(true)
    alert('logout success')
  }

  const  onFailure = (res) => {
    console.log("Login Faliure")
  }

    return (
        <div className="login-container">
            <div className='login-page'>
                <h1 className='board'>Board.</h1>
            </div>
            <div className='login-page-container'>
                <div className='heading-container'>
                    <h1 className='heading'>Sign in</h1>
                    <p className='sing-content'>Sign in to your account </p>
                </div>
                <div className='button-account'>
                    
                {!provider ? (
         <GoogleLoginButton  onClick={onLogoutSuccess}/>
      ) :(     
                <LoginSocialGoogle
            isOnlyGetToken
            client_id={client_id}
            onLoginStart={onLoginStart}
            onFailure={onFailure}
          >
            <GoogleLoginButton />
          </LoginSocialGoogle >
      )
        }
                    
                         
                                        
                    <AppleLoginButton/>
                </div>
                <form className='form-container' onSubmit={submitButton}>
                    <div className='input-container'>
                        <label for="email">Email address</label>
                        <input type="text" id='email' placeholder='Enter a Email' required="" onChange={emailEnter} value={email} />
                    </div>
                    <div className='input-container'>
                        <label for="password">Password</label>
                        <input type="password" id='password' required="" placeholder='Enter a password' onChange={passwordEnter} value={password} />
                    </div>
                    <p>Forgot Password?</p>
                    <button className='button' type='submit'>Sign in</button>
                </form>
                <p className='register'>Don`t have an account? <span>Register here</span></p>
            </div>


        </div>
    )
}

export default Login

