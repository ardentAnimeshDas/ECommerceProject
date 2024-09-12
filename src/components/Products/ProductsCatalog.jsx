import React, { useState } from 'react';
import '../../css/ProductsCatalog.css'; 

const ProductsCatalog = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedPriceRange, setSelectedPriceRange] = useState([0, 400]);
    const [selectedSize, setSelectedSize] = useState('All');

    // Dummy product data
    const products = [
        { id: 1, name: 'Autumn Dress', price: 85, category: 'Tops', colors: 2, size: 'Medium', image: 'Images/home_product/dress/greydress.jpg' },
        { id: 2, name: 'Casual Shirt', price: 29, category: 'Tops', colors: 7, size: 'Medium', image: 'Images/home_product/dress/casualshirt.jpg' },
        { id: 3, name: 'Leather Coat', price: 35, category: 'Jackets', colors: 7, size: 'Medium', image: 'Images/home_product/dress/greydress.jpg' },
        { id: 4, name: 'VNeck Shirt', price: 230, category: 'Tops', colors: 3, size: 'Large', image: 'Images/home_product/dress/greydress.jpg' },
        { id: 5, name: 'Long Coat Outer', price: 12, category: 'Jackets', colors: 7, size: 'Large', image: 'Images/home_product/dress/greydress.jpg' },
        { id: 6, name: 'Denim Jacket', price: 32, category: 'Jackets', colors: 5, size: 'Small', image: 'Images/home_product/dress/greydress.jpg' },
        { id: 7, name: 'Basic Hoodie', price: 35, category: 'Sweaters', colors: 4, size: 'Small', image: 'Images/home_product/dress/greydress.jpg' },
        { id: 8, name: 'Flannel Shirt', price: 42, category: 'Tops', colors: 8, size: 'Small', image: 'Images/home_product/dress/greydress.jpg' },
        { id: 9, name: 'Turtleneck', price: 75, category: 'Tops', colors: 2, size: 'Large', image: 'Images/home_product/dress/greydress.jpg' },
    ];

    // Filter products
    const filteredProducts = products.filter((product) =>
        (selectedCategory === '' || product.category.includes(selectedCategory)) &&
        product.price >= selectedPriceRange[0] &&
        product.price <= selectedPriceRange[1] &&
        (selectedSize === 'All' || product.size === selectedSize)
    );

    return (
        <div className="product-catalog">
            {/* Sidebar filters */}
            <div className="filters">
                <div className="filter-section">
                    <h4>Category</h4>
                    <select onChange={(e) => setSelectedCategory(e.target.value)} value={selectedCategory}>
                        <option value="">All</option>
                        <option value="Tops">Tops</option>
                        <option value="Jackets">Jackets</option>
                        <option value="Sweaters">Sweaters</option>
                    </select>
                </div>
                <div className="filter-section">
                    <h4>Price Range</h4>
                    <input
                        type="range"
                        min="20"
                        max="100"
                        value={selectedPriceRange[1]}
                        onChange={(e) => setSelectedPriceRange([0, e.target.value])}
                    />
                    <span>{selectedPriceRange[0]} - {selectedPriceRange[1]}</span>
                </div>
                <div className="filter-section">
                    <h4>Size</h4>
                    <select onChange={(e) => setSelectedSize(e.target.value)} value={selectedSize}>
                        <option value="All">All</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>
            </div>

            {/* Product grid */}
            <div className="products">
                {filteredProducts.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsCatalog;
