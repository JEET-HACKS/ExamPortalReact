import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const FormFill=()=>{
	                                       var textboxes_ids=["AcDate",
	                                  	                 "Full_Name",
	                                  	                 "Father_Name",
	                                  	                 "Mother_Name",
	                                  	                 "DOB",
	                                  	                 "Gender",
	                                  	                 "Email",
	                                  	                 "State",
	                                  	                 "MobileNo",
	                                  	                 "Course",
	                                  	                 "Exam_Type",
	                                  	                 "Semester",
	                                  	                 "Photo",
	                                  	                 "Idproof",
	                                  	                 "signature",
	                                  	                 "subjects",
	                                  	                 "caste",
	                                  	                 "Exam_Name",
	                                  	                 "Payment_Method",
	                                  	                 "Payment_Method_Id",
	                                  	                 "Amount"
	                                  	                ];

	                                  	     var [Form,setFormData]=React.useState(
	                                  	                                    Object.fromEntries(textboxes_ids.map(id =>[id, ""]))
	                                  	                     	            );           
	                const [tab, setTab] = React.useState('login');
	                var redirect=useNavigate();


	                function Save_click()
	                {
	                	console.log(Form);
	                	axios.post('https://localhost:44342/exam/FormDetails',Form)
	                	.then((res)=>{

	                	})
	                	.catch((err)=>{

	                	})


	                }

	                const handleChange=(e)=>{
	                                  	                     
	                                  	                       
	                                  	     var{name,value}=e.target;
                                             setFormData(prev=>({ ...prev,[name]:value}));
	            
                                     
	                                  }

	                  function Exit_click() {
	                                  	redirect("/UserView");
	                                  }                
                    return(
                    	   <div className="container-fluid">
                                
                                  <header class="text-start">USER FORM FILL</header>

                                  <div className="container-fluid">
                                        <div className="row">
                                              <div className="col-md-12 d-flex align-items-end px-0">
                                                    <input type="button" value="+" className="btn btn-default" />       
                                                    <h5 className="fw-bold">STUDENT DETAILS</h5>
                                              </div>
                                              <hr style={{ border: '2px solid black' }}/>   
                                        </div>
                                  </div>

	                               <div className="container-fluid text-left px-0">
	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label> Date</label>
	                   	                         <input type="date" name="AcDate" onChange={handleChange}  className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Full Name</label>
	                   	                         <input type="text" name="Full_Name" onChange={handleChange}   className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Father's Name</label>
	                   	                         <input type="text" name="Father_Name" onChange={handleChange}   className="form-control"/>
	                   	                    </div>
	                   	                     <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Mother's Name</label>
	                   	                         <input type="text" name="Mother_Name" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>DOB</label>
	                   	                         <input type="date" name="DOB"  onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Gender</label>
	                   	                         <select className="form-control" onChange={handleChange} name="Gender">
	                   	                                 <option>Select Gender</option>
	                   	                                 <option>Male</option>
	                   	                                 <option>Female</option>
	                   	                                 <option>Trans</option>
	                   	                         </select>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Email</label>
	                   	                         <input type="email" name="Email" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>State</label>
	                   	                         <input type="text" name="State" onChange={handleChange}  className="form-control"/>
	                   	                    </div>
	                   	                    

	                   	                </div>

	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Mobile No</label>
	                   	                         <input type="text" name="MobileNo" onChange={handleChange} className="form-control"/>
	                   	                    </div>

	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Caste</label>
	                   	                         <input type="text" name="caste" onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Subjects</label>
						                   	                         <input type="text" name="subjects" onChange={handleChange} className="form-control"/>
						                   	          </div>
	                   	                </div>
	                   	           </div>

	                   	           <div className="container-fluid">
                                        <div className="row">
                                              <div className="col-md-12 d-flex align-items-end px-0">
                                                    <input type="button" value="+" className="btn btn-default" />       
                                                    <h5 className="fw-bold">ACADEMIC DETAILS</h5>
                                              </div>
                                              <hr  style={{ border: '2px solid black' }}/>   
                                        </div>
                                  </div>
	                        <div className="container-fluid text-left px-0">
						                   	                <div className="row">
						                   	                    
						                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Course</label>
						                   	                         <input type="text" name="Course"  onChange={handleChange} className="form-control"/>
						                   	                    </div>
						                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Exam Type</label>
						                   	                         
						                   	                         <select className="form-control" onChange={handleChange} name="Exam_Type">
						                   	                                 <option>Select Exam Type</option>
						                   	                                 <option>Backlog</option>
						                   	                                 <option>Main</option>
						                   	                                 
	                   	                         					</select>
						                   	                    </div>
						                   	                     <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Semester/Year</label>
						                   	                         <input type="text" name="Semester" onChange={handleChange} className="form-control"/>
						                   	                    </div>

						                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Photo</label>
						                   	                         <input type="file" name="Photo" onChange={handleChange} className="form-control"/>
						                   	                    </div>

						                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Exam Name</label>
						                   	                          
						                   	                         <select className="form-control" onChange={handleChange} name="Exam_Name">
						                   	                                 <option>Select Exam Type</option>
						                   	                                 <option>Backlog</option>
						                   	                                 <option>Main</option>
						                   	                                 
	                   	                         					</select>
						                   	                    </div>
						                   	                </div>
						             </div>

						             <div className="container-fluid">
                                        <div className="row">
                                              <div className="col-md-12 d-flex align-items-end px-0">
                                                    <input type="button" value="+" className="btn btn-default" />       
                                                    <h5 className="fw-bold">DOCUMENTS DETAILS</h5>
                                              </div>
                                              <hr  style={{ border: '2px solid black' }}/>   
                                        </div>
                         </div>  
						             <div className="container-fluid text-left px-0">  
						                                    <div className="row">    	                    
						                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Idproof</label>
						                   	                         <input type="file" name="Idproof" onChange={handleChange} className="form-control"/>
						                   	                    </div>
						                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>signature</label>
						                   	                         <input type="file" name="signature" onChange={handleChange} className="form-control"/>
						                   	                    </div>
						                   	                    
						                   	                </div>

						            <div className="container-fluid">
                                        <div className="row">
                                              <div className="col-md-12 d-flex align-items-end px-0">
                                                    <input type="button" value="+" className="btn btn-default" />       
                                                    <h5 className="fw-bold">PAYMENT DETAILS</h5>
                                              </div>
                                              <hr  style={{ border: '2px solid black' }}/>   
                                        </div>
                         </div> 

                         <div className="container-fluid text-left px-0">  
						                                    <div className="row">    	                    
						                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Payment Method</label>
						                   	                         <select className="form-control" name="Payment_Method" onChange={handleChange}>
						                   	                                 <option>Select Payment Method</option>
						                   	                                 <option>Google Pay</option>
						                   	                                 <option>Debit Card</option>
						                   	                                 <option>Credit Card</option>
						                   	                         </select>
						                   	                    </div>
						                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Payment Method Id</label>
						                   	                         <input type="text" name="Payment_Method_Id" onChange={handleChange} className="form-control"/>
						                   	                    </div>
						                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
						                   	                         <label>Amount</label>
						                   	                         <input type="text" name="Amount" onChange={handleChange} className="form-control"/>
						                   	                    </div>
						                   	                    
						                   	                </div>
						              </div>     	                      	                

						                   	                <div className="row mt-2">                  
						                   	                    <div className="offset-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end ">
						                   	                         <input type="button" className="btn btn-success add" value="Save" onClick={Save_click}/>
						                   	                         <input type="button" className="btn btn-danger add mx-2" value="Exit" onClick={Exit_click}/>

						                   	                    </div>             
	                   	                					</div>
				                   	             
	                   	                          </div> 		

	                   	                         						
                             </div>  
                    	  )
}

export default FormFill;