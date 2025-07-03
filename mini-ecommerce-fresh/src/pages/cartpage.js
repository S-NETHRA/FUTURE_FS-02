import Cart from '../components/Cart';

function CartPage({ cartitems, increaseQty, decreaseQty, removeItem, clearCart }) {
  return (
    <div>
      <Cart cartitems={cartitems} increaseQty={increaseQty} decreaseQty={decreaseQty} removeItem={removeItem} clearCart={clearCart} />
    </div>
  );
}

export default CartPage;
