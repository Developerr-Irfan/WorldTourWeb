import footerData from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const Footers = () => {
    const footerIcon = {
        MdPlace: <MdPlace />,
        IoCallSharp: <IoCallSharp />,
        TbMailPlus: <TbMailPlus />
    };

    return (
        <footer className="footer-section">
            <div className="container grid grid-three-cols">
                {footerData.map((curData, index) => {
                    const { icon, title, details } = curData;
                    return (
                        <div className="footer-contact" key={index}>
                            <div className="icon">
                                {footerIcon[icon]}
                            </div>
                            <div className="footer-contact-text">
                                <p>{title}</p>
                                <p>{details}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="copyright-area">
                <div className="container">
                    <div className="grid grid-two-cols" style={{ alignItems: 'center' }}>
                        <div className="copyright-text">
                            <p>
                                © 2026 World Atlas · Built with ❤️ by
                                <NavLink to="https://github.com/Developerr-Irfan" target="_blank">
                                    Developer Irfan
                                </NavLink>
                            </p>
                        </div>

                        <div className="footer-menu">
                            <ul>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li>
                                    <NavLink to="https://www.instagram.com/developer_irfann/" target="_blank">
                                        Social
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="https://github.com/Developerr-Irfan/WorldTourWeb.git" target="_blank">
                                        Source
                                    </NavLink>
                                </li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
