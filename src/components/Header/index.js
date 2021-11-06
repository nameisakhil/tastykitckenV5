import {Link, withRouter} from 'react-router-dom'
import {FiLogOut} from 'react-icons/fi'
import {AiFillHome} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content-container">
        <div className="nav-bar-mobile-container">
          <Link to="/">
            <div className="logo-container">
              <img
                src="https://res.cloudinary.com/dh2scpkcz/image/upload/v1636190658/tastykitcken/Frame_274_tovmcv.jpg"
                alt="website logo"
                className="login-website-logo-mobile-img"
              />
              <p className="logo-content">Tasty Kitchen</p>
            </div>
          </Link>
          <ul className="nav-menu">
            <li>
              <Link to="/">
                <AiFillHome className="nav-mobile-symbol nav-home-symbol" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <BsFillCartFill className="nav-mobile-symbol" />
              </Link>
            </li>
          </ul>

          <button type="button" className="nav-mobile-btn">
            <FiLogOut className="logout" onClick={onClickLogout} />
          </button>
        </div>
        <div className="nav-large-container">
          <Link to="/" className="nav-link">
            <div className="logo-container">
              <img
                src="https://res.cloudinary.com/dh2scpkcz/image/upload/v1636190658/tastykitcken/Frame_274_tovmcv.jpg"
                alt="website logo"
                className="login-website-logo-desktop-img"
              />
              <p className="logo-content">Tasty Kitchen</p>
            </div>
          </Link>
          <ul className="nav-large-menu-container">
            <li className="nav-menu-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-menu-item">
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
            </li>
          </ul>
          <button
            type="button"
            className="logout-desktop-btn"
            onClick={onClickLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Header)
