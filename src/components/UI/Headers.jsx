import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const Headers = () => {
    const [show, setShow] = useState(false);

    const handleButtonToggle = () => setShow(!show);
    const closeMenu = () => setShow(false);

    return (
        <header>
            <div className="container">
                <div className="grid navbar-grid">
                    <div className="Logo">
                        <NavLink to="/" onClick={closeMenu}>
                            <h1>🌐 World Atlas</h1>
                        </NavLink>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="menu-web">
                        <ul>
                            {[
                                { to: "/", label: "Home" },
                                { to: "/about", label: "About" },
                                { to: "/country", label: "Country" },
                                { to: "/contact", label: "Contact" },
                            ].map(({ to, label }) => (
                                <li key={to}>
                                    <NavLink
                                        to={to}
                                        className={({ isActive }) => isActive ? "active" : ""}
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Mobile Hamburger */}
                    <div className="ham-menu">
                        <button onClick={handleButtonToggle} aria-label="Toggle menu">
                            {show ? <IoClose style={{ fontSize: '2.2rem' }} /> : <GiHamburgerMenu style={{ fontSize: '2rem' }} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {show && (
                <nav className="menu-mobile">
                    <ul>
                        {[
                            { to: "/", label: "🏠 Home" },
                            { to: "/about", label: "📖 About" },
                            { to: "/country", label: "🌍 Country" },
                            { to: "/contact", label: "✉️ Contact" },
                        ].map(({ to, label }) => (
                            <li key={to}>
                                <NavLink to={to} onClick={closeMenu}>
                                    {label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};
