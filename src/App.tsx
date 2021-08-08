import React from "react";
import { Global } from "@emotion/react";

import Todo from "./features/todo";

function App() {
  return (
    <div>
      <Global
        styles={{
          "*": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box"
          },
          body: {
            fontSize: "1.1rem",
            fontFamily: "'Quicksand', sans-serif",
            height: "100vh",
            background:
              "radial-gradient(circle, rgb(255 255 255) 0%, rgb(255 166 165) 100%)"
          }
        }}
      />
      <Todo />
    </div>
  );
}

export default App;
