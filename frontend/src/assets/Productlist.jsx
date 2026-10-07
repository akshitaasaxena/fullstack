import React from "react";

function Productlist({ products }) {
    return (
        <>
            <style>
                {`
                    * {
                        box-sizing: border-box;
                    }

                    body {
                        margin: 0;
                        font-family: Arial, sans-serif;
                        background-color: #f5f5f5;
                    }

                    .product-container {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                        gap: 25px;
                        padding: 30px;
                        max-width: 1400px;
                        margin: auto;
                    }

                    .product-card {
                        background-color: white;
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                    }

                    .product-card:hover {
                        transform: translateY(-5px);
                        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                    }

                    .product-image {
                        width: 100%;
                        height: 250px;
                        object-fit: contain;
                        background-color: #fafafa;
                        padding: 15px;
                    }

                    .product-info {
                        padding: 20px;
                    }

                    .product-title {
                        font-size: 20px;
                        margin: 0 0 10px;
                        color: #222;
                    }

                    .product-description {
                        font-size: 14px;
                        color: #666;
                        line-height: 1.5;
                        margin-bottom: 12px;
                    }

                    .category {
                        display: inline-block;
                        background-color: #e8f0fe;
                        color: #2563eb;
                        padding: 5px 10px;
                        border-radius: 20px;
                        font-size: 12px;
                        margin-bottom: 12px;
                    }

                    .brand {
                        font-size: 14px;
                        color: #555;
                        margin: 8px 0;
                    }

                    .price {
                        font-size: 22px;
                        font-weight: bold;
                        color: #111;
                        margin: 10px 0;
                    }

                    .rating {
                        color: #f59e0b;
                        font-weight: bold;
                    }

                    .stock {
                        font-size: 14px;
                        color: #16a34a;
                        margin-top: 8px;
                    }

                    .low-stock {
                        color: #dc2626;
                    }

                    .discount {
                        color: #16a34a;
                        font-size: 14px;
                        font-weight: bold;
                    }

                    .product-button {
                        width: 100%;
                        padding: 12px;
                        border: none;
                        border-radius: 8px;
                        background-color: #111;
                        color: white;
                        font-size: 15px;
                        cursor: pointer;
                        margin-top: 15px;
                    }

                    .product-button:hover {
                        background-color: #333;
                    }
                `}
            </style>

            <div className="product-container">
                {products.map((product) => {
                    return (
                        <div className="product-card" key={product.id}>

                            {/* Product Image */}
                            <img
                                className="product-image"
                                src={product.thumbnail}
                                alt={product.title}
                            />

                            <div className="product-info">

                                {/* Category */}
                                <span className="category">
                                    {product.category}
                                </span>

                                {/* Product Name */}
                                <h2 className="product-title">
                                    {product.title}
                                </h2>

                                {/* Description */}
                                <p className="product-description">
                                    {product.description}
                                </p>

                                {/* Brand */}
                                <p className="brand">
                                    <strong>Brand:</strong> {product.brand || "N/A"}
                                </p>

                                {/* Price */}
                                <p className="price">
                                    ${product.price}
                                </p>

                                {/* Discount */}
                                <p className="discount">
                                    {product.discountPercentage}% OFF
                                </p>

                                {/* Rating */}
                                <p className="rating">
                                    ⭐ {product.rating}
                                </p>

                                {/* Stock */}
                                <p
                                    className={
                                        product.stock < 10
                                            ? "stock low-stock"
                                            : "stock"
                                    }
                                >
                                    {product.availabilityStatus} — {product.stock} left
                                </p>

                                {/* Button */}
                                <button className="product-button">
                                    View Product
                                </button>

                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Productlist;