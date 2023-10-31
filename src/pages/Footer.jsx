import {BiLogoFacebook} from'react-icons/bi'
import {FaTwitter} from'react-icons/fa'
import {CiInstagram} from'react-icons/ci'
import {CiYoutube} from'react-icons/ci'
import '../App.css'
export function Footer() {
  

    return (
    <>
    <footer className='footer'>
  <div className='container-footer'>

            {/* <div className='left-footer'>
                <i>< BiLogoFacebook /></i>
                <i>< FaTwitter /></i>
                <i>< CiInstagram /></i>
                <i>< CiYoutube /></i>
                <br/>
                
                <p>Copyright ©2023 All rights reserved | This Blog is made with  by King</p>
                 <br />
                <p>Terms & Conditions/ Privacy Policy</p>
            </div>

           <div></div> */}

           <div className='row-f'>
            <div className='footer-col'>
                <h4>Blog</h4>
                <ul>
                    <li><a href='#'>About us</a></li>
                    <li><a href='#'>our services</a></li>
                    <li><a href='#'>privacy policy</a></li>
                    <li><a href='#'>affiliate program</a></li>
                </ul>
            </div>
            
            <div className='footer-col'>
                <h4>get help</h4>
                <ul className='ulu'>
                    <li><a href='#'>Faq</a></li>
                    <li><a href='#'>Publish</a></li>
                    <li><a href='#'>Marketing</a></li>
                    <li><a href='#'>returns</a></li>
                    <li><a href='#'>journalism</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Online news</h4>
                <ul className='ulu'>
                    <li><a href='#'>Sports</a></li>
                    <li><a href='#'>News</a></li>
                    <li><a href='#'>Business</a></li>
                    <li><a href='#'>Entertainment</a></li>
                    <li><a href='#'>Politics</a></li>
                </ul>
            </div>
            <div className='footer-col'>
                <h4>Follow US</h4>
                <div className='social-links'>
                <ul className='ulu'>
                <i>< BiLogoFacebook /></i>
                <i>< FaTwitter /></i>
                <i>< CiInstagram /></i>
                <i>< CiYoutube /></i>
                </ul>
            </div>
            </div>

           </div>

           </div>
           </footer>
            
       
      </>
      );
  }
  
  export default Footer;
  
  