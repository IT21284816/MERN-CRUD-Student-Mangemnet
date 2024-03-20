import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Addstud() {
    const navigate = useNavigate();
    const [inputdata,setInputdata]=useState({
        "nameS1":"",
        "regNoS1":"",
        "emailS1":"",
        "contactS1":""
    })
    
    //onchange function
    const setstud=(e)=>{
        console.log(e.target.value);
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });   
    }
    //onclick event
    const addinpdata = async (e) => {
        e.preventDefault();

        const { nameS1, regNoS1, emailS1, contactS1 } = inputdata;

        const res = await fetch("http://localhost:5000/addstud", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nameS1,regNoS1, emailS1, contactS1
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            setInputdata(data);
            toast.success('Please wait  !', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true, 
                progress: undefined,
                });
            setTimeout(() => {
                navigate('/allstud');
              }, 3000);

        }
    }
    return (
        <div className='container mt-5'>
            <h4>Project Registration</h4>
            <div className='underline1'></div>
            <form className='mt-5 shadow p-5 w-75'>


            <h4>Project Details</h4>
            <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Project Title</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Project Title" 
                    onChange={setstud} name="pTitle" value={inputdata.pTitle}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Research Area</label>
                        <select className="form-select" id="exampleFormControlInput1" onChange={setstud} name="pRArea" value={inputdata.pRArea}>
                            <option value="">Select a research area</option>
                            <option value="IT">Information Technology (IT)</option>
                            <option value="SE">Software Engineering (SE)</option>
                            <option value="DS">Data Science (DS)</option>
                            <option value="CSNE">Computer Systems and Network Engineering (CSNE)</option>
                            <option value="CS">Computer Science (CS)</option>
                             {/* Add more options as needed */}
                        </select>
                    </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Co-Supervisor</label>
                    <select className="form-select" id="exampleFormControlInput1" onChange={setstud} name="cosupervisor" value={inputdata.cosupervisor}>
        <                   option value="">Select a subject</option>
                            <option value="Co-Supervisor 1">Co-Supervisor 1</option>
                            <option value="Co-Supervisor 2">Co-Supervisor 2</option>
                            <option value="Co-Supervisor 3">Co-Supervisor 3</option>
                            <option value="Co-Supervisor 4">Co-Supervisor 4</option>
                            {/* Add more options as needed */}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Supervisor</label>
                    <select className="form-select" id="exampleFormControlInput1" onChange={setstud} name="supervisor" value={inputdata.supervisor}>
        <                   option value="">Select a subject</option>
                            <option value="Supervisor 1">Supervisor 1</option>
                            <option value="Supervisor 2">Supervisor 2</option>
                            <option value="Supervisor 3">Supervisor 3</option>
                            <option value="Supervisor 4">Supervisor 4</option>
                            {/* Add more options as needed */}
                    </select>
                </div>

                <br></br>
                <h4>Student 01 Details (Leader)</h4>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student Name" 
                    onChange={setstud} name="nameS1" value={inputdata.nameS1}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Registration Number</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student Student Registration Number"
                    onChange={setstud} name="regNoS1" value={inputdata.regNoS1}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Email</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email" 
                    onChange={setstud} name="emailS1" value={inputdata.emailS1}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Student Contact Number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Contact Number"
                    onChange={setstud} name="contactS1" value={inputdata.contactS1}/>
                </div>
                <br></br>
                <div className='d-flex'>
                         <button className='btn btn-primary' onClick={addinpdata}>Add Student</button>
                         <ToastContainer />
                         <NavLink className='btn btn-primary ms-auto' to="/allstud">Back to Home</NavLink>
                </div>
              
            </form>
            <br></br><br></br><br></br>
        </div>
    )
}
