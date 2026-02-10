import React, { useEffect, useState } from 'react'
import { userProducts } from './UserProductData'
import SearchBar from './SearchBar';
import Pagination from './Pagination';

function DisplayData() {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const limit = 8;

    useEffect(() => {
        const fatchData = async () => {
            const data = await userProducts();
            setProducts(data.products);
            setFilteredProducts(data.products);
            setTotalPages(Math.ceil(data.products.length / limit));
        }
        fatchData();

    }, [])

    const filterProducts = (searchTerm) => {
        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
        return filtered;
    }

    const paginatedProducts = filteredProducts.slice(
        (page - 1) * limit,
        page * limit
    );





    return (
        <>
            <SearchBar filterProducts={filterProducts} />

            <div className="row d-flex justify-content-evenly my-5 mx-5">
                {paginatedProducts.map((product) => (
                    <div key={product.id} className="card col-md-4 mb-3" style={{ width: "18rem" }}>
                        <img src={product.images[0]} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h3 className="card-title">{product.title}</h3>
                            <p className="rating">rating: {product.rating}</p>
                            <p>price: ${product.price}</p>
                            <div className='topspace  d-flex justify-content-end'>
                                <button className="add-to-cart">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Pagination page={page} totalPages={totalPages} setPage={setPage} />

        </>
    )
}

export default DisplayData