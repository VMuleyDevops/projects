import './addNew.css';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
const Addnew = (props) => {
    const navigate = useNavigate();
    const [inputvalue, setinputvalue] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [updateData, setUpdateData] = useState([]);
    const { getdata } = props;
    const location = useLocation();

    const tempplot = useRef(null);
    const tempstreet = useRef(null);
    const tempcity = useRef(null);
    const tempstate = useRef(null);
    const tempcountry = useRef(null);
    const pemtplot = useRef(null);
    const pemtstreet = useRef(null);
    const pemtcity = useRef(null);
    const pemtstate = useRef(null);
    const pemtcountry = useRef(null);


    useEffect(() => {
        if (location.state && location.state.data) {
            setUpdateData(location.state.data);
        }
    }, [location.state])

    // for update data
    useEffect(() => {
        if (updateData.length != 0) {
            setinputvalue({
                ...inputvalue,
                name: updateData.name,
                designation: updateData.designation,
                email: updateData.email,
                bg: updateData.bg,
                age: updateData.age,
                tempplot: updateData.tempplot,
                tempstreet: updateData.tempstreet,
                tempcity: updateData.tempcity,
                tempstate: updateData.tempstate,
                tempcountry: updateData.tempcountry,
                pemtplot: updateData.pemtplot,
                pemtstreet: updateData.pemtstreet,
                pemtcity: updateData.pemtcity,
                pemtstate: updateData.pemtstate,
                pemtcountry: updateData.pemtcountry,
                salary: updateData.salary,
                password: updateData.password,
            });
        }
    }, [updateData])

    // for adding new data
    const handleInputChange = (e) => {
        if (e.target.name === "photo") {
            const filePath = e.target.value;
            const pathArray = filePath.split('\\');
            const lastDirectoryName = pathArray.pop();

            const updatedInputValue = {
                ...inputvalue,
                [e.target.name]: lastDirectoryName,
            };
            setinputvalue(updatedInputValue);
        }
        else {
            setinputvalue({
                ...inputvalue,
                [e.target.name]: e.target.value,
            });
        }
    }

    // for address
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        if (isChecked) {
            inputvalue.pemtplot = tempplot.current.value;
            inputvalue.pemtstreet = tempstreet.current.value;
            inputvalue.pemtcity = tempcity.current.value;
            inputvalue.pemtstate = tempstate.current.value;
            inputvalue.pemtcountry = tempcountry.current.value;
            // disable
            pemtplot.current.disabled = true;
            pemtstreet.current.disabled = true;
            pemtcity.current.disabled = true;
            pemtstate.current.disabled = true;
            pemtcountry.current.disabled = true;
        }
        else {
            pemtplot.current.value = "";
            pemtstreet.current.value = "";
            pemtcity.current.value = "";
            pemtstate.current.value = "";
            pemtcountry.current.value = "";
            // remove disabled
            pemtplot.current.disabled = false;
            pemtstreet.current.disabled = false;
            pemtcity.current.disabled = false;
            pemtstate.current.disabled = false;
            pemtcountry.current.disabled = false;
        }
    }, [isChecked])

    const adddata = () => {
        if (updateData.length == 0) {
            axios.post('http://localhost:3004/empdata', inputvalue)
                .then(function (response) {
                    getdata();
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
        else {
            axios.patch(`http://localhost:3004/empdata/${updateData.id}`, inputvalue)
                .then(function (response) {
                    getdata();
                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }
    return (
        <div>
            <h1 className="mt-3">Enter Details</h1>
            <div className="my-3 mx-5  p-3 shadow text-start">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-5 fw-semibold">Name:</label>
                        <input type="text" placeholder="Firstname" name='name' value={inputvalue.name || ''} onChange={handleInputChange} className="form-control-lg p-2" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-5 fw-semibold">Designation:</label>
                        <input type="text" placeholder="Designation" name='designation' value={inputvalue.designation || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-3" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-5 fw-semibold">Email:</label>
                        <input type="email" placeholder="Email" name='email' value={inputvalue.email || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-3" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-5 fw-semibold">Blood Group:</label>
                        <input type="text" placeholder="Blood Group" name='bg' value={inputvalue.bg || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-3" />
                        <label htmlFor="exampleInputEmail1" className="ms-5 fs-5 fw-semibold">Age:</label>
                        <input type="text" placeholder="Blood Group" name='age' value={inputvalue.age || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-3" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-5 fw-semibold mb-2">Temporary Address:</label><br />
                        <input type="text" placeholder="House no." name='tempplot' ref={tempplot} value={inputvalue.tempplot || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2" />
                        <input type="text" placeholder="Street" name='tempstreet' ref={tempstreet} value={inputvalue.tempstreet || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2" />
                        <input type="text" placeholder="City" name='tempcity' ref={tempcity} value={inputvalue.tempcity || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2" />
                        <input type="text" placeholder="State" name='tempstate' ref={tempstate} value={inputvalue.tempstate || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2" />
                        <input type="text" placeholder="Country" name='tempcountry' ref={tempcountry} value={inputvalue.tempcountry || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2" />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" checked={isChecked}
                            onChange={handleCheckboxChange} id="exampleCheck1" />
                        <label htmlFor="exampleCheck1">Permanant Address same as temporary address</label>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-5 fw-semibold mb-2">Permanant Address:</label><br />
                        <input type="text" placeholder="House no." name='pemtplot' ref={pemtplot} value={inputvalue.pemtplot || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2"/>
                        <input type="text" placeholder="Street" name='pemtstreet' ref={pemtstreet} value={inputvalue.pemtstreet || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2"/>
                        <input type="text" placeholder="City" name='pemtcity' ref={pemtcity} value={inputvalue.pemtcity || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2"/>
                        <input type="text" placeholder="State" name='pemtstate' ref={pemtstate} value={inputvalue.pemtstate || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2"/>
                        <input type="text" placeholder="Country" name='pemtcountry' ref={pemtcountry} value={inputvalue.pemtcountry || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-2"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-5 fw-semibold">Salary:</label>
                        <input type="text" placeholder="Salary" name='salary' value={inputvalue.salary || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-3" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-5 fw-semibold">Upload Photo:</label>
                        <input type="file" placeholder="Salary" name='photo' onChange={handleInputChange} className="form-control-lg p-2 ms-3" style={{ backgroundColor: 'white', border: '1px solid black' }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="me-4 fs-5 fw-semibold">Password:</label>
                        <input type="text" placeholder="Password" name='password' value={inputvalue.password || ''} onChange={handleInputChange} className="form-control-lg p-2 ms-3" />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={() => {
                        navigate('/');
                        adddata();
                    }}>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default Addnew;