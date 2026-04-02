import React, {use, useState} from 'react';
import Country from "../Country/Country.jsx";

// setVisitedCountries(v => visitedCountries.append(v));   

const CountriesAPI = async() => {
    const xCountries = await fetch("https://openapi.programming-hero.com/api/all");
    const res = await xCountries.json();
    return res;
}

const countriesPromise = CountriesAPI();


const Countries = () => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [countryFlags, setCountryFlags] = useState([]);
    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
        // setVisitedCountries(v => console.log(v));
        // setVisitedCountries(v => v.push(x));
        // console.log(visitedCountries?.length);
        // visited? setVisitedCountries(x => x.push(common)) : setVisitedCountries(x => x.filter(x => x === !visited));
    };
    const handleCountryFlags = (flags) => {
        const newCountryFlags = [...countryFlags, flags];
        setCountryFlags(newCountryFlags);
    }
    const {countries} = use(countriesPromise);
    // console.log(countries);
    return (
        <div>
            <h1>In {countries.length} countries</h1>
            <h3>{visitedCountries.length} countries visited so far</h3>
            <ul className="flex items-center gap-4 p-4">
            {
                visitedCountries.map(x => <li key={x?.cca3?.cca3}>{x.name.common}</li> )
            }
            {
                countryFlags.map((x, index) => <li key={index}><img src={x.png} alt={x.alt} className="w-5 h-3"/></li>)
            }
            </ul>
            <div className="grid grid-cols-3 gap-4.5">
                {countries.map(c => <Country key={c?.cca3?.cca3} visitedOrNot={handleVisitedCountries} flagSeenOrNot = {handleCountryFlags} country={c}></Country>)}
            </div>
        </div>
    );
};

export default Countries;