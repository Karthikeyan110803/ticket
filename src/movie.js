import React from "react";
function movie(){
  return(
    <div>
<nav class="navbar navbar-expand-lg bg-danger ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-ticket-perforated" viewBox="0 0 16 16">
  <path d="M4 4.85v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9zm-7 1.8v.9h1v-.9zm7 0v.9h1v-.9z"/>
  <path d="M1.5 3A1.5 1.5 0 0 0 0 4.5V6a.5.5 0 0 0 .5.5 1.5 1.5 0 1 1 0 3 .5.5 0 0 0-.5.5v1.5A1.5 1.5 0 0 0 1.5 13h13a1.5 1.5 0 0 0 1.5-1.5V10a.5.5 0 0 0-.5-.5 1.5 1.5 0 0 1 0-3A.5.5 0 0 0 16 6V4.5A1.5 1.5 0 0 0 14.5 3zM1 4.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v1.05a2.5 2.5 0 0 0 0 4.9v1.05a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-1.05a2.5 2.5 0 0 0 0-4.9z"/>
</svg> <span style="font-size:large;">My Show</span></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-white" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link  text-white" aria-current="page" href="#" >Offers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#">Reviews</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Check In
          </a>
          <ul class="dropdown-menu text-white">
            <li><a class="dropdown-item" href="#">Tickets</a></li>
            <li><a class="dropdown-item" href="#">Timings</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Shows</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown text-white">
          <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select Theaters
          </a>
          <ul class="dropdown-menu text-white">
            <li><a class="dropdown-item" href="#">GOPURAM CINEMAS</a></li>
            <li><a class="dropdown-item" href="#">RADIEN CINEMAS</a></li>
            <li><a class="dropdown-item">AMBIGA CINEMAS</a></li>
            <li><a class="dropdown-item" href="#">CINI PRIYA</a></li>
            <li><a class="dropdown-item" href="#"> ANNAMALAI CINEMAS</a></li>
            <li><a class="dropdown-item" href="#">SHANMUUGA CINEMAS</a></li>
            <li><a class="dropdown-item" href="#">MIDLAND CINEMAS</a></li>
            <li><a class="dropdown-item" href="#">SDC CINEMAS</a></li>
            <li><a class="dropdown-item" href="#">TAMIL JAYA</a></li>
            <li><a class="dropdown-item" href="#">INOX</a></li>
      </ul>
      </li>
      </ul>
     
      
    </div>
  </div>
  <button type="submit">LOGIN</button>&nbsp;&nbsp;&nbsp;
  <button type="submit me-2">REGISTER</button>&nbsp;
</nav>
<div class="container-fluid">
  <div class="row justify-content-around">

<div class="card mt-5 shadow col-md-4" style="width: 18rem;" >
  <img  class="card-img-top" alt="..." />
  <div class="card-body">
    <p class="card-text"></p>
    <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg></p>
  </div>
</div>
</div>
</div>

</div>
)

}

export default movie;