import React from "react";
import web from "../src/images/img7.jpg";
import {NavLink} from "react-router-dom";

const Card =() =>{
	return(
		<>
		<div className="col-10 mx-auto">
         <div className="row gy-4">
         <div className="col-md-4 col-10 mx-auto">
               <div className="card">
  <img src={web} class="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the 
    card title and make up the bulk of the card's content.</p>
    <NavLink to="#" className="btn btn-primary">Go somewhere</NavLink>
  </div>
</div>
</div>
         </div>
      </div>
		</>
		)
};

export default Card;