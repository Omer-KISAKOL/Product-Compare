import React, {useState} from "react";
import {CompareTable, ProductList} from "../../components/index.js";
import results from "../../data/products.json";

const Home = () => {

    const [nameSearch, setNameSearch] = useState("");
    const [products, setProducts] = useState(results.products);

    const handleChange = (event) => {
      setNameSearch(event.target.value);
    }

    const compare = (id) => {
      setProducts(
          products.map((product) => product.id === id ?{...product, compare:!product.compare}: product)
      );
    }

    const compareProducts = products.filter((product) => product.compare);

    return (
        <div className="home mt-5">
            <div className="row">
                <div className="col-12">
                    <h2 className="mb-3">Compare Product</h2>
                    <input
                        type="text"
                        placeholder="Search by name"
                        value={nameSearch}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
            </div>

            <ProductList nameSearch={nameSearch} products={products} compare={compare} />

            {compareProducts.length >= 1 && <CompareTable products={compareProducts}/> }


        </div>
    )
}

export default Home