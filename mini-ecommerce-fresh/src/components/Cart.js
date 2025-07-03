
import { Link } from 'react-router-dom';

function Cart({ cartitems, increaseQty, decreaseQty, removeItem ,clearCart}) {
  const total = cartitems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>
      {cartitems.length === 0 ? (
        <p>Your Cart is empty.</p>
      ) : (
        cartitems.map(item => (
          <div key={item.id} className="mb-2 flex justify-between items-center">
            <div>
              {item.name} - ${item.price} x {item.quantity}
            </div>
            <div>
              <button onClick={() => decreaseQty(item.id)} className="px-2 bg-red-500 text-white rounded mr-2">-</button>
              <button onClick={() => increaseQty(item.id)} className="px-2 bg-green-500 text-white rounded mr-2">+</button>
              <button onClick={() => removeItem(item.id)} className="px-2 bg-gray-700 text-white rounded">Remove</button>
            </div>
          </div>
        ))
      )}
      <p className="mt-4 font-bold">Total: ${total}</p>
      {cartitems.length > 0 && (
        <Link to="/checkout" onClick={clearCart} className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
          Proceed to Checkout
        </Link>
      )}


    </div>
  );
}

export default Cart;
