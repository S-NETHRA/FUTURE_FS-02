import ProductCard  from "./productcard";  
 
function ProductList ({products,addtocart}){
    return (
        <div className="grid grid-cols-3 gap-4 p-4">
            {products.map(product =>(
                <ProductCard key={product.id} product={product} addtocart={addtocart}/>
            ))}
        </div>
    );
}
export default ProductList;