class Person {
  constructor(name) {
    this.name = name
  }
  sayHi () {
    console.log('hi, i am', this.name);
  }
}
let a = 1
let fanghao = new Person('fang hao')
fanghao.sayHi()
