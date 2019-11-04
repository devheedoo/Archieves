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

