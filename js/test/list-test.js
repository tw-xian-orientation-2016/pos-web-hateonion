describe('main feature test', function() {

  describe('list used function test', function() {

    it('should return undefined when this item not in cart', function() {
      spyOn(window,'getLocalStorage').and.returnValue([{id: "item002", count: 2}]);

      expected = undefined;
      result = hasThisItemInCart("item001");
      expect(result).toEqual(expected);
    });
    it('should return item index when this item in cart', function() {
      spyOn(window,'getLocalStorage').and.returnValue([{id: "item002", count: 2}]);

      expected = 0;
      result = hasThisItemInCart("item002");
      expect(result).toEqual(expected);

    });
  });

  describe('receipt used function test', function() {
    it('should return sum of the cart when cart is not empty', function() {
      spyOn(window,'getLocalStorage').and.returnValue([{"id":"item001","name":"苹果","price":"3.00","unit":"斤"}]);
      var carts = [{id: "item001", count: 2}];

      expected = 6;
      result = countTotal(carts);

      expect(result).toEqual(expected);
    });

    it('should return 0 when cart is empty', function() {
      spyOn(window,'getLocalStorage').and.returnValue([{"id":"item001","name":"苹果","price":"3.00","unit":"斤"}]);
      var carts = [];

      expected = 0;
      result = countTotal(carts);

      expect(result).toEqual(expected);
    });
  });
});
