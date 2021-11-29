const Skills = () => {
    return (
        <div className="skillsContainer">
            <div className="skills">
                <h1 className="title">My Tech Stack</h1>
                <div className="sectionSeparator"></div>

                <div className="skillsDescription">My skills include but aren't limited to:</div>
                
                <div className="skillsList">
                    <div className="skillsIcons">
                        <i class="fab fa-html5"></i>
                        <div>HTML</div>
                    </div>
                    
                    <div className="skillsIcons">
                        <i class="fab fa-css3-alt"></i>
                        <div>CSS</div>
                    </div>

                    <div className="skillsIcons">
                        <i class="fab fa-js-square"></i>
                        <div>JavaScript</div>
                    </div>

                    <div className="skillsIcons">
                        <i class="fab fa-react"></i>
                        <div>React</div>
                    </div>

                    <div className="skillsIcons">
                        <i class="fab fa-node-js"></i>
                        <div>Node.js</div>
                    </div>
                </div>
            </div>
            <hr className="lineBreak"></hr>

        </div>
    );
};

export default Skills;