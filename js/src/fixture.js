function hasThisItemInCart(id) {
  var carts = getLocalStorage('carts');
  var index;
  carts.forEach(function(cart, currentIndex) {
    if(cart.id === id) {
      index = currentIndex;
    }
  });
  return index;
}
