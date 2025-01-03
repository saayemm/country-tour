import { useState } from "react"

export default function Country({country, hundleVisitedCountry}) {

    const [visited, setVisited] = useState(false)

   console.log(country)
   const {name,flags,population, region} = country

   const hundleVisited = () => {
    setVisited(!visited)
   }
  return (
    <div className={`bg-red-100 text-black p-4 m-2 flex justify-between items-center  ${visited && 'visited'}`}>
       <div className="flex flex-col gap-1 justify-start items-start">
        <h3 className="text-xl font-semibold">Name: {name.common}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <button className="bg-black text-white px-4 py-1 rounded-sm"
            onClick={()=>hundleVisitedCountry(country)}>Mark as Visited</button>
        <button 
            className="bg-black text-white px-4 py-1 rounded-sm"
            onClick={hundleVisited}>{visited ? "visited" : "Wanna Visit"}</button>
            {visited ? "Already explore this country" : "I want to explore this country"}
       </div>

        <img src={flags.png} alt="" />

    </div>
  )
}
