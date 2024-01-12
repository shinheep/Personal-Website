import React from 'react';

const About = () => {
    return (
        <div className="aboutContainer">
            
            <div className="about">
                <h1 className="title">About Me</h1>
                <div className="sectionSeparator"></div>
                
                <div className="aboutMain">
                    <div className="insideAbout">

                        <div className="paragraph">
                            Hi! I'm Shinhee, and I'm a seasoned software engineer with over 2 years of professional experience and an insatiable curiosity for all things data. By day, I'm passionately crafting elegant code; by night, I'm probably cuddled with my dog binging a good Netflix show. As a proud dog and plant mom, my life is a delightful mix of writing algorithms, never-ending walks, and sipping matcha lattes. I'm naturally curious, and perpetually working on improving my skills to add value to any team that I join with a detail-oriented approach and a knack for solving any design and development problems.
                        </div>

                        {/* <div className="paragraph">
                            Hello! My name is Shinhee, and I am a full-stack software engineer creating modern and responsive design for Mobile apps, and the Web. My interest in web development started back in 2010 when I decided my Xanga page needed to have pretty stars flowing down the front page -- turns out that taught me a lot about HTML & CSS!
                        </div>

                        <div className="paragraph">
                            Fast-forward to today, and I am proud to say my knowledge of programming goes beyond adding pretty stars to a website. With a detail-oriented approach to solving design and development problems, I focus on adding value to any team that I join. I utilize full-stack software solutions to create dynamic, high-quality user-focused solutions that deliver the best experience using the highest quality modern development methodology.
                        </div>

                        <div className="paragraph">
                            Apart from coding, I'm a proud dog and plant mom!
                        </div> */}
                    </div>
                    
                </div>

            </div>

            <hr/>
        </div>
    )
}

export default About;