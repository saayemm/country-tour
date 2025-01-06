import { useEffect } from "react"
import { useState } from "react"
import Country from "./Country"

export default function Countries() {
    const [countries, setCountry] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(res=>setCountry(res))
    }, [])

    const hundleVisitedCountry = country => {
      console.log(country)
      const newVisitedCountry = [...visitedCountries, country]
      setVisitedCountries(newVisitedCountry)
    }
  return (
    <div className="flex gap-4">
      <div>
        <h3>Countries</h3>
        <h3>Countries: {countries.length}</h3>
        {
          countries.map(country=><Country country={country}
            hundleVisitedCountry={hundleVisitedCountry} 
            key={country.cca2}></Country>)
        }
      </div>
       
        <div className="border-2 border-orange-600 p-2 m-4">
          <h3 className="text-2xl">Visited Countries <span className="text-green-700">{visitedCountries.length}</span></h3>
          <ul>
            {
              visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
            }
          </ul>
        </div>
       
    </div>
  )
}
