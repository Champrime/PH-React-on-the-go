import React, {use} from 'react';
import Country from "../Country/Country.jsx"

const CountriesAPI = async() => {
    const xCountries = await fetch("https://openapi.programming-hero.com/api/all");
    const res = await xCountries.json();
    return res;
}

const countriesPromise = CountriesAPI();

const Countries = () => {
    const {countries} = use(countriesPromise);
    console.log(countries);
    return (
        <div>
            <h1>In {countries.length} countries</h1>
            {countries.map(c => <Country country={c}></Country>
            )}
        </div>
    );
};

export default Countries;