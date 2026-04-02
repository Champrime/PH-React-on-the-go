import { Suspense, use } from "react";

export default function Country({country}){
    const {name, capital, flags, population} = country;
    const {common, official} = name;
    const {png, svg, alt} = flags.flags;
    console.log(alt)

    return(
        <>
            <Suspense fallback = { <p>data of {official} is loading</p> }>
                <h4> <img src={png} alt={alt} /> <span>{common}</span></h4>
                <ul>
                    <li>{population.population}</li>
                </ul>
            </Suspense>
        </>
    )
}