import React from "react";
import { FIREBASE_API_KEY } from "./config";
import Routes from "./Routes";
console.log(FIREBASE_API_KEY);
function App() {
  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
}

export default App;
