import { useNavigate } from "react-router-dom";
const SeeDetails = () => {
    // getting detais  of one product
    var x = JSON.parse(localStorage.getItem("details"));
    const Navigation = useNavigate();
    const productList = () => {
        Navigation("/");
    }

    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-center">
                {
                    x.map((obj) => (
                        <div className="col-8 mt-5" key={obj.id}>
                            <h1 className="text-secondary text-capitalize mb-5">{obj.title}</h1>
                            <div className="row">
                                <div className="col-6">
                                    <img src={"https://image.tmdb.org/t/p/w500" + obj.poster_path} className="card-img-top" alt="..." height={500} width={500} />
                                </div>
                                <div className="col-6">
                                    <p><b>Release Date:</b>{obj.release_date}</p>
                                    <p><b>Language:</b> {obj.original_language}</p>
                                    <p><b>Overview:</b> {obj.overview}</p>
                                    <p><b>Rating:</b> {obj.vote_average}</p>
                                    <p><b>Total Voter:</b> {obj.vote_count}</p>
                                </div>
                            </div>
                            <div className="row mt-5">
                            <a href="#" onClick={productList} data-key={obj.id} className="btn btn-primary mx-4 mb-3">Go Back</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default SeeDetails;