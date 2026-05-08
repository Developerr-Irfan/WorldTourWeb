import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getSingleCountryData } from '../../api/postApi';

export default function CountryDetails() {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [countryData, setCountryData] = useState(null);
    useEffect(() => {
        startTransition(async () => {
            const res = await getSingleCountryData(params.id);
            if (res.status === 200) {
                console.log(res.data[0]);
                setCountryData(res.data[0]);
            }
        });
    }, []);

    return (
        <section className='card country-details-card container'>
            {
                countryData && <div className='container-card bg-white-box'>
                    <div className="country-image grid grid-two-cols">
                        <img
                            src={countryData.flags.svg}
                            alt={countryData.flags.alt}
                            className="flag"
                        />
                        <div className="country-content">
                            <p className="card-title"> {countryData.name.official} </p>
                            <div className="infoContainer">
                                <p>
                                    <span className="card-description"> Native Names:</span>
                                    {Object.keys(countryData.name.nativeName)
                                        .map((key) => countryData.name.nativeName[key].common)
                                        .join(", ")}
                                </p>
                                <p>
                                    <span className="card-description"> Population: </span>
                                    {countryData.population.toLocaleString()}
                                </p>
                                <p>
                                    <span className="card-description"> Region:</span>
                                    {countryData.region}
                                </p>
                                <p>
                                    <span className="card-description"> Sub Region:</span>
                                    {countryData.subregion}
                                </p>
                                <p>
                                    <span className="card-description"> Capital:</span>
                                    {countryData.capital}
                                </p>

                                <p>
                                    <span className="card-description">Top Level Domain:</span>
                                    {countryData.tld[0]}
                                </p>
                                <p>
                                    <span className="card-description"> Currencies: </span>
                                    {Object.keys(countryData.currencies)
                                        .map((curElem) => countryData.currencies[curElem].name)
                                        .join(", ")}
                                </p>
                                <p>
                                    <span className="card-description">Languages: </span>
                                    {Object.keys(countryData.languages)
                                        .map((key) => countryData.languages[key])
                                        .join(", ")}
                                </p>
                            </div>
                        </div>
                        <div className='country-card-backBtn'>
                            <NavLink to="/country" className="backBtn">
                                <button> Back </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            }
        </section>
    )
}
