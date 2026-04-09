// useState
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

Counter();

// Event Handling
function ClickExample() {
  function handleClick() {
    alert("Button Clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}

ClickExample();

// Conditional Rendering
function UserStatus({ isLoggedIn }) {
  return (
    <div>{isLoggedIn ? <h1>Welcome Back!</h1> : <h1>Please Login</h1>}</div>
  );
}

UserStatus();

// List & Keys
const users = ["Ali", "Ahmed", "Sara"];

function UserList() {
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user}</li>
      ))}
    </ul>
  );
}

UserList();

// // Fetch API
// import { useEffect, useState } from "react";

// function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);

//   return (
//     <div>
//       {users.map((user) => (
//         <p key={user.id}>{user.name}</p>
//       ))}
//     </div>
//   );
// }

// Users();

// // React Router
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<h1>Home</h1>} />
//         <Route path="/about" element={<h1>About</h1>} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// App();

// // React Router
// import { useState } from "react";

// function TodoApp() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");

//   const addTodo = () => {
//     setTodos([...todos, input]);
//     setInput("");
//   };

//   return (
//     <div>
//       <input value={input} onChange={(e) => setInput(e.target.value)} />
//       <button onClick={addTodo}>Add</button>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// TodoApp();

// Creating & Nesting Components
export default function MyApp() {
  return (
    <div>
      <h1>Learning react.js</h1>
      <MyButton />
    </div>
  );
}

// Nesting Component
function MyButton() {
  return <button>I'm a button</button>;
}

// // Displaying Data
// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Photo of ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// Conditional Rendering
// let content;
// if (isLoggedIn) {
//   content = <AdminPanel />;
// } else {
//   content = <LoginForm />;
// }
// return <div>{content}</div>;

{
  /* <div>
  {isLoggedIn ? (
    <AdminPanel />
  ) : (
    <LoginForm />
  )
  )}
</div> */
}

{
  /* <div>{isLoggedIn && <AdminPanel />}</div>; */
}

// Rendering Lists
// const products = [
//   { title: 'Cabbage', isFruit: false, id: 1 },
//   { title: 'Garlic', isFruit: false, id: 2 },
//   { title: 'Apple', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>{listItems}</ul>
//   );
// }

// Responding to events
// function MyButton() {
//   function handleClick() {
//     alert("You clicked me!");
//   }

//   return <button onClick={handleClick}>Click me</button>;
// }

// MyButton();

// Updating the screen
function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Clicked {count} times</button>;
}

MyButton();

// Hooks - React.js
export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>Clicked {count} times</button>
  )
}

// Buttons that update together
import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

// Writing Markup with JSX
export default function TodoList() {
  return (
    <>
      <h1>Todo Lists</h1>
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  )
}

TodoList();

// Conditional Rendering
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✅'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Space suit"
        />
        <Item
          isPacked={true}
          name="Helmet with a golden leaf"
        />
        <Item
          isPacked={false}
          name="Photo of Tam"
        />
      </ul>
    </section>
  );
}

PackingList();

// // Keeping Components pure
// let guest = 0;

// function Cup() {
//   guest = guest + 1;
//   return (
//     <h2>Tea cup for guest #{guest}</h2>
//   )
// }

// export default function TeaSet(){
//   return (
//     <>
//       <Cup />
//       <Cup />
//       <Cup />
//     </>
//   );
// }

// By using Props in Pure Components
function Cup ({ guest }) {
  return (
    <h2>Tea cup for guest #{guest}</h2>
  )
}

export default function TeaSet(){
  return(
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  )
}

// Responding to events
export default function App(){
  return (
    <Toolbar
    onPlayMovie={() => alert("Playing")}
    onUploadImage={() => alert("Uploading")}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}