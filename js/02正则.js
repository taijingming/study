/**
 * ?=a 后行断言：匹配的内容的后面必须为a
 * ?!a 后行断言：匹配的内容的后面必须不为a
 * ?<=a 先行断言：匹配的内容的后面必须为a
 * ?<!=a 先行断言：匹配的内容的后面必须不为a
 * (?<name>/d) 具名匹配 
 */
const r1 = /a(?=x)/g
const r2 = /a(?!x)/g
r1.test('ax') // true 
r1.test('ay') // false

r2.test('ax') // false 
r2.test('ay') // true

const r3 = /(?<=x)a/g
r3.test('xa') // true
r3.test('ya') // false

const r4 = /(?<x1>\d{3})-(?<x2>a)/g
const { groups } = r4.exec('123-a')
// groups { x1: '123', x2: 'a'}

var myObject = {
    foo: 4,
    set bar(value) {
      return this.foo = value;
    },
  };
  
