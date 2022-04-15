import React from "react";
import Footer from "./Footer";
import { useState } from "react";
import inputEvent from "react";

const Contact = () => {
const [data, setData] = useState({
fullname:"",
phone:"",
email:"",
msg:"",
});
const InputEvent = (event) => {
const { name, value} = event.target;
setData((preval) =>{
return{
...preval,[name]:value,
};
});
};
const formSubmit =(e) => {
e.preventDefault();
alert( "my name is ${data.fullname}");
};
return(
<>
<div className="my-5">
   <h1 className="text-center">Contact US</h1>
</div>
<div className="container Contact_div">
   <div className="row">
      <div className="col-md-6 col-10 mx-auto">
         <form onsubmit={formSubmit}>
            <div class="mb-3">
               <label for="examplforControlInput" class="form-label">
               FullName
               </label>
               <input type="text" 
                  class="form-control" 
                  id="examplforControlInput"
                  name="fullname"
                  value={data.name}
                  onChange={inputEvent} 
                  placeholder="Enter your name" />
            </div>
            <div class="mb-3">
               <label for="examplforControlInput" class="form-label">
               Phone
               </label>
               <input type="text" 
                  class="form-control" 
                  id="examplforControlInput"
                  name="Phone"
                  value={data.Phone}
                  onChange={inputEvent} 
                  placeholder="Enter your mobile number" />
            </div>
            <div class="mb-3">
               <label for="examplforControlInput" class="form-label">
               Email Id
               </label>
               <input type="text" 
                  class="form-control" 
                  id="examplforControlInput"
                  name="Email"
                  value={data.Email}
                  onChange={inputEvent} 
                  placeholder="Enter your Email Id" />
            </div>

            <div class="mb-3">
               <label for="examplforControlInput" class="form-label">
               Text Message:
               </label>
               <textarea type="text" 
                  class="form-control" 
                  id="examplforControlInput"
                  name="Email"
                  value={data.Email}
                  onChange={inputEvent} > 
                  </textarea>
            </div>

            <div className="col-12">
               <button class="btn btn-primary" type="submit">
               Submit form
               </button>
            </div>
         </form>
<Footer / >
         
      </div>
   </div>
</div>
</>
);
};
export default Contact;