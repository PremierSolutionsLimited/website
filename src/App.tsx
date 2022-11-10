import React, { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import AppNavigator from "./services/context";

const App = () => {
  return (
    <Fragment>
      <Toaster
        position={"top-center"}
        reverseOrder={false}
        toastOptions={{
          // Define default options

          className: "",
          style: {
            margin: "40px",
            background: "#363636",
            // background: "#00e676",
            color: "#fff",
            zIndex: 1,
            // width: "28vh",
          },
          duration: 4000,
          // Default options for specific types
          success: {
            duration: 4000,
            style: {
              textAlign: "center",
            },
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
          error: {
            style: {
              textAlign: "center",
              background: "#f44336",
            },
            duration: 4000,
          },
          
        }}
      />
      <AppNavigator />
    </Fragment>
  );
};

export default App;
