import MailIcon from '../../assets/icons/mail.png';
import LockIcon from '../../assets/icons/lock.png';
import MomentImage from '../../assets/images/moment.png';
import './LoginForm.css';

function LoginForm() {
  return (
    <div>

      <section className='grid-container'>
        <div className='left-grid'>
          <img src={MomentImage} className='left-grid-img' />
        </div>

        <div className='right-grid'>
          
          <div className='login-form-heading'>
            <h2 className='right-heading--title'> Login to your account </h2>
            <p className='right-heading--description'> Welcome Back </p>
          </div>

          <form className='login-form'>
            <div className="login-input-fields">
              <img src={MailIcon} alt='user icon' className='login-form-icons'/>
              <input type="email" placeholder="Email" className="login-input" required/>
            </div>

            <div className="login-input-fields">
              <img src={LockIcon} alt='user icon' className='login-form-icons'/>
              <input type="password" placeholder="Password" className="login-input" required/>
            </div>

            <div className="input-fields">
              <input type="submit" value="Log In" className="login-input login-submit-input" required />
            </div>
          </form>

          <p className='login-bottom-text'>
            Don't have an account? <span className='sign-up'> <a href=''> Sign Up </a> </span> 
          </p>

        </div>


      </section>

      
    </div>
  )
}

export default LoginForm;