import React from 'react'
import img from './Img.js' ;

function ContactUs() {
  return (
    <>
    <div className="w-100 d-block justify-content-center">
<div className="w-100" id="mainrec">
<div className="bggr py-5 ">
<div className="container text-center ">
    <h1 className="mb-3">We Are Eager to Hear from You</h1>
    <p>Please fill out the form below for inquiries to the Hextilion team.</p>
    <p>Our team is standing by, waiting to hear from you, and willing to help 
    answer any questions you may have about our products or services.</p>
    <p>Let us know what your thoughts are below.</p>
</div>
    
<div className="container bg-light  rounded-5 d-flex  flex-wrap  " id="form"  >
<div className="container  m-3">

<div className="row">
<div className="col">
    <div className="mb-3 mt-3">
    <label htmlFor="name" className="form-label">Your Name</label>
    <input type="text" className="form-control" id="name" placeholder="Enter your full name" name="name" />
    </div>
</div>
<div className="col">
   <div className="mb-3 mt-3">
    <label htmlFor="email" className="form-label">Email Address</label>
    <input type="email" className="form-control" id="email" placeholder="Enter your Email ID" name="email" />
    </div>
</div>
</div>


<div className="row">
<div className="col">
    <div className="mb-3 mt-3">
    <label htmlFor="Country" className="form-label">Country</label>
    <select className="form-select" id="Country" name="Country">
      <option>India</option>
      <option>China</option>
      <option>Japan</option>
      <option>London</option>
    </select>
    </div>
</div>
<div className="col">
   <div className="mb-3 mt-3">
    <label htmlFor="phone_no" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="phone_no" placeholder="Enter your Phone number" name="phone_no" />
    </div>
</div>
</div>

<label htmlFor="comment">Message</label>
<textarea className="form-control" rows="5" id="comment" placeholder="Please describe what you need..." name="text"></textarea>
<div className="container-fluid d-flex flex-nowrap justify-content-center mt-3">
    
<button type="button" className="btn btn-lg bggreen text-light gr rounded-5 px-3 ">Send Message
<img src={img.vector2} alt="" className="mx-auto img-fluid" />   
</button>
</div>


</div>
</div>

<div className="container text-center d-flex justify-content-center mt-5 p-5">
  <div className="container">
    <img src={img.vector4}className="mx-auto d-block img-fluid mb-3" />
    <div>309,310- Third Floor Fortune Mall, 
    VIA Road, 3rd Phase, GIDC,
    Vapi, Gujarat 396191</div>  
  </div>  


  <div className="container">
    <img src={img.vector6}className="mx-auto d-block img-fluid mb-3" />
    <div>info@hextilion.com</div> 
    <div>info@hextilion.com</div>  
 
  </div>  

<div className="container">
    <img src={img.vector5} className="mx-auto d-block img-fluid mb-3" />
    <div>+91 1234567890</div>
    <div>+91 1234567890</div>  
  </div>    
</div>
</div>




</div>

</div>
    </>
  )
}

export default ContactUs