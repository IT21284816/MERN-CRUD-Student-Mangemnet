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
        setInputdata({ ...inputdata, [e.target.nameS1]: e.target.value });   
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
