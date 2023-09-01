import { useState, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const SeeDetails = (props) => {
    const location = useLocation();
    const navigate = useNavigate();

    const details = location.pathname.split("/").pop();
    const [searchEmpData, setSearchEmpData] = useState([]);

    useEffect(() => {
        setSearchEmpData(props.data);
    }, [props.data])

    return (
        <div className="p-5">
            <h2>Detail information</h2>
            {
                searchEmpData.map((obj, index) => (
                    obj.id == details ? (
                        <div key={obj.id} className="row h-75 mt-5 d-flex justify-content-start">
                            <div className="col-3 d-flex justify-content-start">
                                <img src={`../../images/${obj.photo}`} className="h-100 w-100" />
                            </div>
                            <div className="col-9 text-start p-3">
                                <p><b>Name: </b>{obj.name}</p>
                                <p><b>Id: </b>{obj.id}</p>
                                <p><b>Designation: </b>{obj.designation}</p>
                                <p><b>Email: </b>{obj.name}</p>
                                <p><b>Age: </b>{obj.age}</p>
                                <p><b>Blood Group: </b>{obj.bg}</p>
                                <p><b>Salary: </b>{obj.salary}</p>
                                <p><b>Temporary Address: </b>{obj.tempplot}, {obj.tempstreet}, {obj.tempcity}, {obj.tempstate}, {obj.tempcountry}</p>
                                <p><b>Permanant Address: </b>{obj.pemtplot}, {obj.pemtstreet}, {obj.pemtcity}, {obj.pemtstate}, {obj.pemtcountry}</p>
                                <p><b>Password: </b>{obj.password}</p>
                            </div>
                            <div className='col-12 text-center mt-4'>
                                <Link to={'/addNew'} state={{ data: obj }} >
                                    <button className='btn btn-secondary'>Update Profile</button>
                                </Link>
                                <button className='btn btn-danger ms-5' onClick={() => {
                                    var result = window.confirm("Do you want to delete this profile?");
                                    if (result === true) {
                                        axios.delete(`http://localhost:3004/empdata/${obj.id}`)
                                            .then(function (response) {
                                                alert("Record deleted Successfully.")
                                                navigate('/');

                                            })
                                            .catch(function (error) {
                                                console.log(error);
                                            })
                                    }
                                }}>Delete Profile</button>
                            </div>
                        </div>
                    ) : null
                ))
            }
        </div>
    )
}
export default SeeDetails;