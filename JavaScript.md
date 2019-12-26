# JavaScript

1. [Optional chaining - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining):

    - `?.` 연산자는 대상이 `null`이거나 `undefined`이면 `undefined`를 반환
    - 함수에 대해서도 가능
    - 예제 실행 시 오류가 나서 봤더니, *As of August 2019, no environment natively implements this feature.* :cry:
2. [화살표 함수를 사용해서는 안 되는 경우 | 화살표 함수 | PoiemaWeb](https://poiemaweb.com/es6-arrow-function)
    - 메소드, 생성자, 프로토타입, 콜백 함수
3. [How to write async await without try-catch blocks in JavaScript | codebits](https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/)
    - **to.js** wrapper를 사용해서 `let err, user;` 정의 후 `[err, user] = await to(UserModel.findById(1));`
4. [Async/await without try/catch in JavaScript - Dzmitry Bayarchyk | Medium](https://itnext.io/async-await-without-try-catch-in-javascript-6dcdf705f8b1)
    - **Promise.prototype.catch** 사용해서 `const posts = await fetchPosts().catch(() => { console.log('error'); });`
    - 위의 3번과 비교했을 때 wrapper를 지양하는 면에서 4번이 더 나은 것 같다.
5. [How do I create a dynamic key to be added to a JavaScript object variable | StackOverflow](https://stackoverflow.com/questions/2462800/how-do-i-create-a-dynamic-key-to-be-added-to-a-javascript-object-variable)
    - ES6 기능으로 `obj = { [key]: value }` 와 같이 동적으로 추가할 수 있다.
6. [Avoiding Promise.all() fail-fast behavior](https://nmaggioni.xyz/2016/10/13/Avoiding-Promise-all-fail-fast-behavior/)
    - `Promise.all()` 은 하나라도 reject가 발생하면 종료한다.
    - 종료하더라도 모든 결과를 받을 수 있게 코드 작성하기

```javascript
const toResultObject = (promise) => {
    return promise
    .then(result => ({ success: true, result }))
    .catch(error => ({ success: false, error }));
};
```

7. [Optional Chaining - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining#Syntax)
   - 함수에 Optional Chaining은 `func?.(args)` 처럼 사용한다.
8. [Is it better to return `undefined` or `null` from a javascript function?](https://stackoverflow.com/questions/37980559/is-it-better-to-return-undefined-or-null-from-a-javascript-function)
   - 그 때 그 때 다르다
9. [Error Duplicate Const Declaration in Switch Case Statement](https://stackoverflow.com/a/35746467/5722210)
   - `case` 문을 블록 `{}` 으로 묶어서 해결한다

