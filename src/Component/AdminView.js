import React,{useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AdminView=()=>{
                    var [InvoiceDetails,setInvoiceDetails]=React.useState([]);
                    var counter=0;
                    
                    useEffect(()=>{
                                   if(counter !=1)
                                   GetAdminview();
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
                    function GetAdminview()
                    {
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
                    var redirect=useNavigate();

                    function Add_click() {
                        redirect('/AddNewForm/add');
                    }

                   function Delete_click(id) {
                    alert(id);
                    axios.get('https://localhost:44342/Exam/DeleteFormDetails', {
                        params: { id: id }
                    })
                    .then(res => {
                           GetAdminview();
                    })
                    .catch(err => {
                        alert("Error: " + err);
                    });
                    }

                    function Edit_click(id)
                    {
                    redirect(`/AddNewForm/${id}`);
                    // axios.get(`https://localhost:44342/Exam/RetrieveFormDetails/${id}`)
                    // .then(res => {
                           
                    // })
                    // .catch(err => {
                    //     alert("Error: " + err);
                    // });
                    }





	                return(<div className="container-fluid">
                                   
                                   <header class="text-start">ADMIN VIEW</header>

                                   <div className="row mechdetail mb-3">
                                       <div className="col-lg-8 col-md-12 col-sm-12 col-12 mb-2">
                                           <input type="text" className="form-control" Placeholder="Type here to search"/>
                                       </div>
                                       <div className="col-lg-2 col-md-3 col-sm-3 col-6 mx-col-2">
                                           <input type="button"  className="btn btn-secondary w-100 fw-bold" value="Search"/>
                                       </div>
                                        <div className="col-lg-2 col-md-3 col-sm-3 col-6 ml-col-2 ">
                                           <input type="button" className="btn btn-primary w-100 fw-bold" value="Add New" onClick={()=>Add_click()} />
                                       </div>
                                   </div>


                                    <div className="table-responsive">
                                           <table class="table  table-bordered table-striped">
                                              <thead>
                                                   <tr>
                                                      <th>Form Release Date</th>
                                                      <th>Description/Details</th>
                                                      <th>Last Date</th>
                                                      <th>Form Fees</th>
                                                      <th>Action</th>
                                                     
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
                                                              <td>{option.LastDate}</td>
                                                              <td>{option.FormFee}</td>
                                                              
                                                              <td>
                                                                 
                                                                 <input type="button" className="btn btn-danger fw-bold" onClick={()=>Delete_click(option.unqid)} value="Delete" />
                                                                 <input type="button" className="btn btn-success mx-2 fw-bold" onClick={()=>Edit_click(option.unqid)} value="Edit" />
                                                                                            
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


export default AdminView;