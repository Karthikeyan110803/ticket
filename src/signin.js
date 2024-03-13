import React, { useState } from 'react';


import { useNavigate } from 'react-router-dom';


function Signin() {
  const navigate = useNavigate();
 const [SigninData, setData]=useState({
    name:"",
   
    password:"",
   
  })
  
   const handleChange =(event)=>{
      const { name, value } = event.target;
      setData({...SigninData,[name]:value})
      console.log(name, value);
      console.log(SigninData);
    }

   const addData=()=>{
      const sgnData={
        name:SigninData.name,
       
        password:SigninData.password,
      
        
      }
      console.log(sgnData);
fetch("http://localhost:8080/User/signin",{      
      method:"POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sgnData),

  }) .then((res) =>{
    if(!res.ok){
        // throw new error("Failed to Fetch data");
        console.log("failed to fetch");
    }
    else{
      return res.json()
      
    }
   
    
    
}) 
// let nwarning = document.getElementById("nameWarning");
// let pwarning = document.getElementById("passwarning");

// if(SigninData.name == '' || SigninData.name == null){
// nwarning.innerHTML="Enter your Name";
// nwarning.style.color="red";
// }else if(SigninData.password == '' || SigninData.password == null){
//   pwarning.innerHTML="Enter Password";
// pwarning.style.color="red";
// }else if(SigninData.name == '' || SigninData.name == null && SigninData.password == '' || SigninData.password == null){
//   nwarning.innerHTML="Enter your Name";
// nwarning.style.color="red";
// pwarning.innerHTML="Enter Password";
// pwarning.style.color="red";

// }
navigate("/main")
    }
    return (
        <div>
           
            <form class="mt-3">
            <div class="mb-2">
            <label for="exampleInputEmail1" class="form-label" >Name</label>
            <input type="email" className="form-control" id="exampleInputEmail1"  name="name" value={SigninData.name}
            onChange={handleChange} /> 
  </div>
  <p id="nameWarning"></p>
  
  <div class="mb-2">
    <label for="exampleInputEmail1" class="form-label" >Password</label>
    <input type="email" class="form-control" id="exampleInputEmail1"  name="password" value={SigninData.password} 
     onChange={handleChange}/>
    
    
  </div>
  <p id="passWarning"></p>
  
  
  <div class="d-grid gap-2" >
  <button class="btn btnn btn-danger rounded" type="button" onClick={addData}l>Next</button> 
</div>
</form> 
  </div>


 
       
      
    );
}



export default Signin;

