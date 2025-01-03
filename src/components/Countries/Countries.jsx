import { useEffect } from "react"
import { useState } from "react"

export default function Countries() {
    const [country, setCountry] = useState([])

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(res=>setCountry(res))
    }, [])
  return (
    <div>
        <h3>Countries</h3>
        <h3>Countries: {country.length}</h3>
    </div>
  )
}
