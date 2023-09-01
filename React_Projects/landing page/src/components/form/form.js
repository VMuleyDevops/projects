import './form.css';
const Form = ()=>{
    return(
        <div className='row mt-5 w-100'>
            <div className='col-md-6 px-5 text-center'>
                <p className='fs-1 fw-bold'>Be updated!</p>
                <form>
                    <input type="text" class="form-control-lg w-100 border-dark" id="exampleFormControlInput1" placeholder="first name"/>
                    <input type="text" class="form-control-lg w-100 mt-3 border-dark" id="exampleFormControlInput1" placeholder="last name"/>
                    <input type="text" class="form-control-lg w-100 mt-3 border-dark" id="exampleFormControlInput1" placeholder="email"/>
                    <textarea placeholder='write something here...' rows={4} className='d-block mt-3 w-100 p-3 border-2 border-dark'></textarea>
                    <button className='btn bg-dark text-light rounded-0 mt-3 w-100 fs-3 fw-bold'>Submit</button>
                </form>
            </div>
            <div className='col-md-6 pe-4 mt-5'>
                <img src='images/river.jpg' className='d-none d-md-block'/>
            </div>
        </div>
    )
};
export default Form;