import "./App.css";
import React from "react";
import Header from "./components/Header";

// import Sidebar from "./components/Sidebar";
// import Footer from "./components/Footer";
// import PropTypes from "prop-types";

// Class Component
// import MyClass from "./components/classComponents/MyClass";
// import {
//   // ClassProps,
//   ClassPropsSecond,
// } from "./components/classComponents/ClassProps";

// Props in React
// import Props from "./props/Props";

// Arrow Functions in React
// import ArrowFunc from "./arrowFunctions/ArrowFunc";

// Default Export vs Name Export
// import AnyDefaultExport, {
//   NamedExport,
//   NamedExportTwo,
// } from "./name&DefaultExport/NamedExport";

// // React Constructor
// import Student from "./constructor/Student";

// // State
// import State from "./states/State";

// Destructuring With Props
// import WithProps from "./destructureProps&State/WithProps";

// Destructuring With State
// import WithState from "./destructureProps&State/WithState";

// Events
// import ClickEvent from "./events/ClickEvent";
// import BindingEventHandler from "./events/BindingEventHandler";

// React Lifecycle Methods
// import Mounting from "./reactLifecycle/Mounting";
// import Updating from "./reactLifecycle/Updating";
// import UpdatingMethods from "./reactLifecycle/UpdatingMethods";
// import UnMountingParent from "./reactLifecycle/UnMountingParent";

// PassingMethodAsProps
// import ParentComponent from "./passingMethodAsProps/ParentComponent";

// Condtional Rendering
// import Conditionals from "./conditionalRendering/Conditionals";

// List / Array Rendering
import Students from "./listRendering/Students";

// Class Component
class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* <h1>Abdul Moeez Tariq</h1> */}
        {/* <Sidebar /> */}
        {/* <h2>Learning React.js</h2> */}
        {/* <Footer /> */}

        {/* <Props /> */}

        {/* <ArrowFunc /> */}

        {/* Default Export vs Named Export */}
        {/* <AnyDefaultExport />
            <NamedExport />
            <NamedExportTwo /> 
        */}

        {/* Class Component */}
        {/* <MyClass /> */}
        {/* <ClassProps name="Abdul Moeez Tariq" /> */}
        {/* <ClassPropsSecond name="Abdul Moeez Tariq" /> */}

        {/* React.js Constructor */}
        {/* <Student /> */}
        {/* <Student name="Abdul Moeez Tariq" /> */}

        {/* State & State with Props */}
        {/* <State /> */}
        {/* <State name="moizycodes" /> */}

        {/* Destructuring With Props */}
        {/* <WithProps
          name="Abdul Moeez Tariq"
          age={24}
          designation="Full Stack Developer"
        /> */}

        {/* Destructuring With State */}
        {/* <WithState name="Rameez" age={22} /> */}

        {/* Events */}
        {/* <ClickEvent /> */}
        {/* Event using Props */}
        {/* <ClickEvent name="Abdul Moeez" /> */}
        {/* <BindingEventHandler /> */}

        {/* React Lifecycle Methods */}
        {/* <Mounting city="Lahore" /> */}
        {/* <Updating /> */}
        {/* <UpdatingMethods city="Lahore" /> */}
        {/* <UnMountingParent /> */}

        {/* PassingMethodAsProps */}
        {/* <ParentComponent /> */}

        {/* Conditional Rendering */}
        {/* <Conditionals /> */}

        {/* List / Array Rendering */}
        <Students />
      </>
    );
  }
}

export default App;
