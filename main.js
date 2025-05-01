import HashMap from "./hashMap.js"
const test = new HashMap() // or HashMap() if using a factory

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('hat', 'rat')

test.set('moon', 'silver')
test.set('mo3on', 'silver')
test.set('mo3o43n', 'silver')
test.remove('hat')
test.remove('kite')

test.remove('lion')

console.log(test.arr);

console.log(test.length());
console.log(test.capacity);
console.log(test.keys());
console.log(test.values());
console.log(test.entries());
console.log(test.get('mo3on'));

// it also grow back to orignal size when keys are removed 