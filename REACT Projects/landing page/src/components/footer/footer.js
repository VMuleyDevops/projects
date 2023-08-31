import './footer.css'
const Footer = () => {
    return (
        <div className='w-100 mt-5 footer row'>
            <div className='row justify-content-evenly pt-4'>
                <div className='col-md-3 col-12  p-5 fw-bold mylog'>My Log Travels</div>
                <div className='col-md-7 col-12 pt-5'>
                    <div className='row px-4'> 
                    <p className='fw-bold fs-4'>Quick Links</p>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 col-12 mt-md-0 mt-sm-5 ps-5'>
                            <p>Home</p>
                            <p>About us</p>
                            <p>My Travel Logs</p>
                        </div>
                        <div className='col-md-3 col-12 mt-md-0 mt-sm-5 ps-5'>
                            <p>Travels</p>
                            <p>Promo flights</p>
                            <p>Travel Routes</p>
                        </div>
                        <div className='col-md-3 col-12 mt-md-0 mt-sm-5 ps-5'>
                            <p>Recommendation</p>
                            <p>Guides</p>
                            <p>Blogs</p>
                        </div>
                        <div className='col-md-3 col-12 mt-md-0 mt-sm-5 ps-5'>
                            <p>Mission Statement</p>
                            <p>The Team</p>
                            <p>Contact Us</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row justify-content-center p-2 pb-4'>2021-2022 My Log Travels Right Reserved</div>
        </div>
    )
};

export default Footer;