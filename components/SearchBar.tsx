
'use client'
import { useState } from "react";
import SearchManufacture from "./SearchManufacture";

const SearchBar = () => {
    const [manufacture, setManufacture] = useState('')
    const handleSearch = () => {

    }
  return (
    <form className="searchbar" onSubmit={handleSearch}>
        <div className="searchbar__item">

        </div>
        <SearchManufacture
            manufacture ={manufacture}
            setManufacture = {setManufacture}
          />

    </form>
  )
}

export default SearchBar