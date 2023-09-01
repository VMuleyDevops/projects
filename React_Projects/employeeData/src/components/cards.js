import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import './card.css';

const Cards = (props) => {
    const [comData, setComData] = useState([]);
    const [searchEmpData, setSearchEmpData] = useState(comData);
    let finalData;

    // get data from props and set it.
    useEffect(() => {
        setComData(props.data)
    });

    // search data
    const searchEmp = async (event) => {
        try {
            const afterSearch = comData.filter((obj) => {
                const name = obj.name ? obj.name.toLocaleLowerCase() : '';
                const designation = obj.designation ? obj.designation.toLocaleLowerCase() : '';
                const searchValue = event.target.value ? event.target.value.toLocaleLowerCase() : '';
                return name.indexOf(searchValue) != -1 || designation.indexOf(searchValue) != -1;
            });
            console.log(afterSearch, "demo...")
            setSearchEmpData(afterSearch);
        }
        catch (error) {
            console.log(error);
        }
    }

    if(searchEmpData.length>0){
        finalData=searchEmpData;
    }
    else{
        finalData=comData;
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 mt-2">
                    <h1 className="">Employee Data</h1>
                </div>
                <div className="col-12 d-flex justify-content-center align-item-center mt-4">
                    <input type="search" placeholder="search" className="form-control-lg w-50 h-25"
                        onChange={searchEmp}></input>
                    <Link to={{ pathname: `/addNew` }} className="btn btn-secondary text-light ms-5 mx-4 mb-3 fs-5 text-decoration-none text-light">Add New Data</Link>
                </div>
                <div className="col-12 mt-3">
                    <div className="row d-flex align-items-stretch h-100 px-5">
                        {
                            finalData.map((obj, index) => {
                                return (
                                    <div className="col-2 mt-4" key={index} id="find">
                                        <div className="card shadow h-100">
                                            <img src={`../../images/${obj.photo}`} className="card-img-top" alt="employee image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{obj.name}</h5>
                                                <p className="card-text">{obj.designation}</p>
                                            </div>
                                            <Link to={{ pathname: `/seeDetails/${obj.id}` }} data-key={obj.id}
                                                className="btn btn-dark text-light mx-4 mb-3 text-decoration-none text-light">See Details</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Cards