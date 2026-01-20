import React from 'react'
import img from './Img.js' ;


function Footer() {
  return (
    <>
    <footer>
  <div class="d-flex flex-nowrap container justify-content-center py-5">
    <div class="container"><img src={img.Hextilion} class="mx-auto d-block img-fluid"  alt=""/></div>

   <div class="container">
    <div class="mb-3">Home</div>
    <div class="mb-3">About us</div>
    <div class="mb-3">Product</div>
    <div class="mb-3">News</div>
    <div class="mb-3">Contact Us</div>
  </div>

  
   <div class="container">
    <div class="mb-3">Facebook</div>
    <div class="mb-3">Instagram</div>
    <div class="mb-3">Linkedin</div>
    <div class="mb-3">Twitter</div>
  </div>
  
  <div class="container">
    <div class="fw-bold mb-3">Corporate Office</div>
    <div class="mb-3">309,310- Third Floor Fortune Mall, VIA Road, 3rd Phase, GIDC, Vapi, Gujarat 396191</div>
    <div><span class="fw-bold mb-3">Phone :</span> +91 1234567890</div>
    <div><span class="fw-bold mb-3">Fax  :</span> +91 1234567890</div>
    <div><span class="fw-bold mb-3">Email : </span> info@hextilion.com</div>    
  </div>
</div>

<div class="bg-light container-fluid d-flex justify-content-center py-5">
Copyright © 2022 Allied infosoft All rights reserved.
</div>
</footer>
    </>
  )
}

export default Footer