import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight, FaUsers, FaGlobe, FaCity } from 'react-icons/fa';

export default function CountryCard({ country }) {
    const { flags, name, population, region, capital } = country;

    return (
        <li className='country-card card'>
            <div className='container-card bg-white-box'>
                <div className="card-image-wrapper" style={{ overflow: 'hidden', borderRadius: '12px 12px 0 0', margin: '-3.2rem -3.2rem 0 -3.2rem' }}>
                    <img
                        src={flags.svg}
                        alt={`Flag of ${name.common}`}
                        style={{
                            width: '100%',
                            height: '18rem',
                            objectFit: 'cover',
                            display: 'block',
                            transition: 'transform 0.6s cubic-bezier(0.23,1,0.32,1)'
                        }}
                    />
                </div>

                <div className='countryInfo'>
                    <p className='card-title'>
                        {name.common.length > 18 ? name.common.slice(0, 18) + "…" : name.common}
                    </p>

                    <p>
                        <FaUsers style={{ color: 'var(--accent-cyan)', fontSize: '1.4rem', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span className="card-description">Population: </span>
                        {population.toLocaleString()}
                    </p>

                    <p>
                        <FaGlobe style={{ color: 'var(--accent-cyan)', fontSize: '1.4rem', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span className="card-description">Region: </span>
                        {region}
                    </p>

                    <p>
                        <FaCity style={{ color: 'var(--accent-cyan)', fontSize: '1.4rem', flexShrink: 0, marginTop: '0.2rem' }} />
                        <span className="card-description">Capital: </span>
                        {capital?.[0] ?? 'N/A'}
                    </p>

                    <NavLink to={`/country/${name.common}`}>
                        <button>
                            <span>Explore</span>
                            <FaArrowRight />
                        </button>
                    </NavLink>
                </div>
            </div>
        </li>
    );
}
