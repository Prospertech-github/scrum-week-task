import UserIcon from '../../assets/icons/user.png';
import MailIcon from '../../assets/icons/mail.png';
import LockIcon from '../../assets/icons/lock.png';
import HideIcon from '../../assets/icons/hide.png';
import MomentImage from '../../assets/images/moment.png';
import './SignUp.css';


function Form() {
  return (
    <div>
      <section className='container'>
        <div className='image-column'>
          <img src={MomentImage} className='image-column--img' />
        </div>


        <div className='form-column'>
          <div className='form-heading'>
            <h2 className='heading-primary'> Create an account with us</h2>
            <p className='heading-description'> This would only take a few minute </p>
          </div>

          <form className="form">
            <div className="input-fields">
              <img src={UserIcon} alt='user icon' className='form-icons'/>
              <input type="text" placeholder="Full Name" className="input" required/>
            </div>

            <div className="input-fields">
              <img src={UserIcon} alt='user icon' className='form-icons'/>
              <input type="text" placeholder="Username" className="input" required/>
            </div>
        
            <div className="input-fields">
              <img src={MailIcon} alt='user icon' className='form-icons'/>
              <input type="email" placeholder="Email" className="input" required/>
            </div>

            <div className="input-fields">
              <img src={LockIcon} alt='user icon' className='form-icons'/>
              <input type="password" placeholder="Password" className="input" required/>
            </div>

            <div className="input-fields">
              <img src={LockIcon} alt='user icon' className='form-icons'/>
              <input type="password" placeholder="Confirm Password" className="input" required />
            </div>

            <div className="input-fields">
              <input type="submit" value="Create Account" className="input submit-input" required />
            </div>
          </form>

          <p className='bottom-note'> Already have an account? <span className='login-link'> <a href=''> Login </a> </span></p>
        </div>
      </section>

      
    </div>
  )
}

export default Form;