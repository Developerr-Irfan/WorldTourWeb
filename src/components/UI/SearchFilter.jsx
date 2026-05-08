import React from 'react'

export default function SearchFilter({ search, setSearch, filter, setFilter, countryData, setCountryData }) {
    const handleSelectChange = (e) => {
        setFilter(e.target.value);
    }

    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    const sortCountry = (order) => {
        const sortData = [...countryData].sort((a, b) => {
            return order === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common)
        });
        setCountryData(sortData);
    }
    return (
        <section className='section-searchFilter container'>
            <div>
                <input
                    type="text"
                    placeholder="search"
                    value={search}
                    onChange={handleInputChange}
                />
            </div>

            <div className=''>
                <button onClick={() => sortCountry("asc")}>
                    Ascending
                </button>
            </div>
            <div className=''>
                <button onClick={() => sortCountry("desc")}>
                    Descending
                </button>
            </div>
            <div>
                <select
                    className="select-section"
                    value={filter}
                    onChange={handleSelectChange}
                >
                    <option value="all">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Americas">Americas</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </section>
    )
}
