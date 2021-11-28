import React from 'react';

const About = () => {
    return (
        <div className="aboutContainer">
            
            <div className="about">
                <h1 className="title">More About Me</h1>
                <div className="sectionSeparator"></div>
                
                <div className="aboutMain">
                    <div className="paragraph">
                        Hello! My name is Shinhee, and I am a full-stack software engineer creating modern and responsive design for Mobile apps, and the Web. My interest in web development started back in 2010 when I decided my Xanga page needed to have pretty stars flowing down the front page -- turns out that taught me a lot about HTML & CSS!
                    </div>

                    <div className="paragraph">
                        Fast-forward to today, I have just completed the Software Engineering Immersive Program at General Assembly, and I am proud to say my knowledge of programming goes beyond adding pretty stars to a website. My main focus these days is building full stack responsive applications using React, JavaScript, MongoDB, Mongoose, Express, and Node.
                    </div>

                    <div className="paragraph">
                        Apart from coding, I'm a proud dog and plant mom! <i className="fas fa-paw pawIcon"></i> <i className="fas fa-seedling plantIcon"></i>
                    </div>
                    
                </div>

                <div className="certifications">

                </div>

            </div>

            <hr/>
        </div>
    )
}

export default About;