import { Link } from "react-router-dom";
import About from "./about";
import Contact from "./contact";

export default function Home(){


    return <>
    
    <div className="container-xxl py-5 bg-dark hero-header mb-5">
                <div className="container my-5 py-5">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6 text-center text-lg-start">
                            <h1 className="display-3 text-white animated slideInLeft">Grow <br/>Eduversity</h1>
                            <p className="text-white animated slideInLeft mb-4 pb-2"><i>Vision To Grow Better</i></p>
                            <Link to={"/contact"} className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Addmissions Open</Link>
                        </div>
                        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                            <img className="img-fluid" src="img/hero.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
    <div>
        
        <About/>
        <Contact/>

    </div>
    </>
}