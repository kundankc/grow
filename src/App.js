import { Route, Routes, Link, NavLink } from 'react-router-dom';
import Popup from 'reactjs-popup';
import './App.css';
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Courses from './components/courses';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
    MDBCol
} from 'mdb-react-ui-kit';
import { useRef, useState } from 'react';
import { auto } from 'async';

function App() {
    const [set,setda] = useState("")
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
  const dat = (e) =>{
     var n =   e.target.getAttribute("data-att");
     if(n==1){
         console.log("heyyy 1")
     }else if(n==2){
 console.log("hey    2")
     }else if(n==3){
        console.log("hey    3")
            }
            else if(n==4){
                console.log("hey    4")
                    }else if(n==5){
                        console.log("hey   5")
                            }





   console.log(n)
  }
    const college = [{ name: "Engineering", len: 3,id:6 }, { name: "Sciences", len: 5 ,id:7}, { name: "Art and Humanities", len: 7,id:8 },
    { name: "Computer Application", len: 6 ,id:1}, { name: "Management Studies", len: 2 ,id:2}, { name: "Legal Studies", len: 8 ,id:3}, { name: "Commerce", len: 5 ,id:4}, { name: "Pharmasuitical Sciences", len: 7 ,id:5}
  ,{name:"Agriculture " ,len:8 ,id:10}]
    return <>
        <div className="container-xxl position-relative p-0" >
            <nav className="navbar bg-dark navbar-expand-lg navbar-dark  px-4 px-lg-5 py-3 py-lg-0 navbar-dark" >
                <a href="" className="navbar-brand p-0">
                    <h1 className="text-primary m-0"><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgPAKlOVfLwnrDyaThbNbgFZMZGa0-1YIw3fEFNOPlA&s' className="fa fa-question-circle" /> &nbsp; Grow Eduversity</h1>
                    {/* <img src="img/hero.png"/> */}
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link to={"/"} className="nav-item nav-link ">Home</Link>
                        <Link to={"/about"} className="nav-item nav-link">About</Link>
                        <NavLink to={"/courses"} className="nav-item nav-link">Courses</NavLink>
                        <div className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</Link>
                            <div className="dropdown-menu m-0">
                                <Link to={"/placement"} className="dropdown-item">Placement</Link>
                                <Link to={"/about"} className="dropdown-item">Training</Link>
                                <Link onClick={toggleShow} className="dropdown-item">Courses</Link>
                            </div>
                        </div>

                        <NavLink to={"/contact"} className="nav-item nav-link">Contact</NavLink>
                    </div>
                    <NavLink to={"/contact"} className="btn btn-primary py-2 px-4">Register</NavLink>
                </div>
            </nav>


        </div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/courses' element={<Courses />} />

        </Routes>




        <MDBModal  show={basicModal} setShow={setBasicModal} tabIndex='-1'>
            <MDBModalDialog  size='xl'>
                <MDBModalContent className='text-primary'>
                    <MDBModalHeader className='text-center'>
                        <MDBModalTitle >Total Branches</MDBModalTitle>
                        <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                    </MDBModalHeader>
                    <MDBModalBody  className='bg-dark' >

                       {/* <table style={{border:20}} className='table table-info'> 
                        <thead>
                            <tr>
                                <th>  Branches  </th>
                                <th>  Colleges </th>
                            </tr>
                        </thead>
                           <tbody>
                            <div className='row'>
                             {college.map((nm)=>{return <>
                             <div className='col-sm-4 col-lg-4' >
                                <tr border={23}><td  height={90} width={60} className='table-cell'>{nm.name}</td>
                                <td data-att={nm.id} onClick={dat} style={{cursor:"grab"}}>{nm.len}  <i className='fas fa-caret-right'></i></td>
                                </tr>
                                </div>
                                </>})}
                                </div>
                           </tbody>
                       </table> */}


                        {/* {college.map(cg=>{
                            return <>
                            <div className=" text-center bg-light mb-3" style={{ height: "90px",width:"200px" }}>
        <MDBCol>One of three columns</MDBCol>
        
        
        
      </div>
                            
                            </>
                        })} */}


                       <div className='row' >
                       {college.map(cg=>{return <>
                       <p className='col-sm-4 col-md-4'>
                        <p class="card text-center" style={{width:170,height:100}}>
                        <p class="card-body">
                          <h5 class="fa fa-engineer"></h5>
                          <h4 className='text-dark'>{cg.name}</h4>
                        </p>
                        </p>
                        </p>
                      </>
                       })}</div>

{/* <div class="card text-center" style={{width:200,height:100}}>
  <div class="card-body">
    <h5 class="fa fa-engineer"></h5>
    <h4 className='text-primary'>Hello Everybody </h4>
  </div>
</div> */}
                            
                                {/* <tr> <td>{college[0]}</td>
                                    <td>07 &nbsp;<i className='fas fa-caret-right'></i></td>
                                </tr>
                                <tr> <td>{college[5]}</td>
                                <td>07 &nbsp;<i className='fas fa-caret-right'></i></td></tr>
                                <tr><td>{college[6]}</td>
                                <td>07 &nbsp;<i className='fas fa-caret-right'></i></td></tr>
                                <tr><td>{college[7]}</td>
                                <td>07 &nbsp;<i className='fas fa-caret-right'></i></td></tr>
                                
                                <tr><td>{college[3]}</td>
                                <td>07 &nbsp;<i className='fas fa-caret-right'></i></td></tr>
                                <tr> <td>{college[4]}</td>
                                <td>07 &nbsp;<i className='fas fa-caret-right'></i></td></tr>
                                <tr> <td>{college[2]}</td>
                                <td>07 &nbsp;<i className='fas fa-caret-right'></i></td></tr>
                                <tr><td>{college[1]}</td>
                                <td>07 &nbsp;<i className='fas fa-caret-right'></i></td></tr> */}

                          

                    </MDBModalBody>

                    <MDBModalFooter className='bg bg-white' >
                        <MDBBtn color='danger' onClick={toggleShow}>
                            Close
                        </MDBBtn>

                    </MDBModalFooter>
                </MDBModalContent>
            </MDBModalDialog>
        </MDBModal>






        {/* footer start */}
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Company</h4>
                        <a className="btn btn-link" href="">About Us</a>
                        <a className="btn btn-link" href="">Contact Us</a>
                        <a className="btn btn-link" href="">Reservation</a>
                        <a className="btn btn-link" href="">Privacy Policy</a>
                        <a className="btn btn-link" href="">Terms & Condition</a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Contact</h4>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>in front of Civil Hospital Sanawad</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 9575165030</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>grow123@gmail.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Opening</h4>
                        <h5 className="text-light fw-normal">Monday - Saturday</h5>
                        <p>10AM - 06PM</p>
                        <h5 className="text-light fw-normal">Sunday</h5>
                        <p>CLOSED</p>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h4 className="section-title ff-secondary text-start text-primary fw-normal mb-4">Newsletter</h4>
                        <p>Subscribe to get the official updates from us</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                            <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <a className="border-bottom" href="#">Grow Eduversity</a>, All Right Reserved.


                            Designed By <a href="" >Unknown</a>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <a href="">Home</a>
                                <a href="">Cookies</a>
                                <a href="">Help</a>
                                <a href="">FQAs</a>
                            </div>
                        </div>
                        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
                    </div>
                </div>
            </div>
        </div>

    </>
}

export default App;
