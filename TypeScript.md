# TypeScript

1. [React refs with TypeScript - Martin Hochel | Medium](https://medium.com/@martin_hotell/react-refs-with-typescript-a32d56c4d315)

   - Accessing HTML Document refs:

     ```typescript
     class MyComponent extends Component {
       private myRef = React.createRef<HTMLDivElement>();
       const node = this.myRef.current!;
       node.focus();
     }
     ```

   - Adding a Ref to a Class Component:

     ```typescript
     class AutoFocusTextInput extends Component {
       private myCmp = createRef<MyComponent>();
       componentDidMount() {
         this.textInput.current!.focus();
       }
       render() {
         return <MyComponent ref={this.textInput} />
       }
     }
     ```
   
2. [Adopting TypeScript at Scale](https://www.youtube.com/watch?v=P-J9Eg7hJwE)

   - Airbnb에서의 경험을 토대로 한 발표
   - TypeScript를 적용하면 좋은 점
   - JavaScript에서 TypeScript로 옮기는 방법 2가지
   
3. [TypeScript Interface Functions - Jeff Butsch | Medium](https://medium.com/@jeffbutsch/typescript-interface-functions-c691a108e3f1)

   - 인터페이스에서 함수 타입 선언 방법

      ```typescript
      interface MyClassProps {
        onChange?(name: string): number;
        niceProp: boolean;
      }
      ```

4. [Property renaming](http://www.typescriptlang.org/docs/handbook/variable-declarations.html#property-renaming)

   - Destructuring

      ```typescript
      let { a, b }: { a: string, b: number } = o;
      ```

5. [Intersection Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types)

   - 여러 타입들을 합집합으로 사용하기 (재사용성)

6. [10++ TypeScript Pro tips/patterns with (or without) React](https://medium.com/@martin_hotell/10-typescript-pro-tips-patterns-with-or-without-react-5799488d6680)

   - 타입스크립트 문서만 보고 나서 코드를 짜려면 막막하다. 꿀팁, 꿀패턴 모음!
   
7. [In Typescript, what is the ! (exclamation mark / bang) operator when dereferencing a member?](https://stackoverflow.com/a/42274019/5722210)

   - Optional chaining과 비슷하게 사용하고 있었던 `!` 기능 정리
   
8. [Set default value to class members](https://stackoverflow.com/questions/49434944/typescript-set-default-value-for-class-members/49435240)

   - `constructor(/*...*/)` 에서 처리한다

9. [Error Duplicate Const Declaration in Switch Case Statement](https://stackoverflow.com/a/35746467/5722210)

   - `case` 문을 블록 `{}` 으로 묶어서 해결한다

10. TypeScript는 lodash 결과를 예상하지 못한다.

   ```typescript
   let playerByNextPlayerId: CrocodileDentistPlayer | null = null;
   _.forEach(players, player => {
     if (player.nextPlayerId.includes(word)) {
       playerByNextPlayerId = player;
     }
   });
   return playerByNextPlayerId;	// expected as only null
   ```

