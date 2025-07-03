function ProductCard({ product , addtocart}){
    return (
       <div className="border p-4 rounded shadow">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-green-600 font-bold">${product.price}</p>
        <button 
          onClick={() =>addtocart(product)}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 ease-in-out"
          >
            Add to Cart
          </button>
        </div>
        
    );
}
export default ProductCard;