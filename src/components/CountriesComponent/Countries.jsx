import { useEffect } from "react";
import { useState } from "react";
import Country from "../CountryComponent/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(rec => rec.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h1>There is {countries.length} known countries in the world</h1>
            <h3>Information about them down below</h3>
            <div className="countries">
                {
                    countries.map(country =>
                        <Country key={country.cca3}
                            country={country}
                        ></Country>
                    )
                }
            </div>
        </div>
    );
};

export default Countries;