import { useState } from 'react';
import Productlist from '../components/productlist';

function Home({ addtocart }) {
    const [searchTerm, setSearchTerm] = useState('');

    const products = [
        {
            id: 1,
            name: 'Canon EOS 1500D',
            price: 35000,
            image: '/canon.jpeg'
        },
        {
            id: 2,
            name: 'Nikon D3500',
            price: 40000,
            image: '/nikon.jpeg'
        },
        {
            id: 3,
            name: 'Sony Alpha ILCE-6100',
            price: 65000,
            image: '/sony.jpeg'
        },
        {
            id: 4,
            name: 'Samsung Ultra 24',
            price: 95000,
            image: '/samsung.jpeg'
        },
        {
            id: 5,
            name: 'Google Pixel 8',
            price: 85000,
            image: '/googlepixel.jpeg'
        },
        {
            id: 6,
            name: 'iPhone 16 Pro',
            price: 150000,
            image: '/iphone.jpeg'
        },
        {
            id: 7,
            name: 'HP Pavilion 15 Laptop',
            price: 70000,
            image: '/hp.jpeg'
        },
        {
            id: 8,
            name: 'Dell Inspiron 15 Laptop',
            price: 68000,
            image: '/dell.jpeg'
        },
        {
            id: 9,
            name: 'Apple MacBook Pro',
            price: 180000,
            image: '/apple.jpeg'
        }
    ];

    // Filter products based on search term
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <h2 className="text-center text-2xl font-bold my-4">Products</h2>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
            </div>

            {/* Display filtered products or no results message */}
            {filteredProducts.length > 0 ? (
                <Productlist products={filteredProducts} addtocart={addtocart} />
            ) : (
                <div className="text-center py-8">
                    <p className="text-gray-500 text-lg">No products found matching "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
}

export default Home;
