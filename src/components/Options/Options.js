import React from 'react';
import './Options.css';

const Options = (props) => {
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
                    <p>10s</p>
                    <p>20s</p>
                    <p>30s</p>
                    <p>40s</p>
                    <p>50s</p>
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
                    <p>15 seconds</p>
                </div>
            </div>
        </div>
    );
};

export default Options;