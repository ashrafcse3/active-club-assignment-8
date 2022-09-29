import React from 'react';
import './Exercise.css';

const Exercise = (props) => {
    const { exercise: { id, img, name, timeRequired, addToList }, handleAddToList } = props;

    return (
        <div className='exercise-container'>
            <img src={img} alt="" className='exercise-img' />
            <h3>{name}</h3>
            <p>Time required: <strong>{timeRequired}s</strong></p>
            <button onClick={() => handleAddToList(props.exercise)} className='add-button'>Add to list</button>
        </div>
    );
};

export default Exercise;