import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <h1>Blog question and answer</h1>
            <div>
                <h3>Question: How does react work?</h3>
                <p>Answer: React mainly manipulates the real DOM by creating a virtual efficient dom. It does different steps to show the code into the website. Firstly, JSX, JavaScript XML, which looks like html but it's a javascript code, and they converted this design, parameters and childrens into raw javascript code with the power of babel compiler. Then they have react rendered, react reconciliation and unique keys for different items to update the real dom efficiently.</p>
            </div>
            <div>
                <h3>Question: Difference between props and states?</h3>
                <p>Answer: Props are used for to transfer data from one component to another. Whereas, state is a local storage for the current component and it cannot be passed into other coponents.</p>
            </div>
            <div>
                <h3>Question: What other purposes do we use useEffect other than fetching api results?</h3>
                <p>Answer: By using the useEffect reactjs hook, it tells our component needs to do some operation after the rendering. So react will keep remember about it and re-call it whenever you will trigger it again. </p>
            </div>
        </div>
    );
};

export default Blog;