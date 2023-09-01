import './intro_section.css';
const Intro_section =()=>{
    return(
        <div className='container-fluid'>
            <div className='row justify-content-center mt-5'>
                <div className='col-md'></div>
                <div className='col-md-5'>
                    <p className='large_heading fw-bold'>Travel to your dream destination</p>
                    <p>lorem kloflslgljsf snfkjs dfjks kfkshfkshf jshfhsd hfhskfs shfkhshfishf hfsdih lorem lorem 
                        kloflslgljsf snfkjs dfjks kfkshfkshf jshfhsd hfhskfs lorem kloflslgljsf snfkjs dfjks kfkshfkshf jshfhsd hfhskfs shfkhshfishf hfsdih lorem lorem 
                        kloflslgljsf snfkjs dfjks kfkshfkshf jshfhsd hfhskfs</p>
                    <button className='btn btn-dark rounded-0 fw-bold px-5'>Reserve Ticket</button>
                </div>
                <div className='col-md'></div>
                <div className='col-md-5 mt-5 mt-md-0 p-0'>
                    <img src='images/river.jpg' alt='river image' className='d-none d-md-block'/>
                </div>
                <div className='col-md'></div>
            </div>
        </div>
    )
};
export default Intro_section;