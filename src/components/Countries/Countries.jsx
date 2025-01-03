import { useEffect } from "react"
import { useState } from "react"
import Country from "./Country"

export default function Countries() {
    const [countries, setCountry] = useState([])

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(res=>setCountry(res))
    }, [])
  return (
    <div>
        <h3>Countries</h3>
        <h3>Countries: {countries.length}</h3>
        {
          countries.map(country=><Country country={country} key={country.cca2}></Country>)
        }
    </div>
  )
}
