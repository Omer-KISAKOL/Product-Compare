import React from 'react';
import "./style.css"

const CompareTable = ({products}) => (
    <div className="row compare">
        <div className="col-12 mt-5 text-center">
            <table className="table">

                <thead className="thead-default">
                    <tr>
                        <th/>
                        {products.map((product) => (
                            <th key={product.id}>{product.name}</th>
                        ))}
                    </tr>
                </thead>

                <tbody>

                    <tr className="price">
                        <th scope="row">Price</th>
                        {products.map((product) => (
                            <td key={product.id} className="text-center">
                                {product.price}
                            </td>
                        ))}
                    </tr>

                    <tr className="colors">
                        <th scope="row">Colors</th>
                        {products.map((product) => (
                            <td key={product.id}>
                                {product.colors.map((color, index) => (
                                    <span key={index} className={"bg-" + color}/>
                                ))}
                                <span className="text-uppercase">{product.colors}</span>
                            </td>
                        ))}
                    </tr>

                    <tr className="condition">
                        <th scope="row">Chip</th>
                        {products.map((product) => (
                            <td key={product.id} className={"text-center text-white bg-secondary"}>
                                {product.condition}
                            </td>
                        ))}
                    </tr>

                </tbody>

            </table>

        </div>
    </div>
)
export default CompareTable