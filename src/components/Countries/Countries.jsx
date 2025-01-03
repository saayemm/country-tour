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
    <div>
        <h3>Countries</h3>
        <div>
          <h3>Visited Countries {visitedCountries.length}</h3>
          <ul>
            {
              visitedCountries.map(country=><li key={country.cca3}>{country.name.common}</li>)
            }
          </ul>
        </div>
        <h3>Countries: {countries.length}</h3>
        {
          countries.map(country=><Country country={country}
            hundleVisitedCountry={hundleVisitedCountry} 
            key={country.cca2}></Country>)
        }
    </div>
  )
}
