import React, { useState } from 'react';
function Admin(){
  
    const [movieData, setmovieData]=useState({
        moviename:"",
        image:"",
        rating:""
      })
      const handleChange =(event)=>{
        const { name, value } = event.target;
        setmovieData({...movieData,[name]:value})
        console.log(name, value);
        console.log(movieData);
      }
     
  const handlesubmit = ( ) =>{
    const mData={
      moviename:movieData.moviename,
     image:movieData.image,
     rating:movieData.rating,
      
    }
    fetch("http://localhost:8080/admin/set",{      
      method:"POST",
      headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mData),

  }) .then((res) =>{
      res.json();
      
  }).then((data) =>{
    console.log(data);
  })
  console.log(mData);
}


    return(
      <div className='row justify-content-center'>
        <div className='q  row justify-content-center' style={{width:"700px"}}> 
        <div>
            <h3 class="text-center mt-5">ADMIN PAGE</h3>
            <h2 className='text-center'>Welcome!</h2>
           <form class="mt-5">
            <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" > Movie Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  name="moviename" value={movieData.moviename}
    onChange={handleChange} />
    
    <label for="exampleInputPassword1" class="form-label">Image</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="image" value={movieData.image} 
     onChange={handleChange}/>
  
    <label for="exampleInputPassword1" class="form-label">Ratings</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="rating" value={movieData.rating} 
     onChange={handleChange}/>
 
  <button class="btn btn-danger rounded btnn" type="button" onClick={handlesubmit} onChange={handleChange}>UPDATE</button>
</div>
</form> 
        </div>
        </div>
        </div>
    )
    }
export default Admin;