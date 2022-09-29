import React, { useEffect, useState } from 'react';
import { addToDb, getStoredTime } from '../../utilities/fakedb';
import './Options.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Options = (props) => {
    const [breakTime, setBreakTime] = useState(0);

    useEffect(() => {
        const storedBreakTime = getStoredTime();
        setBreakTime(storedBreakTime);
    }, []);

    const handleBreakTime = time => {
        setBreakTime(time);
        addToDb(time);
    }

    return (
        <div className='options-container'>
            <div className="profile">
                <img className='profile-image' src="https://image.shutterstock.com/image-photo/head-shot-portrait-close-smiling-260nw-1714666150.jpg" alt="" />
                <div className='profile-details'>
                    <h3>Ashraful Alam</h3>
                    <p>Scunthorpe, UK</p>
                </div>
            </div>
            <div className="profile-info">
                <div className="person-weight">
                    <div>
                        <h3>75</h3><p>kg</p>
                    </div>
                    <p>Weight</p>
                </div>
                <div className="person-height">
                    <div>
                        <h3>6.5</h3>
                    </div>
                    <p>Height</p>
                </div>
                <div className="person-age">
                    <div>
                        <h3>75</h3><p>yrs</p>
                    </div>
                    <p>Age</p>
                </div>
            </div>
            <div className='break-container'>
                <h3>Add A Break</h3>
                <div className='break-seconds'>
                    <p onClick={() => handleBreakTime(10)}>10s</p>
                    <p onClick={() => handleBreakTime(20)}>20s</p>
                    <p onClick={() => handleBreakTime(30)}>30s</p>
                    <p onClick={() => handleBreakTime(40)}>40s</p>
                    <p onClick={() => handleBreakTime(50)}>50s</p>
                </div>
            </div>
            <div className="exercise-details">
                <h3>Exercise Details</h3>
                <div className='time-container'>
                    <h4>Exercise time</h4>
                    <p>{props.exerciseTime} seconds</p>
                </div>
                <div className='time-container'>
                    <h4>Break time</h4>
                    <p>{breakTime} seconds</p>
                </div>
            </div>
            <button onClick={() => toast("I made a toast with react toastify")} className='activity-button'>Activity Completed</button>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Options;