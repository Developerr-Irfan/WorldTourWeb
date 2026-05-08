import { useEffect, useState, useTransition } from "react"
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
        return country;
    }

    const filterRegion = (country) => {
        if (filter === 'all') return true;
        return country.region === filter;
        return country;
    }
    const filteredCountryData = countryData.filter((country) => searchCountry(country) && filterRegion(country));

    useEffect(() => {
        startTransition(async () => {
            const countryData = await getCountrieData();
            setCountryData(countryData.data);
        });
    }, []);

    if (isPending) return <Loader />
    return <section className="country-section">
        <SearchFilter
            search={search}
            setSearch={setSearch}
            filter={filter}
            setFilter={setFilter}
            countryData={countryData}
            setCountryData={setCountryData}
        />
        <ul className="grid grid-four-cols">
            {filteredCountryData.map((country) => {
                return <CountryCard key={country.id} country={country} />
            })}
        </ul>
    </section>
}