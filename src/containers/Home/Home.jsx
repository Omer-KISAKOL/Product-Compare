import React, {useState} from "react";
import {CompareTable, ProductList} from "../../components/index.js";
import results from "../../data/products.json";

const Home = () => {

    const [products, setProducts] = useState(results.products);

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
                    <h2 className="mb-3 text-center">Compare Product</h2>
                </div>
            </div>

            <ProductList products={products} compare={compare} />

            {compareProducts.length >= 1 && <CompareTable products={compareProducts}/> }

        </div>
    )
}

export default Home