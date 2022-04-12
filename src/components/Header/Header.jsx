import "./Header.scss"
// import svg2 from '../../assets/svg/spinner2.svg'
import logo from "../../assets/img/logo.png"
function Header() {
    return <div className="header">
        <div className="navbar">
            <a className="navbar__logo" href="#">
                <img src={logo} alt="logo_img" />
            </a>
            <ul className="navbar__ul">
                <li className="navbar__ul__li"><a className="link" href="#">New User?</a></li>
                <li className="navbar__ul__li"><a className="linkk" href="#">Sign Up</a></li>
            </ul>
        </div>
    </div>
}
export default Header