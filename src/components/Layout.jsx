import React, { createContext} from "react";
import NavBar from "./NavBar";


export const Context = createContext("unknown");

function Layout(props) {

  return (
    <>
      <div>
        <NavBar />
        {props.children}
      </div>
    </>
  );
}

export default Layout;
