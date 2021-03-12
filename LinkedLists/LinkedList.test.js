const LinkedList = require('./LinkedList');

describe('Linked List', () => {
  test('should be instantiated with 0 length and this.head should === null', () => {
    const list = new LinkedList;
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
  })
  describe('Linked List Methods', () => {
    describe('#findSpecificIndex', () => {
      test('should return null with index less than 0', () => {
        const list = LinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(-1)).toBeNull();
      })
      test('should return null with index greater than length of list', () => {
        const list = LinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(4)).toBeNull();
      })
      test('should return the nodes data with index in range', () => {
        const list = LinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.findSpecificIndex(0).data).toBe(10);
        expect(list.findSpecificIndex(1).data).toBe(20);
        expect(list.findSpecificIndex(2).data).toBe(30);
        expect(list.findSpecificIndex(3).data).toBe(40);
      })
    })
    describe('#findSpecficData', () => {
      test('should return -1 when no data is present in list', () => {
        const list = LinkedList.createListFromValues('hello', 'world', 'is', 'anyone', 'there')
        expect(list.findSpecficData('random')).toBe(-1);
      })
      test('should return the index at which the data is found', () => {
        const list = LinkedList.createListFromValues('hello', 'world', 'is', 'anyone', 'there')
        expect(list.head.data).toBe('hello');
        expect(list.findSpecficData('hello')).toBe(0);
        expect(list.findSpecficData('world')).toBe(1);
        expect(list.findSpecficData('is')).toBe(2);
        expect(list.findSpecficData('anyone')).toBe(3);
        expect(list.findSpecficData('there')).toBe(4);
      })
    })
    describe('#addAtHead', () => {
      // add first item to list at head
      test('should add data to begining of list when list is empty', () => {
        const list = new LinkedList;
        list.addAtHead('first in')
        expect(list.head.data).toBe('first in');
      })
      // add two more items to list at head
      test('should have the most recently added item at the head and a length of 3', () => {
        const list = new LinkedList;
        list.addAtHead('first in')
        list.addAtHead('second in')
        const oldHead = list.head;
        list.addAtHead('third in')
        expect(list.head.data).toBe('third in');
        expect(list.length).toBe(3);
        expect(list.head.next).toBe(oldHead);
      })
    })
    describe('#addAtTail', () => {
      test('should addAtHead when the list is empty', () => {
        const list = new LinkedList;
        list.addAtTail('firstNode');
        expect(list.head.data).toBe('firstNode');
        expect(list.length).toBe(1);
      })
      test('should add to the end of the list when there already is a head', () => {
        const list = LinkedList.createListFromValues(10);
        list.addAtTail(20);
        const tail = list.head.next;
        expect(tail.data).toBe(20);
        expect(list.length).toBe(2);
        expect(tail.next).toBeNull();
      })
    })
    describe('#addAtIndex', () => {
      test('should addToHead when the index is less than 0', () => {
        const list = LinkedList.createListFromValues(20, 30, 40)
        expect(list.addAtIndex(-1, 10)).toBe(0);
        expect(list.head.data).toBe(10)
        expect(list.length).toBe(4)
      })
      test('should addToTail when the index is greater than length of list', () => {
        const list = LinkedList.createListFromValues(10, 20, 30, 40)
        expect(list.addAtIndex(4, 50)).toBe(4);
        expect(list.addAtIndex(100, 60)).toBe(5);
        expect(list.length).toBe(6)
      })
      test('should return the index the data was inserted when the index is in range', () => {
        const list = LinkedList.createListFromValues(10, 20, 40, 50)
        expect(list.addAtIndex(2, 30)).toBe(2)
        expect(list.length).toBe(5)
      })

    })
    describe('#removeDupes', () => {
      test('should delete all the duplicate letters', () => {
        const list = LinkedList.createListFromValues('a', 'b', 'a', 'a', 'c', 'b');
        const expected = LinkedList.createListFromValues('a', 'b', 'c');
        expect(JSON.stringify(list.removeDupes())).toBe(JSON.stringify(expected.head));
        expect(list.length).toBe(3);
      })
      test('should delete all the duplicate numbers', () => {
        const list = LinkedList.createListFromValues(99, 1, 6, 1, 1, 43, 2, 2, 99);
        const expected = LinkedList.createListFromValues(99, 1, 6, 43, 2);
        expect(JSON.stringify(list.removeDupes())).toBe(JSON.stringify(expected.head));
        expect(list.length).toBe(5);
      })
    })
    describe('#reverse', () => {
      test('should reverse the list', () => {
        const list = LinkedList.createListFromValues(1, 2, 3, 4, 5);
        const expected = LinkedList.createListFromValues(5, 4, 3, 2, 1);
        expect(JSON.stringify(list.reverse(list.head))).toBe(JSON.stringify(expected.head))
      })

    })


  })
})
  // addAtTail
  // addAtIndex
  // deleteAtIndex
  // print
