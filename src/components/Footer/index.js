import {FaPinterestSquare} from 'react-icons/fa'
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {AiFillFacebook} from 'react-icons/ai'

import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <h1 className="footer-heading">Tasty Kitchen </h1>
      <p className="footer-description">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="social-media-container">
        <FaPinterestSquare className="social-media-icon" />
        <BsInstagram className="social-media-icon" />
        <BsTwitter className="social-media-icon" />
        <AiFillFacebook className="social-media-icon" />
      </div>
    </div>
  )
}
