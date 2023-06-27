import React from 'react'

const Courses = () => { 
  return <>
  <div className='container'>
  <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 class="section-title ff-secondary text-center text-primary fw-normal">Courses</h5>
                    <h1 class="mb-5">Courses</h1>
                </div>
  <table className=' table table-info'>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Courses</th>
            <th>College/University</th>
            
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>01</td>
            <td>B.Tech <br />
                m.tech</td>
            <td><button className='btn btn-warning'><small> College List</small></button></td>
        </tr>
        <tr>
            <td>02</td>
            <td>MBA</td>
            <td><button className='btn btn-warning'><small> College List</small></button></td>
        </tr>
        <tr>
            <td>03</td>
            <td>B.Pharma</td>
            <td><button className='btn btn-warning'><small> College List</small></button></td>
        </tr>
        <tr>
            <td>04</td>
            <td>D.Pharma</td>
            <td><button className='btn btn-warning'><small> College List</small></button></td>
        </tr>
       
        
    </tbody>
  </table>


  </div></>
}

export default Courses