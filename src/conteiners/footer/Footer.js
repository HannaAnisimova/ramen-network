import Logo from '../../components/logotype/Logotype'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-column'>
         <Logo />
         <a href='#' className='footer__text'>About us</a>
         <a href='#' className='footer__text'>Contact us</a>
      </div>
      <div className='footer-column'>
         <p className='footer__title'>Community</p>
         <p className='footer__text'>Why we are building Ramen.Network</p>
         <p className='footer__text'>Find Freelance Jobs</p>
      </div>
      <div className='footer-column'>
         <p className='footer__title'>Useful Links</p>
         <p className='footer__text'>Remote Co.</p>
         <p className='footer__text'>Cushion App</p>
         <p className='footer__text'>Smarter Queue</p>
         <p className='footer__text'>Get Harvest</p>
      </div>
      <div className='footer-column'>
         <p className='footer__title'>Subscribe to our Newsletter</p>
         <a href='#' className='footer__text button'>Subscibe</a>
      </div>
    </div>
  )
}

export default Footer