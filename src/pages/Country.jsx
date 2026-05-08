import { useEffect, useState, useTransition } from "react";
import { getCountrieData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import CountryCard from "../components/UI/CountryCard";
import SearchFilter from "../components/UI/SearchFilter";

export const Country = () => {
    const [isPending, startTransition] = useTransition();
    const [countryData, setCountryData] = useState([]);
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const searchCountry = (country) => {
        if (search) {
            return country.name.common.toLowerCase().includes(search.toLowerCase());
        }
        return true;
    };

    const filterRegion = (country) => {
        if (filter === "all") return true;
        return country.region === filter;
    };

    const filteredCountryData = countryData.filter(
        (country) => searchCountry(country) && filterRegion(country)
    );

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountrieData();
            setCountryData(res.data);
        });
    }, []);

    if (isPending) return <Loader />;

    return (
        <section className="country-section" style={{ paddingTop: '10rem' }}>
            {/* Page Header */}
            <div className="container" style={{ marginBottom: '4rem' }}>
                <div className="section-title-wrapper" style={{ textAlign: 'left' }}>
                    <span className="section-eyebrow">🌍 Explore</span>
                    <h2 className="container-title" style={{ textAlign: 'left', marginBottom: '0.8rem' }}>
                        All Countries
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.5rem' }}>
                        Showing{" "}
                        <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
                            {filteredCountryData.length}
                        </span>{" "}
                        {filteredCountryData.length === 1 ? "country" : "countries"}
                        {filter !== "all" && ` in ${filter}`}
                        {search && ` matching "${search}"`}
                    </p>
                </div>
            </div>

            {/* Search & Filter Bar */}
            <div className="container">
                <SearchFilter
                    search={search}
                    setSearch={setSearch}
                    filter={filter}
                    setFilter={setFilter}
                    countryData={countryData}
                    setCountryData={setCountryData}
                />
            </div>

            {/* Country Grid */}
            <div className="container">
                {filteredCountryData.length === 0 ? (
                    <div style={{
                        textAlign: 'center',
                        padding: '8rem 2rem',
                        color: 'var(--text-muted)'
                    }}>
                        <p style={{ fontSize: '5rem', marginBottom: '2rem' }}>🔍</p>
                        <p style={{ fontSize: '2rem', color: 'var(--text-secondary)' }}>
                            No countries found
                        </p>
                        <p style={{ fontSize: '1.5rem', marginTop: '0.8rem' }}>
                            Try a different search term or region
                        </p>
                    </div>
                ) : (
                    <ul className="grid grid-four-cols country-card-list" style={{ padding: 0 }}>
                        {filteredCountryData.map((country) => (
                            <CountryCard key={country.id} country={country} />
                        ))}
                    </ul>
                )}
            </div>
        </section>
    );
};
