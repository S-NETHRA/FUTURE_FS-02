import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/header';
import Home from './pages/home';
import CartPage from './pages/cartpage';
import CheckoutPage from './pages/checkoutpage';
function App() {
  const [cartitems, setcartitems] = useState([]);

  const addtocart = (product) => {
    const existingItem = cartitems.find(item => item.id === product.id);
    if (existingItem) {
      setcartitems(cartitems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setcartitems([...cartitems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (productId) => {
    setcartitems(cartitems.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQty = (productId) => {
    setcartitems(cartitems
      .map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter(item => item.quantity > 0)
    );
  };

  const removeItem = (productId) => {
    setcartitems(cartitems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
  setcartitems([]);
};


  return (
    <Router>
      <Header cartitems={cartitems} />
      <Routes>
        <Route path="/" element={<Home addtocart={addtocart} />} />
        <Route path="/cart" element={<CartPage cartitems={cartitems} increaseQty={increaseQty} decreaseQty={decreaseQty} removeItem={removeItem} clearCart={clearCart} />} />
        <Route path="/checkout" element={<CheckoutPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
