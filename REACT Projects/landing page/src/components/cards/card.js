import './card.css';
const Card = () => {
    return (
        <div className='row w-100 justify-content-evenly px-5 mt-5'>
            <div className='col-md-3 p-0 mt-sm-5'>
                <div class="card border-0">
                    <img src='images/mountain_view.jpg' class="card-img-top" alt="first" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3 p-0 mt-sm-5'>
            <div class="card border-0">
                    <img src='images/mountain.jpg' class="card-img-top" alt="first" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3 p-0 mt-sm-5'>
            <div class="card border-0">
                    <img src='images/treking.jpg' class="card-img-top" alt="first" />
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Card;