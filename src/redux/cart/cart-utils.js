const addItemToCart = (cartItems, item) => {
  const found = cartItems.find(i => i.id === item.id);
  if (found) {
    return cartItems.map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }
  return [...cartItems, { ...item, quantity: 1 }];
};
export default addItemToCart;
