import React,{useState} from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Login=()=>{
	             const [tab, setTab] = useState('login');
	             var   [Role,SetRole]=useState();
  	             var   [Id,SetId]    =useState();
                 var   [UserName,SetUserName]=useState();
                 var   [Password,SetPassword]=useState();
                 var   [ConfirmPassword,SetConfirmPassword]=useState();
                 var redirect=useNavigate();

                 function Signup_click()
                 {
                     
                     if(Role =="" || Role ==undefined || Id =="" || Id ==undefined || Password =="" || Password ==undefined)
                 	{
                         alert("Please Enter Details");
                         return;
                 	}
                     axios.post('https://localhost:44342/exam/signup', {
							    Role: Role,UserId:Id,pswd:Password 
							})
							.then((res) => {
							    alert(res.data.message);
							})
							.catch((err) => {
							    console.error(err);
							});


                 }
                 function Login_click()
                 {

                 	if(Role =="" || Role ==undefined || Id =="" || Id ==undefined || Password =="" || Password ==undefined)
                 	{
                         alert("Please Enter Details");
                         return;
                 	}
                 	axios.get('https://localhost:44342/exam/Login', {
							  params: {
							    Role: Role,
							    UserId: Id,
							    pswd: Password
							  }
							})
							.then((res) => {
							  alert(res.data.message);
							  localStorage.setItem("userid",Id);	    
                              localStorage.setItem("token",Role);
                              if(Role == "Admin")
                              redirect('/Dashboard');
                              else
                              	redirect('/UserView');
							})
							.catch((err) => {
							  console.error(err);
							});

                 	
                 }
                 
	             return(
	             	
	             	  <div className="bg-container d-flex justify-content-center align-items-center">
						  <div className="login-card bg-dark text-white rounded p-4" style={{ width: 380, height: 400 }}>
						   
						    <div className="text-center mb-3">
						      <h5 className="fw-bold">Exam Portal</h5>
						      <hr className="border-secondary" />
						    </div>

                           {/* Tabs */}
						    <div className="d-flex mb-4 border-bottom border-secondary">
						      {['login','signup'].map((t) => (
						        <div
						          key={t}
						          className={`flex-fill text-center py-2 ${tab === t ? 'border-bottom border-info text-info fw-bold' : 'text-secondary'}`}
						          style={{ cursor: 'pointer' }}
						          onClick={() => setTab(t)}
						        >
						          {t === 'login' ? 'Login' : 'Sign Up'}
						        </div>
						      ))}
						    </div>

    
					    <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
					      <div
					        style={{
					          display: 'flex',
					          width: '200%',
					          height: '100%',
					          transform: tab === 'login' ? 'translateX(0%)' : 'translateX(-50%)',
					          transition: 'transform 0.4s ease',
					        }}
					      >
					   
					        <form style={{ width: '50%', padding: '0 10px' }}>
					          <div className="mb-3 input-group">
					            <span className="input-group-text bg-secondary border-0"> <FaUser /></span>
					            <select className="form-control bg-secondary border-0" onChange={(e)=>SetRole(e.target.value)}>
					                     <option>Select Role</option>
					                     <option>User</option>
					                     <option>Admin</option>
					            </select>
					          </div>
					          <div className="mb-3 input-group">
					            <span className="input-group-text bg-secondary border-0"><FaUser /></span>
					            <input type="text" className="form-control bg-secondary border-0" placeholder="New User ID" onChange={(e)=>SetId(e.target.value)} />
					          </div>
					          <div className="mb-3 input-group">
					            <span className="input-group-text bg-secondary border-0"><FaLock /></span>
					            <input type="password" className="form-control bg-secondary border-0" placeholder="Create Password" onChange={(e)=>SetPassword(e.target.value)} />
					          </div>
					          <input type="button" className="btn btn-primary w-100" style={{'backgroundColor':'#164deb'}} value="Login" onClick={Login_click} />
					        </form>

					       
					        <form style={{ width: '50%', padding: '0 10px' }}>
					          <div className="mb-3 input-group">
					            <span className="input-group-text bg-secondary border-0"> <FaUser /></span>
					            <select className="form-control bg-secondary border-0" onChange={(e)=>SetRole(e.target.value)}>
					                     <option>Select Role</option>
					                     <option>User</option>
					                     <option>Admin</option>
					            </select>
					          </div>
					          <div className="mb-3 input-group">
					            <span className="input-group-text bg-secondary border-0"><FaUser /></span>
					            <input type="text" className="form-control bg-secondary border-0" placeholder="New User ID" onChange={(e)=>SetId(e.target.value)} />
					          </div>
					          <div className="mb-3 input-group">
					            <span className="input-group-text bg-secondary border-0"><FaLock /></span>
					            <input type="password" className="form-control bg-secondary border-0" placeholder="Create Password" onChange={(e)=>SetPassword(e.target.value)} />
					          </div>
					         

					          <input type="button" className="btn btn-success w-100 mb-2" style={{ backgroundColor:'#28a745' }} value="Sign Up" onClick={Signup_click} />
					          
					        </form>
      </div>
    </div>
  </div>
</div>


	             	    )
}

export default Login;