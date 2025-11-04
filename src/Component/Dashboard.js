import React, {useEffect} from 'react';
import { MdDashboard } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { LuMessageCircleHeart } from "react-icons/lu";
import { GrUserWorker } from "react-icons/gr";
import { TbFileInvoice } from "react-icons/tb";
import { IoIosBriefcase } from "react-icons/io";
import { FcSalesPerformance } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdAccountBalance } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import axios from 'axios';


const DashBoard=()=>{
                      var [GetDashboardDetails,SetDashboardDetails]=React.useState([]);
                      var [GetMechanicCount,SetMechanics]=React.useState([]);
                      var [ServiceInvoice,SetServiceInvn]=React.useState([]);
                      var [ServiceInvoiceAmt,SetServiceInvnAmt]=React.useState([]);
                      var [TotalVehicle,SetTotalVehicle]=React.useState([]);
                      var [TotalInvoice,SetTotalInvoice]=React.useState([]);
                      var [payment,Setpayment]=React.useState([]);
                      var [InvoiceDetails,setInvoiceDetails]=React.useState([]);
                      var [formuser,setformuser]=React.useState([]);
                      var [totalusers,settotalusers]=React.useState([]);
                      var [totalforms,settotalforms]=React.useState([]);
                      
                      
                      var counter=0;
                      
                   useEffect(()=>{
                                   
                                   if(counter==0)
                                   {

                                   	 BindApplication();
                                   	 
                                   }
                                  
                   },[])

                  function formatJsonDate(jsonDate) {
						    if (!jsonDate) return "";
						    var milliseconds = parseInt(jsonDate.match(/\d+/)[0], 10);
						    var date = new Date(milliseconds);

						    var day = ("0" + date.getDate()).slice(-2);
						    var month = ("0" + (date.getMonth() + 1)).slice(-2);
						    var year = date.getFullYear();

						    return day + "/" + month + "/" + year;
						}

                  

                   function  BindApplication(){
                          counter=1;

                          axios.get('https://localhost:44342/exam/GetQuickDetails')
                                                .then((res)=>{
                                                              
                                                              Setpayment(res.data.msg[0].payment);
                                                              setformuser(res.data.msg[0].formuser);
                                                              settotalusers(res.data.msg[0].totalusers);
                                                              settotalforms(res.data.msg[0].totalforms);
                                                              
                                                })
                                                .catch((err)=>{
                                                               alert(err.data);
                                                })

                          axios.get('https://localhost:44342/exam/GetDashDetails')
                                                .then((res)=>{
                                                                var formattedData = res.data.msg.map(item => {
																		            return {
																		                ...item,
																		                AcDate: formatJsonDate(item.AcDate)  // format DOB here
																		            };
																		        });
																
                                                              setInvoiceDetails(formattedData);
                                                              
                                                })
                                                .catch((err)=>{
                                                               alert(err.data);
                                                })


                    }



	                 return(
                            <div className="container-fluid">
                                
                                  <header class="text-start">ADMIN DASHBOARD</header>
                               <div className="row mb-2">

                               <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#1da256,#48d483)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Total Application Form</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{TotalInvoice}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                     <TbFileInvoice style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px'}}>{totalforms}</span><a href="/AdminView">Click Here To Add</a></span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>
                                    
                               </div>
                                    
                                    <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#c012e2,#eb64fe)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Total Registered User</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{TotalInvoice}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">
                                                                   
                                                                      <GrUserWorker style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px'}}>{totalusers}</span></span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>
                                              
                                              
                                           </div>
                                           
                                           
                                       </div>
                                    </div>
                                    
                                    <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#2c78e5,#60aff5)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Total Form Filled</h5>
                                                    <span className="fw-bold fs-4 pt-0">{ServiceInvoice}</span>  
                                                           
                                                    
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">
                                                                   <TbFileInvoice style={{'position':'relative','bottom':'10px'}}/>
                                                                  
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px'}}>{formuser}</span></span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>
                                              
                                              
                                           </div>
                                           
                                           
                                       </div>
                                    </div>
                                    

                                    <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#ff6a00,#ee0979)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Revenue From Forms</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{ServiceInvoiceAmt}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                     <MdAccountBalance style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark text-light" style={{'border-radius':'5px'}}>{payment}</span></span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>  
                               </div>
                               </div>

                               <div className="table-responsive">
                                           <table class="table  table-bordered table-striped">
                                              <thead>
                                                   <tr>
                                                      <th>Form Fill Date</th>
                                                      <th>Full Name</th>
                                                      <th>Description</th>
                                                      <th>Caste</th>
                                                      <th>Amount</th>
                                                  
                                                   </tr>
                                             </thead>
                                            <tbody>
                                                      {
                                                    InvoiceDetails.length>0
                                                    ?
                                                    InvoiceDetails.map((option)=>
                                                         <tr>
                                                              <td>{option.AcDate}</td>
                                                              <td>{option.Full_Name}</td>
                                                              <td>{option.Exam_Name}</td>
                                                              <td>{option.caste}</td>
                                                              <td>{option.Amount}</td>
                                                         </tr>
                                                    )
                                                    :
                                                    <h1>No records Found</h1>
                                                  }
                                            </tbody>
                                          </table>  
                                      </div>
                               
                               <div className="row" style={{'display':'none'}}>

                                    <div className=" col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#e74c3c, #f1c40f)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Total Mechanics</h5>
                                                     <span className="fw-bold fs-4 pt-0">{GetMechanicCount}</span>
                                                       
                                                    
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                  <GrUserWorker style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+95%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>
                                    
                               </div>


                               <div className=" col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#1abc9c,#8e44ad)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Invoice Revenue</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{ServiceInvoiceAmt}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                  <FcSalesPerformance style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+95%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>
                                    
                               </div>

                               <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#a2c2e3, #3498db)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Service Revenue</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{ServiceInvoiceAmt}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                    <BsGraphUpArrow style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+95%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>
                                    
                               </div>

                               <div className="col-xl-3 col-lg-6 col-md-6 mb-2">
                                       <div class="card text-left text-light" style={{'background':'linear-gradient(to right,#ff6a00,#ee0979)','height':'150px'}}>              
                                          <div class=" row card-body" >
                                               <div className="col-lg-9 col-md-10 col-sm-6 col-6"  style={{'padding':'0 0 0 12px'}}>
                                                    <h5 class="card-title">Balance</h5>          
                                                    <span className="fw-bold fs-4 pt-0">{ServiceInvoiceAmt}</span>
                                               </div>
                                               <div className="col-lg-3 col-md-2 col-sm-6 col-6 text-end">
                                                    <span className="icon fs-1">                         
                                                                     <MdAccountBalance style={{'position':'relative','bottom':'10px'}}/>
                                                    </span>
                                               </div>

                                               <div className="row mt-4">
                                                    <div className="col-lg-10 col-md-10 col-sm-10 col-10">
                                                          <span className="mt-2 fw-bold"><span class="p-1 bg-dark" style={{'border-radius':'5px','opacity':'0.5'}}>+95%</span> Last Month</span>
                                                    </div>
                                                    <div className="col-lg-2 col-md-2 col-sm-2 col-2 text-end">
                                                         <BsThreeDotsVertical style={{'position':'relative','left':'20px'}}/>
                                                    </div>
                                               </div>                  
                                           </div>            
                                       </div>  
                               </div>
                            </div>
                          </div>  
	                 	    )
}
export default DashBoard;
