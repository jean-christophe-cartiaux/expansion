import logo from "../../img/Groupe 579.png"
import "./header.css"
const Header = () => {
    return (
        <nav>
            <div className="main-menu">
                <div>
                    <h1> <a href="#"> <img className="around" src={logo}/> </a> </h1>
                </div>
                <ul>
                    <li>
                        <a href="#" className="active">Bienvenue</a>
                    </li>
                    <li>
                        <a href="#">Nos métiers</a>
                    </li>
                    <li>
                        <a href="#">Notre méthodologie</a>
                    </li>
                    <li>
                        <a href="#">L&#39;agence</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </div>
            <ul className="menu-two">
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#" className="orange">Prendre un rendez-vous</a>
                </li>
            </ul>
        </nav>
    )
}
export default Header;