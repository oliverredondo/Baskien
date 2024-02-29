import { useState } from "react";
import { Link, useMatch, useResolvedPath  } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

    return (
        <nav className="nav" role="navigation">
            <Link to="/" className="site-title">Baskien</Link>
            <GiHamburgerMenu
                className="toggle-button"
                size={40}
                onClick={toggleMenu}
                aria-label={isOpen ? "Close menu" : "Open menu"}
                aria-expanded={isOpen}
                aria-controls="menu"
            />

            
                    <ul className={`nav-list ${isOpen ? "active" : ""}`}>
                        <CustomLink to="/history">History</CustomLink>
                        <CustomLink to="/practical-information">Practical information</CustomLink>
                        <CustomLink to="/what-to-do">What to do</CustomLink>
                    </ul>
                   
        </nav>
    );
};

function CustomLink({ to, children, ...props }) {
const resolvedPath = useResolvedPath(to)
const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
                </Link>
        </li>
    )
}
 