import React from 'react'
import img from './Img.js' ;

function About() {
  return (
    <>
    <div className="w-100 d-block justify-content-center">
<div className="w-100" id="mainrec">
<div className="d-flex position-relative"id="rec" > 
<img src={img.rec98} className="mx-auto d-block img-fluid position-relative" /> 
<div className="position-absolute d-flex w-100 h-100  container-fluid justify-content-center">
 <div className="align-content-center mb-4 fw-bold ">World-className Chemical Suppliers in North America</div>
 </div>
</div>

<div className="container-fluid d-flex flex-wrap justify-content-center">
  <div className="container my-5">
  <div className=" container fw-bold textgr my-3" > Introducing Hextilion </div>
  <div className="container h1 my-3">
    Hextilion offers the purest chemicals sourced from <span className="textgr"> World-className Manufacturers </span> around the world.
  </div>
  <p className="container">At Hextilion, we are committed to making it easier and more cost-effective to source the chemical 
    ingredients your business requires. Our import and export solutions provide your business with products 
    all year round without interruption.</p>
  <div className="container fw-bold my-3">The quality of your chemicals matter, but so does their cost.</div>
  <p className="container">Our long-standing dedication to offering customers cost-competitive ag chemical solutions 
    and other chemical ingredients encouraged us to maintain pre-existing contracts and relationships with leading 
    manufacturers. These relationships ensure our customers get the best products at the best price possible.
  </p>
  <p className="container  my-3">With years of experience, we ensure your business gets the best specialty 
    and fine chemicals all year around.</p>
</div>
</div>

<div className="d-flex flex-nowrap w-100">
  <div className="container-fluid bggr py-5 px-md-5 ">
    <div className="container d-flex justify-content-center flex-wrap">
    <h2 className="mb-3">Our Mission</h2>  
  <p>At Hextilion, we are committed to making it easier and more cost-effective 
    to source the chemical ingredients your business requires. Our import and export 
    solutions provide your business with products all year round without interruption.</p>
  </div>
  </div>
 <div className="container-fluid bgligr py-5 px-md-5">
  <div className="container d-flex justify-content-center flex-wrap">
    <h2 className="mb-3">Our Vision</h2>
 <p>With chemicals sourced from world-className manufacturers, our vision is to be the number 
  one chemical supplier for speciality, fine chemicals to serve the pharma, food, agricultural,
   oil & gas, and personal care industries.</p>
  </div>
  </div>
  </div>


<div className="container-fluid d-flex flex-wrap justify-content-center my-5">
  <div className="container ">
 <h1 className="fw-bold">Why Our Customers Choose Us</h1>
  <img src={img.rec601} alt="" className="mx-auto d-block img-fluid" />
  
 <p className="mt-3">Our team takes great pride in providing exceptional service, but we do more than that. 
  We deliver tangible results for your business. As a leading provider of agricultural 
  chemical solutions, we take pride in sourcing products all year round without interruption 
  so your business can match the demands customers place on it.</p>
  
  <p>Simply put, we're driven to source the ingredients your business needs. We understand the 
    importance of quality in every product you sell, and competitive price points are equally important.</p>

  <p>So, we put all your needs together to create a business plan. That business plan 
    ensures you get what you need quickly and conveniently.</p>
  
  <p>Whether you're looking for a cosmetic ingredients supplier or food ingredients supplier or are 
    on the hunt for an agriculture product wholesaler, we have you covered.</p>
  </div>
</div>

<div className="bggr py-5 ">
 <div className="d-flex container-fluid m-0 p-0 justify-content-center pt-5">
  <div> <img src={img.rec603} className="mx-auto d-block img-fluid" alt="" /> </div>
  <div className="container-fluid  d-flex flex-wrap  text-center justify-content-center">
    <div className="container fw-bold h3 ">Principles That Set Us Apart</div>
    <div className="container align-content-center"> <span className="fw-bold h3 "> Timeliness</span>
      <p>Our customers require on-time deliveries every time they order from us. 
        We ensure our products arrive quickly and safely through a time-tested delivery process you can trust.</p>
    </div>
  </div> 
 </div>


<div className="container d-flex flex-wrap justify-content-center  rounded-5 bg-light my-5 py-5 ">
  <div className="container m-5">
  <div className="h3 fw-bold">Find Out How Hextilion Can Change Your Business</div>
  <p>Discover how our incredibly talented team and industry-tested processes can 
    transform your business. Reach out to our team today, and let’s get you the 
    best chemical solutions at the best price.</p>
  <div className="mt-5"><button type="button" className="btn bggreen text-light gr rounded-5 d-flex flex-nowrap">Get In Touch</button></div>
  </div>
</div> 
</div>


</div>

</div>
</>
  )
}

export default About