import emailjs from "@emailjs/browser";
import { useRef } from "react";
// import { Toast } from "react-toastify/dist/components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8m2aked', 'template_hqiqxto', form.current, 'qWiMCUmEdUy2GQhe4')
            .then((result) => {
               if(result.text==="OK"){
                toast.success("Sent Successfully");
                e.target.reset()
                 
                 
               }
            }, (error) => {
                toast.error("Try Agiain.......")
                {position: toast.POSITION.BOTTOM_CENTER}
            });
        
    }

    return <>

        <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s" >
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h5 className="section-title ff-secondary text-center text-primary fw-normal">Reservation</h5>
                <h1 className="mb-5">Register Your Slot</h1>
            </div>
            <div className="row g-0">
                <div className="col-md-6">
                    <div className="video">
                        <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                            <span></span>
                        </button>
                    </div>
                </div>
                <div className="col-md-6 bg-dark d-flex align-items-center">
                    <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                        <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                        <h1 className="text-white mb-4">Submit Your Information</h1>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                                        <label for="name" name="user_name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" required />
                                        <label for="email" name="user_email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating date" id="date3" data-target-input="nearest">
                                    <input type="number" min={10} max={10} className="form-control" id="datetime" placeholder="Your Number"  />
                                        <label for="datetime">Your Number </label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select className="form-select" id="select1" required>
                                            <option value="1">People 1</option>
                                            <option value="2">People 2</option>
                                            <option value="3">People 3</option>
                                        </select>
                                        <label for="select1">No Of People</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea name="message" className="form-control" placeholder="Your Feedback" id="message" style={{ height: "100px" }} required></textarea>
                                        <label for="message">Your Message </label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit" value="send">Book Now</button>
                                     <ToastContainer position="top-center"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="videoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">

                        <div className="ratio ratio-16x9">
                            {/* <iframe  className="embed-responsive-item" src="https://youtu.be/oGOmLZMfTi0" id="video" allowfullscreen allowscriptaccess="always"
                                allow="autoplay"></iframe> */}
                            <iframe  src="https://www.youtube.com/embed/7QGwkVORNLs" height={300} width={300} allowscriptaccess="always"
                                allowfullscreen></iframe>{/* lerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}