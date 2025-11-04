import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const UserView=()=>{

                    var [InvoiceDetails,setInvoiceDetails]=React.useState([]);
                    var counter=0;
                    var redirect=useNavigate();
                    useEffect(()=>{
                                   if(counter==0)
                                   BindApplication();
                    },[])

                     function formatJsonDate(jsonDate) {
                                                                    if (!jsonDate) return "";
                                                                    var milliseconds = parseInt(jsonDate.match(/\d+/)[0], 10);
                                                                    var date = new Date(milliseconds);

                                                                    var year = date.getFullYear();
                                                                    var month = ("0" + (date.getMonth() + 1)).slice(-2); 
                                                                    var day = ("0" + date.getDate()).slice(-2);          

                                                                    return `${year}-${month}-${day}`;  
                                                                }

                  function  BindApplication(){
                          counter=1;
                          axios.get('https://localhost:44342/exam/GetFormDetails')
                                                .then((res)=>{
                                                              var formattedData = res.data.msg.map(item => {
                                                                                    return {
                                                                                        ...item,
                                                                                        ReleaseDate: formatJsonDate(item.ReleaseDate),
                                                                                        LastDate: formatJsonDate(item.LastDate)
                                                                                    };
                                                                                });
                                                              setInvoiceDetails(formattedData);
                                                              
                                                })
                                                .catch((err)=>{
                                                               alert(err.data);
                                                })
                    }

                    function Applied() {
                        redirect('/FormFill');
                    } 
	                return(<div className="container-fluid">
                                   
                                   <header class="text-start">USER VIEW</header>

                                


                                    <div className="table-responsive">
                                           <table class="table  table-bordered table-striped">
                                              <thead>
                                                   <tr>
                                                      <th>Form Release Date</th>
                                                      <th>Description/Details</th>
                                                      <th>Eligibility</th>
                                                      <th>Last Date</th>
                                                      <th>Form Fees</th>
                                                      <th>Apply</th>
                                                   </tr>
                                             </thead>
                                            <tbody>
                                                      {
                                                    InvoiceDetails.length>0
                                                    ?
                                                    InvoiceDetails.map((option)=>
                                                         <tr>
                                                              <td>{option.ReleaseDate}</td>
                                                              <td>{option.Description}</td>
                                                              <td>{option.Eligibility}</td>
                                                              <td>{option.LastDate}</td>
                                                              <td>{option.FormFee}</td>
                                                              
                                                              <td>
                                                                 <button class="btn btn-success fw-bold" onClick={Applied} >Apply</button>
                                                                                            
                                                              </td>
                                                         </tr>
                                                    )
                                                    :
                                                    <h1>No records Found</h1>
                                                  }
                                            </tbody>
                                          </table>  
                                      </div>
	                  	    </div>)
}


export default UserView;