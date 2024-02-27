
export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="site-title">Baskien</a>
                    <ul>
                        <li>
                            <a href="/history">History</a>
                        </li>
                        <li>
                            <a href="/practical">Practical info</a>
                        </li>
                        <li>
                            <a href="/what-to-do">What to do</a>
                        </li>
                    </ul>
        </nav>
    );
};


