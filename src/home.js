
import { useState } from "react";
import React from "react";
import Signin from "../src/signin.js"
import Signup from "./signup";
 import "./home.css"


const Home = () =>{
    const [isLoggedIn, changeComp] = useState(true);

  const signin = () => {
    
   changeComp(false);
   console.log(isLoggedIn);
  };

  const signup = () => {
   changeComp( true);
   console.log(isLoggedIn);
  }
 
    return(
<div>
<div class="container mt-4">
        <div class="row justify-content-center mt-3 ms-0 me-0 ">
<div class="card shadow col-md-12 rounded" style={{width: "32rem"}}>
    <div class="row head p-2 shadow head">
    <h2 class="text-center text-white">Book My Show</h2>
    </div>
    <div class="text-center text-white icon-white mt-3">
   <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-film" viewBox="0 0 16 16">
  <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z"/>
</svg>
    </div>
    <div class="card-body mt-3">
      <div class="text-center">
          <button type="button"  class="btn  w-50" onClick={signup}>Signup</button>
        <button type="button"  class="btn  w-50" onClick={signin}>Signin</button>
      
          </div>
        { isLoggedIn === true ? <Signup/>: <Signin/> } 
    
    </div>
    </div>
   </div>
  </div>
</div>

    )
}

export default Home;


