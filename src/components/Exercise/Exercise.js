import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const { id, img, name, timeRequired, addToList } = props.exercise;

    return (
        <div className='exercise-container'>
            <img src={img} alt="" className='exercise-img' />
            <h3>{name}</h3>
            <p>Time required: <strong>{timeRequired}s</strong></p>
            <button className='add-button'>Add to list</button>
        </div>
    );
};

export default Exercise;