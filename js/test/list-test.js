describe('main feature test', function() {

  describe('list used function test', function() {

    it('should return undefined if not in cart', function() {
      spyOn(window,"getLocalStorage").and.returnValue([{id: "item002", count: 2}]);

      expected = undefined;
      result = hasThisItemInCart("item001");
      expect(result).toEqual(expected);
    });
    it('should return item index if in cart', function() {
      spyOn(window,"getLocalStorage").and.returnValue([{id: "item002", count: 2}]);

      expected = 0;
      result = hasThisItemInCart("item002");
      expect(result).toEqual(expected);

    });
  });
});
