import React from 'react';
import Navigation from '../components/Navigation';

import "../styles/about.scss"


const About = () => {
    return (
        <div className='about'>
        <Navigation />
          <h1>À propos</h1>  
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium porro eius error harum, blanditiis provident a, ut facere, placeat earum inventore quisquam voluptatum cupiditate maiores totam asperiores molestiae tempore. Maxime.</p>
          <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit itaque, odio dignissimos beatae nisi officia harum modi voluptatum libero et saepe quasi quos sapiente soluta est assumenda. Illo, reprehenderit aut.</p>
        </div>
    );
};

export default About;