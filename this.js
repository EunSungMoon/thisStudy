/**********************************************************************************
this (you don't know js this 편 참고)

this의 값은 함수를 호출하는 방법에 의해 결정됨
실행하는 동안의 할당에 의해 설정될 수 없고, 함수가 호출될 떄마다 다를 수 있다

바인딩이란 
실행컨텍스트가 활성화되면 바인딩 된다(그러나 현재 실행컨텍스트의 개념이 살짝 사라졌다고 함)

this의 호출 방식에 따라 this가 특정 객체에 연결되는 것
this가 어떤 값과 연결되는지는 this의 바인딩을 통해 확인 가능

1. 기본 바인딩
  전역객체 바인딩/ 엄격모드 undefined
2. 암시적 바인딩
  매소드 내부에서의 this 메소드를 호출한 객체와 바인딩

3. 명시적 바인딩
  암시적 바인딩 보다 훨씬 직관적
  this를 지정한 객체로 직접 바인딩하는 형태
  (ex. apply(), call(), bind() 3가지 함수가 있다.)

4. new 바인딩

5. 바인딩 예외

호출 방식
1. 일반 함수 내부, 전역공간 : window/global
2. 메서드 내부 : 메서드를 호출한 객체와 바인딩
3. 생성자 함수 내부 : this 생성자 함수가 생성할 인스턴스와 바인딩
4. call, apply, bind 메서드 사용 : 메서드에 첫번째 인수로 전달하는 객체에 바인딩

**********************************************************************************/
//기본 바인딩
function hello() {
  let name = 'eunsung'
  console.log(this.name);
}
hello();

// 암시적 바인딩
let someone = {
  name: 'moon',
  age: 26,
  whoAnI() {
    console.log(this); // {name: 'moon', age: 26, whoAmI: f}
  }
}
someone.whoAnI();

//new 바인딩
function Person(name) {
  this.name = name;
}

let me = new Person('moon');
console.log(me);

//call apply bind
var name = 'chris'
var age = 10;

function person() {
  console.log(`이름 : ${this.name}`);
  console.log(`나이 : ${this.age}`);
}
let mark = {
  name: 'mark',
  age: 15,
}
let tomas = {
  name: 'tomas',
  age: 17
}
person();
person.call(mark); //mark 15
person.apply(tomas); //tomas 17

let tmp = person.bind(mark); //mark 15
tmp();