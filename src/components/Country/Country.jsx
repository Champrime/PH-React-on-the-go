import { Suspense, useState } from "react";

export default function Country({visitedOrNot, flagSeenOrNot, country}){
    const {name, flags, population, area} = country;
    const {common, official} = name;
    const {png, alt} = flags.flags;
    const [visited, setVisited] = useState(false);

    const handleClick = () => {
        setVisited(!visited);
        visitedOrNot(country);        
        console.log(country);
    }

    const handleFlag = (flags) => {
        flagSeenOrNot(flags);
    }

    return(
        <>
            <Suspense fallback = { <p>data of {official} is loading</p> }>
                <div className={`flex flex-col gap-5 p-4 ${visited ? "text-amber-600 bg-amber-100 border border-amber-300" : "text-amber-900 bg-amber-400 border border-amber-100"} rounded-xl`}>
                    <h4 className="flex flex-col md:flex-row gap-1.5 items-center font-extrabold text-2xl"><img src={png} alt={alt} className="h-6 w-10"/><span>{common}</span></h4>
                    <ul>
                        <li className="list-none pl-2.5">Area: {area?.area} ({area?.area > 30000? "Big Country" : "Small Country"})</li>
                        <li className="list-none pl-2.5">Population: {population?.population}</li>
                    </ul>
                    <div className="flex justify-around">
                        <button onClick={handleClick} className="btn btn-soft btn-warning">{visited ? "Visited" : "Not Visited"}</button>
                        <button onClick={()=>{handleFlag(flags.flags)}} className="btn btn-soft btn-warning">Add visited country flag</button>
                    </div>
                </div>
            </Suspense>
        </>
    )
}