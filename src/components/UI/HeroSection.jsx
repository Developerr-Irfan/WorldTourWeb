import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const HeroSection = () => {
    return (
        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <span className="hero-badge">
                        🌍 World Explorer 2026
                    </span>

                    <h1 className="heading-xl">
                        Explore the World,{" "}
                        <span className="gradient-text">One Country</span>{" "}
                        at a Time.
                    </h1>

                    <p className="paragraph">
                        Discover the history, culture, and beauty of every nation. Sort,
                        search, and filter through countries to find the details you need.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">250+</span>
                            <span className="stat-label">Countries</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">8B+</span>
                            <span className="stat-label">Population</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">7</span>
                            <span className="stat-label">Continents</span>
                        </div>
                    </div>

                    <NavLink to="/country">
                        <button className="btn-cta">
                            <span>Start Exploring</span>
                            <FaLongArrowAltRight />
                        </button>
                    </NavLink>
                </div>

                <div className="hero-image">
                    <div className="hero-image-wrapper">
                        <img
                            src="/images/world.png"
                            alt="World landmarks on globe"
                            className="banner-image"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};
