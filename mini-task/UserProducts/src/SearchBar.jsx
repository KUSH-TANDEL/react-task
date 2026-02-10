import { useState } from "react";
import React from 'react'

function SearchBar({filterProducts}) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        filterProducts(e.target.value);
    }
    console.log(searchTerm);
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <form
                        className="d-flex"
                        onSubmit={(e) =>
                            e.preventDefault()
                        }
                    >
                        <input onChange={handleSearch}
                            className="form-control me-2" type="search"
                            placeholder="Search" aria-label="Search"
                        />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default SearchBar