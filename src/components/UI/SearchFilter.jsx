import React from 'react';
import { FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';
import { MdFilterList } from 'react-icons/md';

export default function SearchFilter({ search, setSearch, filter, setFilter, countryData, setCountryData }) {

    const handleSelectChange = (e) => setFilter(e.target.value);
    const handleInputChange = (e) => setSearch(e.target.value);

    const sortCountry = (order) => {
        const sortData = [...countryData].sort((a, b) =>
            order === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        );
        setCountryData(sortData);
    };

    return (
        <section className='section-searchFilter container'>

            {/* Search Input */}
            <div className="search-wrapper" style={{ flex: 1, minWidth: '22rem' }}>
                <input
                    type="text"
                    placeholder="Search countries..."
                    value={search}
                    onChange={handleInputChange}
                />
            </div>

            {/* Sort Buttons */}
            <button onClick={() => sortCountry("asc")} title="A → Z">
                <FaSortAlphaDown />
                <span>A – Z</span>
            </button>

            <button onClick={() => sortCountry("desc")} title="Z → A">
                <FaSortAlphaUp />
                <span>Z – A</span>
            </button>

            {/* Region Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <MdFilterList style={{ color: 'var(--accent-cyan)', fontSize: '2rem' }} />
                <select
                    className="select-section"
                    value={filter}
                    onChange={handleSelectChange}
                >
                    <option value="all">All Regions</option>
                    <option value="Africa">🌍 Africa</option>
                    <option value="Americas">🌎 Americas</option>
                    <option value="Asia">🌏 Asia</option>
                    <option value="Europe">🇪🇺 Europe</option>
                    <option value="Oceania">🌊 Oceania</option>
                </select>
            </div>
        </section>
    );
}
