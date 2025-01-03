
export default function Country({country}) {
   console.log(country)
   const {name,flags,population, region} = country
  return (
    <div className="bg-red-100 text-black p-4 m-2 flex justify-between items-center">
       <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">Name: {name.common}</h3>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
       </div>

        <img src={flags.png} alt="" />

    </div>
  )
}
