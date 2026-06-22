// Default Export Functions Methods

// // --- Method 1 ---
// function MyFunc() {
//   return (
//     <>
//       <h1>Functional Components</h1>
//       <p>Components are like functions that returns HTML elements</p>
//     </>
//   );
// }

// export default MyFunc;

// --- Method 2 ---
// export default MyFuncTwo() {
//     return (
//     <>
//       <h1>Functional Components</h1>
//       <p>Components are like functions that returns HTML elements</p>
//     </>
//   );
// }

// Named Export Function Methods

// // --- Method 1 ---
// function MyFuncThree() {
//   return (
//     <>
//       <h1>Functional Components</h1>
//       <p>Components are like functions that returns HTML elements</p>
//     </>
//   );
// }

// export { MyFuncThree };

// --- Method 2 ---
export function MyFuncThree() {
  return (
    <>
      <h1>Functional Components</h1>
      <p>Components are like functions that returns HTML elements</p>
    </>
  );
}
