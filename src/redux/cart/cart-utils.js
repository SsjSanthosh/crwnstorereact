export const addItemToCart = (cartItems, item) => {
  const found = cartItems.find(i => i.id === item.id);
  if (found) {
    return cartItems.map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    );
  }
  return [...cartItems, { ...item, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const foundItem = cartItems.find(item => item.id === itemToRemove.id);
  if (foundItem.quantity === 1) {
    return cartItems.filter(item => item.id != itemToRemove.id);
  }

  return cartItems.map(item =>
    item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};
