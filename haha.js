class Person {
  constructor(name) {
    this.name = name
  }
  sayHi () {
    console.log('hi, i am', this.name);
  }
}

let fanghao = new Person('fang hao')
fanghao.sayHi()