import React from "react";
import ReactNotification from "react-notifications-component";

import Contact from "./components/Contact";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Stack from "./components/Stack";
import Work from "./components/Work";

import "react-notifications-component/dist/theme.css";

const App = () => {
  return (
    <>
      <ReactNotification />
      <div>
        <Navigation />
        <Header />
        <Work />
        <Stack />
        <Contact />
      </div>
    </>
  );
};

export default App;
