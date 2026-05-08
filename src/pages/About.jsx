import countryData from "../api/countryData.json";

export const About = () => {
    const cardVariants = ["bg-blue-box", "bg-green-box", "bg-yellow-box"];

    return (
        <section className="section-about container">
            <div className="section-title-wrapper">
                <span className="section-eyebrow">✨ Did You Know?</span>
                <h2 className="container-title">
                    Fascinating Facts From<br />
                    Around the Globe
                </h2>
            </div>

            <div className="gradient-cards">
                {countryData.map((country, index) => {
                    const { id, countryName, capital, population, interestingFact } = country;
                    const variant = cardVariants[index % cardVariants.length];

                    return (
                        <div className="card" key={id} style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className={`container-card ${variant}`}>
                                {/* Country emoji flag approximation by name */}
                                <span className="card-icon">🌐</span>
                                <p className="card-title">{countryName}</p>

                                <p>
                                    <span className="card-description">🏛 Capital: </span>
                                    {capital}
                                </p>
                                <p>
                                    <span className="card-description">👥 Population: </span>
                                    {population.toLocaleString()}
                                </p>
                                <p style={{ marginTop: '1.2rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.2rem' }}>
                                    <span className="card-description">💡 Fact: </span>
                                    {interestingFact}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};
