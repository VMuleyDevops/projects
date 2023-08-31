import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'
import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
const Main = () => {
    // for show hide model
    const [showResults, setShowResults] = useState(false)
    const [firstmenu,setFirstMenu]=useState(false)

    // complete data after fetch
    const[completeData,setCompleteData]=useState()

    // data after selecting one by one
    const [data, setdata] = useState()

    // pushing selected data only for maintaining history
    const selectedData=useRef(new Array())

    const scroll=useRef();

    const showbot = () => {
        if (showResults == false) {
            setShowResults(true)
        }
        else {
            setShowResults(false)
        }
    }
    useEffect(() => {
        // axios get data
        axios.get(`http://localhost:3004/bank`)
            .then(function (response) {
                setCompleteData(response.data);
                setdata(response.data);
                selectedData.current.push(response.data)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])
    
    const onselect=(selected,index,event)=>{
        const newdata=data[index]
        setdata(newdata[selected]);
        selectedData.current.push(newdata[selected]);
        setFirstMenu(true)

        // console.log(scroll);
        // scroll.current?.scroll({behavior:"smooth",block:"end",inline:"nearest"});
        // scroll.current?.scroll({behavior:"smooth",top:scroll.current?.scrollHeight,inline:"nearest"});

    }

    const goToFirstMenu=()=>{
        selectedData.current.push(completeData)
        setdata(completeData)
    }

    const Bot = () => (
        <div className='mybot shadow position-relative'>
            <div className='header p-2 d-flex justify-content-between'>
                <p className='fs-4 fw-bold text-light'>Virtual Assistant</p><img className='exit'
                    onClick={showbot} src='images/exit.png'/>
            </div>
            <div className='body'>
                <div className='p-3 text-end'>
                    {
                        (selectedData.current).map((objects,ind)=>{
                            return(
                                <div className='mt-4' key={ind} ref={scroll}>
                                    {
                                        objects.map((obj,index) => {
                                            const result = (Object.keys(obj))
                                            return(
                                                <div key={index}>
                                                    <p className='rounded d-inline-block p-1' onClick={(e) =>{onselect(result[1],index,e)}}>{result[1]}</p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            )
                        })          
                    }
                {firstmenu ? <button className='btn btn-secondary mt-3' onClick={goToFirstMenu}>Go To First Menu</button> : null}
                </div>
            </div>
            <div className='footer position-absolute bottom-0 w-100'>
                <input type='text' placeholder="type here..." className='form-control-lg w-100 border-0 shadow' />
            </div>
        </div>
    )
    return (
        <div className='vh-100 d-flex align-items-center justify-content-center'>
            {showResults ? <Bot /> : <button className="btn btn-primary" onClick={showbot}>Ask me</button>}
        </div>
    )
}
export default Main