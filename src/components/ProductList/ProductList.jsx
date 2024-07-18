import Product from "../Product/Product.jsx";

const ProductList = ({products, compare}) => {
    const renderProducts = () => {
      return products;
    };

    return(
        <div className="row mt-3">
            {renderProducts().map((product) => (
                <Product key={product.id} product={product} compare={compare} />
            ))}
        </div>
    )
};
export default ProductList;