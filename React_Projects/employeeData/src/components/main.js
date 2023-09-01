import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "./cards";
import { Routes, Route, link } from 'react-router-dom';
import SeeDetails from "./seeDetails";
import Addnew from "./addNew";

const EmpInfo = () => {
    const [empData, setempData] = useState([]);

    // geting api data

    const getdata = () => {
        axios.get('http://localhost:3004/empdata')
            .then(function (response){
                setempData(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        getdata();
    });

    return (
        <Routes>
            <Route path="/" element={<Cards data={empData} />}></Route>
            <Route path="/seeDetails/:id" element={<SeeDetails data={empData} />}></Route>
            <Route path="/addNew" element={<Addnew data={getdata}/>}></Route>
        </Routes>
    )

}
export default EmpInfo;