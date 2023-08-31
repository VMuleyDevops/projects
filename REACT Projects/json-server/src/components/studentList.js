import axios from "axios";
import { useEffect, useState } from "react";
const Student = () => {
    const [studentData, setStudentData] = useState([]);
    const [inputvalue, setinputvalue] = useState([]);
    const getData = () => {
        axios.get('http://localhost:3004/student')
            .then(function (response) {
                setStudentData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    };

    useEffect(() => {
        getData();
    }, [])

    const getname = (event) => {
        if(event.target)
        setinputvalue({
            ...inputvalue,
            [event.target.name]: event.target.value
        });
    }
    const adddata = () => {
        axios.post('http://localhost:3004/student', inputvalue)
            .then(function (response) {
                console.log(inputvalue)
                getData();
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const editdata = (item) => {
        setinputvalue(item)
    }
    const updatedata = () => {
        axios.put(`http://localhost:3004/student/${inputvalue.id}`, inputvalue)
            .then(function (response) {
                getData();
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const deletedata = (obj) => {
        axios.delete(`http://localhost:3004/student/${obj.id}`)
            .then(function (response) {
                console.log(response)
                getData();
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-6 offset-3 mt-4">
                        <h2>ADD STUDENT DATA</h2>
                    </div>
                    <div className="col-6 offset-3">
                        <form>
                            <div className="mt-3">
                                <input type="text" className="form-control border-dark" onChange={getname} value={inputvalue.name} placeholder="Name" name="name" />
                            </div>
                            <div className="mt-3">
                                <input type="text" className="form-control border-dark" onChange={getname} value={inputvalue.subject} placeholder="Subject" name="subject" />
                            </div>
                            <input type="button" value="Add Data" className="btn btn-success mt-3 fs-5 fw-bold" onClick={adddata}/>
                            <input type="button" value="Update Data" className="btn btn-success mt-3 ms-4 fs-5 fw-bold" onClick={updatedata}/>
                        </form>
                    </div>
                    <div className="row ps-5 mt-2 d-flex justify-content-left">
                        {
                            studentData.map((obj, index) => (
                                <div className="col-2 border border-3 border-dark text-start p-2 mt-4 ms-5" key={index}>
                                    <p className="fs-5"><b> Name: </b>{obj.name}</p>
                                    <p className="fs-5"><b>Subject: </b>{obj.subject}</p>
                                    <button className="btn btn-secondary mt-3" onClick={() => editdata(obj)}>Edit</button>
                                    <button className="btn btn-danger mt-3 ms-3" onClick={() => deletedata(obj)}>Delete</button>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Student