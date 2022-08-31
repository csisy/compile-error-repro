export class NotOk {
  private myVar = 'world';

  // does not work, no compiler error
  foo(param: typeof this.myVar): void {
    console.log(`Hello ${param}`);
  }

  // works
  // foo(param: string): void {
  //   console.log(`Hello ${param}`);
  // }
}
