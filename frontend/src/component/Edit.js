import React, { useState ,useEffect} from 'react'
import { NavLink ,useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Edit() {
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
        const {nameS1,value}=e.target;
        setInputdata((prestud)=>{
            return{
                ...prestud,[nameS1]:value
            }
        })
    }


    //get single data student
    const { id } = useParams("");
    console.log(id);

    const getstuddata = async () => {
        const res = await fetch(`http://localhost:5000/getstud/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            setInputdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getstuddata();
    }, [])

    //update student Data
    const updatestud= async(e)=>{
        e.preventDefault();

        const {nameS1,regNoS1, emailS1, contactS1} =inputdata;
        const res2 = await fetch(`http://localhost:5000/updatestud/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                nameS1,regNoS1, emailS1, contactS1
            })
        });
        const data2= await res2.json();
        setInputdata(data2);
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

    return (
        <div className='container mt-5'>
            <h4>Edit Student Information</h4>
            <div className='underline1'></div>
            <form className='mt-5 shadow p-5 w-75'>
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
                         <button className='btn btn-primary' onClick={updatestud}>update Student</button>
                         <ToastContainer />
                         <NavLink className='btn btn-primary ms-auto' to="/allstud">Back to Home</NavLink>
                </div>
              

            </form>
        </div>
    )
}
