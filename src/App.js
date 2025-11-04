import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './Component/Login';
import Dashboard from './Component/Dashboard';
import AddNewForm from './Component/AddNewForm';
import FormFill from './Component/FormFill';
import UserView from './Component/UserView';
import AdminView from './Component/AdminView';
import Navbar from './Component/Navigation';
import UserId from './Component/UserID';
import {useState,useEffect} from 'react';
import HelpSuggest from './Component/HelpSuggest';



function App() {
                var [isLoggedIn, setIsLoggedIn] = useState(false);
     var value=localStorage.getItem("token");
     var [isSidebarOpen, setIsSidebarOpen] = useState(false);
     var [isUserOpen, setIsUserOpen] = useState(false);
     var [isHelpOpen, setIsHelpOpen] = useState(false);
     const [sidebarMode, setSidebarMode] = useState("default"); // default mode

     
     useEffect(() => {
                        var token = localStorage.getItem("token");
                        setIsLoggedIn(!!token); // sets true if token exists

                      }, []);
     useEffect(() => {
                      var mode = localStorage.getItem("sidebarMode") || "default";
                      setSidebarMode(mode);
                    }, [window.location.pathname]); // re-run when route changes

      var toggleSidebar = () => {
                                
                                setIsSidebarOpen(!isSidebarOpen);
                          };
      var onUserAdm=()=>{
                        
                           setIsUserOpen(!isUserOpen);
                             if (!isUserOpen) setIsHelpOpen(false); 
                           //document.querySelector('.userdiv.open').style.display='block';
      }
      var onHelpSupport=()=>{
                           setIsHelpOpen(!isHelpOpen);
                           if (!isHelpOpen) setIsUserOpen(false);
      }         
  return (
     <div className="App">
                  <BrowserRouter>
                      {isLoggedIn
                      ?
                      (
                      <>    
                       <Navbar onToggleSidebar={toggleSidebar} onUserAdm={onUserAdm} onHelpSupport={onHelpSupport} />
                      
                      <UserId IsUser={isUserOpen} onLoginSuccess={() => setIsLoggedIn(false)} onClose={() => setIsUserOpen(false)}/>
                      <HelpSuggest IsHelp={isHelpOpen} onClose={() => setIsHelpOpen(false)}  />
                     
                      </>
                      )
                      :
                       <Routes>
                               <Route path="/" element={<Login  onLoginSuccess={() => setIsLoggedIn(true)} />}/> 
                        </Routes>

                      }
                      <Routes>                      
                              <Route path="/" element={<Login/>}/>
                              <Route path="/Dashboard" element={<Dashboard/>}/>  
                              <Route path="/AddNewForm/:id" element={<AddNewForm/>}/>  
                              <Route path="/FormFill" element={<FormFill/>}/>  
                              <Route path="/UserView" element={<UserView/>}/>  
                              <Route path="/AdminView" element={<AdminView/>}/>  
                              
                              
                              
                           
                      </Routes> 
                  </BrowserRouter>
    </div>
  );
}

export default App;
