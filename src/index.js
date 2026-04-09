import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

// import { MyClass } from "./MyClass";
// import { MyClass, MyClassTwo} from "./MyClass";

// import { App, App2 } from "./App";

// import Student from "./Student";
// import StudentTwo from "./Student";

import States from "./States"
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      {/* <App /> */}
      {/* <App2 /> */}
      {/* <App name="Moeez" age={23} isMarried={false} /> */}
      {/* <App name="Moeez" age={23} /> */}

      {/* Props with function component */}
      {/* <MyClass name="Moeez" age={24} />
      <MyClass name="Rameez" age={22} /> */}
      {/* <MyClassTwo /> */}

      {/* Constructor */}
      {/* <Student /> */}
      {/* <StudentTwo name="Abdul Moeez" /> */}

      {/* States in React */}
      <States />
    </React.StrictMode>
  </>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
