import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import './Club.css';

const Club = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    return (
        <div className='club-container'>
            <div className="exercises-container">
                <Header></Header>
                <div className="exercises">
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className="options-container">
                <h1>Option container</h1>
            </div>
        </div>
    );
};

export default Club;