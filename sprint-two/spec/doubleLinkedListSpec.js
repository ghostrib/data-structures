describe('Double linked list', function() {
  var testList = new DoubleLinkedList();
  
  it('should be able to add to head', function() {
    testList.addToHead(4);
    expect(testList.head.value).to.eql(4);
  })

  it('should be able to add to tail', function () {
    testList.addToTail(7);
    expect(testList.tail.value).to.eql(7);
  })

  it('should be able to remove from head', function() {
    testList.addToHead(9);
    testList.removeHead();
    expect(testList.head.value).to.eql(4);
  })

  it('should be able to remove from tail', function() {
    testList.addToTail(2);
    testList.removeTail();
    expect(testList.tail.value).to.eql(7);
  })

  it('should report if value contained in list', function() {
    expect(testList.contains(7)).to.be.true;
    expect(testList.contains(9)).to.be.false;
  })

});