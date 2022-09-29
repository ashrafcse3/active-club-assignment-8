import React, { useEffect, useState } from 'react';
import Exercise from '../Exercise/Exercise';
import Header from '../Header/Header';
import Options from '../Options/Options';
import './Club.css';

const Club = () => {
    const [exercises, setExercises] = useState([]);
    const [exerciseTime, setExerciseTime] = useState(0);

    useEffect(() => {
        fetch('exercises.json')
            .then(res => res.json())
            .then(data => setExercises(data))
    }, []);

    const handleAddToList = exercise => {
        // add the old exercise time with the new clicked one
        setExerciseTime(exerciseTime + exercise.timeRequired);
    };

    return (
        <div className='club-container'>
            <div className="exercises-container">
                <Header></Header>
                <div className="exercises">
                    {
                        exercises.map(exercise => <Exercise
                            key={exercise.id}
                            exercise={exercise}
                            handleAddToList={handleAddToList}
                        ></Exercise>)
                    }
                </div>
            </div>
            <div className="options-container">
                <Options
                    exerciseTime={exerciseTime}
                ></Options>
            </div>
        </div>
    );
};

export default Club;