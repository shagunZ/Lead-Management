import React from "react";
import { Link } from "react-router-dom";
import Header from "../Header";

function Home(props) {
  return (
    // <div>
    //   <div>
    //     <h1>
    //       <Link to="/login">Login</Link>
    //     </h1>
    //     <br />
    //     <h1>
    //       <Link to="/signup">Signup</Link>
    //     </h1>
    //   </div>

    //   <br />
    //   <br />
    //   <br />

    //   <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2>
    // </div>

    <div className="w-full border">
      <Header/>
      <div className="font-bold text-xl text-accent-dark p-5">{props.name ? `Welcome - ${props.name}` : "Login please"}</div>
    </div>
  );
}

export default Home;
