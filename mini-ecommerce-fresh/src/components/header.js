import {Link } from 'react-router-dom';

function Header({cartitems}){
    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">Shop O' Mart </h1>
            <nav>
             <Link to="/" className="mr-4 hover:border-b-2 hover:border-white pb-1 transition-all duration-200">Home</Link>
              <Link to="/cart" className="mr-4 hover:border-b-2 hover:border-white pb-1 transition-all duration-200">Cart({cartitems.length})</Link>
              <Link to="/checkout" className="mr-4 hover:border-b-2 hover:border-white pb-1 transition-all duration-200">Checkout</Link>
            </nav>
        </header>
    );
}

export default Header;