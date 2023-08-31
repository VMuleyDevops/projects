import axios from "axios";
import { useNavigate } from "react-router-dom";
import Dropdown from './dropdown';
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

const Product = () => {
    const [finalData, setFinalData] = useState([]);
    const [listOfSearchMovie, setListOfSearchMovie] = useState([]);
    const Navigation = useNavigate();

    const seeDetails = (event) => {
        Navigation("/seedetails");
        var x = event.target.dataset.key;
        const details = finalData.filter((obj) => {
            if (obj.id == x) {
                return obj;
            }
        })
        localStorage.setItem("details", JSON.stringify(details));
    }

    // geting api data
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/discover/movie?api_key=16f207c0b6762ab5883cefa16370319c')
            .then(function (response) {
                var completemoviedata = response.data.results;
                setFinalData(completemoviedata);
                setListOfSearchMovie(completemoviedata);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    const searchMovie = (event) => {
        const afterSearch = finalData.filter((obj) => {
            const title = obj.title.toLocaleLowerCase()
            const searchValue = event.target.value.toLocaleLowerCase()
            return title.indexOf(searchValue) != -1
        })
        setListOfSearchMovie(afterSearch)
    }
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-12 mt-5">
                    <h1>Movie Filter</h1>
                </div>
                <Dropdown />
                <div className="col-12 d-flex justify-content-center">
                    <input type="search" placeholder="search" className="form-control-lg w-50" onChange={searchMovie}></input>
                </div>
                <div className="col-12 mt-5" >
                    <div className="row d-flex align-items-stretch h-100 px-5">
                        {
                            listOfSearchMovie.map((obj, index) => (
                                <div className="col-2 mt-4" key={obj.id} id="find">
                                    <div className="card border h-100">
                                        <img src={"https://image.tmdb.org/t/p/w500" + obj.poster_path} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{obj.title}</h5>
                                            <p className="card-text">Release Date {obj.release_date}</p>
                                        </div>
                                        <a href="#" onClick={seeDetails} data-key={obj.id} className="btn btn-primary mx-4 mb-3">See Details</a>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Product