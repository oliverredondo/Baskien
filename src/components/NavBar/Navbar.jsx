import { Link, useMatch, useResolvedPath  } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Baskien</Link>
                    <ul>
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
 