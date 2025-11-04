import React,{useEffect} from 'react';
import {useNavigate,useParams} from  'react-router-dom';
import axios from 'axios';
const AddNewForm=()=>{
	                     var textboxes_ids=["ReleaseDate","Description","LastDate","FormFee","Eligibility","unqid"];
                         var Redirect=useNavigate();
                         var {id}=useParams();
                         var counter=0;
                          var [Form,setFormData]=React.useState(
	                                  	                           Object.fromEntries(textboxes_ids.map(id =>[id, ""]))
	                                  	                     	     );
                         useEffect(()=>{
                                        if(id !="add")
                                        {
                                        	    if(counter ==0)
                                              Binddetails(id);
                                        }
                         },[])


                          
	                   function Exit_click() {
	                   	 Redirect('/AdminView');
	                   }

	                   function Save_click()
	                   {
	                   	  var Release=document.getElementsByName("ReleaseDate")[0].value;
	                   	  var Descrip=document.getElementsByName("Description")[0].value;
	                   	  var Last=document.getElementsByName("LastDate")[0].value;
	                   	  var Form=document.getElementsByName("FormFee")[0].value;
	                   	  var Eligible=document.getElementsByName("Eligibility")[0].value;

	                   	  if(Release =="" || Descrip =="" || Last =="" || Form =="" || Eligible == "")
	                   	  {
	                   	  	alert("Please Enter Details");
	                   	  	 return;
	                   	  }
	                   	 
	                   	  
	                   	
	                   	          if(id !="add")
	                   	          {
	                   	          	var update={};
                                            textboxes_ids.map(item=>{
                                            	              if(item !="unqid")
                                            	              update[item]=document.getElementsByName(item)[0].value;
                                                            else
                                                            update[item]=id;	
                                            })

	                   	          	axios.post('https://localhost:44342/exam/UpdateForm',update)
							                	.then((res)=>{
							                		           alert('Update successfully');
                                             Redirect('/AdminView');
							                	})
							                	.catch((err)=>{

							                	})
	                   	          }
	                   	          else{
	                   	          	   axios.post('https://localhost:44342/exam/AddNewForm',Form)
										                	.then((res)=>{
										                		           alert('Save successfully');
			                                             Redirect('/AdminView');
										                	})
										                	.catch((err)=>{

										                	})
	                   	          }
                                
	                   }

	                    const handleChange=(e)=>{
	                                  	                     
	                                  	                       
	                                  	     var{name,value}=e.target;
                                             setFormData(prev=>({ ...prev,[name]:value}));
	            
                                     
	                                  }
	                    function formatJsonDate(jsonDate) {
																    if (!jsonDate) return "";
																    var milliseconds = parseInt(jsonDate.match(/\d+/)[0], 10);
																    var date = new Date(milliseconds);

																    var year = date.getFullYear();
																    var month = ("0" + (date.getMonth() + 1)).slice(-2);  // add leading zero
																    var day = ("0" + date.getDate()).slice(-2);           // add leading zero

																    return `${year}-${month}-${day}`;  // yyyy-MM-dd format
																}

						              
	                  function Binddetails(ids)
                    {
                            counter=1;
				                    axios.get('https://localhost:44342/Exam/RetrieveFormDetails',
				                     {
						                     params: { id: ids }
						                     })
						                    .then(res => {
						                    	      var val=res.data.msg[0];
						                    	      

						                    	      var Release=formatJsonDate(res.data.msg[0].ReleaseDate);
						                    	      var Lastd=formatJsonDate(res.data.msg[0].LastDate);
						                    	      
						                    	    // var val = res.data.msg[0].map(item => {
																		  //           return {
																		  //               ...item,
																		  //               ReleaseDate: formatJsonDate(item.ReleaseDate)  // format DOB here
																		  //           };
																		  //       });
						                    	   document.getElementsByName("ReleaseDate")[0].value=Release;
						                    	   document.getElementsByName("LastDate")[0].value=Lastd;
						                          textboxes_ids.forEach(id=>{
						                          	                    if(id !="ReleaseDate" && id !=="LastDate" && id != "unqid")
						                          	                    {
						                          	                    	var InputElement=document.getElementsByName(id)[0];

                                                       	    InputElement.value=val[id];
						                          	                    }else{
						                          	                    	 
						                          	                    	 
						                          	                    	 
						                          	                    }
                                                       	    
                                                       })
						                         
						                    })
						                    .catch(err => {
						                        alert("Error: " + err);
						                    });
                           }              
                      return(
                      	     <div className="container-fluid">
                                
                                  <header class="text-start">ADD NEW FORM</header>

                                  <div className="container-fluid text-left">
	                   	                <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Release Date</label>
	                   	                         <input type="date" name="ReleaseDate"  onChange={handleChange}   className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Description/Details</label>
	                   	                         <input type="text" name="Description"  onChange={handleChange}  className="form-control"/>
	                   	                    </div>
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Last Date</label>
	                   	                         <input type="date" name="LastDate"  onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                     <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Form Fee</label>
	                   	                         <input type="number" name="FormFee"  onChange={handleChange} className="form-control"/>
	                   	                    </div>
	                   	                </div>

	                   	                 <div className="row">
	                   	                    <div className="col-xl-3 col-lg-6 col-md-12">
	                   	                         <label>Eligibility</label>
	                   	                         <input type="text" name="Eligibility"  onChange={handleChange}  className="form-control"/>
	                   	                    </div>
	                   	                   
	                   	                </div>

	                   	                <div className="row mt-2">                  
						                   	                    <div className="offset-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end ">
						                   	                         <input type="button" className="btn btn-success add" value="Save" onClick={()=>Save_click()}/>
						                   	                         <input type="button" className="btn btn-danger add mx-2" value="Exit" onClick={()=>Exit_click()}/>

						                   	                    </div>             
	                   	                </div>
	                   	          </div>      
                             </div>     
                      	)	
}

export default AddNewForm;