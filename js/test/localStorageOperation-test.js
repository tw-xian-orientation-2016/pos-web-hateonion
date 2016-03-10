describe('localStorageOperation test', function() {

  it('should get a object from localStorage', function() {
    spyOn(localStorage, 'getItem').and.returnValue('[{"id":"item001","name":"苹果","price":"3.00","unit":"斤"}]');

    var correctResult = [{id: "item001", name: "苹果", price: "3.00", unit: "斤"}];
    var result = getLocalStorage("test");

    expect(result).toEqual(correctResult);

  });

  it('should set data in localStorage', function() {
    spyOn(localStorage, 'setItem');

    setLocalStorage("test","test");
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
