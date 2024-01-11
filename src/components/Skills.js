const Skills = () => {
    return (
        <div>
        <div className="skillsContainer">
            <div className="skills">
                <h1 className="title">Tech Stack</h1>
                <div className="sectionSeparator"></div>

                <div className="skillsList">
                    <div className="indivSkillContain">
                        <h6 className="skillTitle">Frontend</h6>
                        <div>
                            <div className="skill">HTML</div>
                            <div className="skill">CSS</div>
                            <div className="skill">JavaScript</div>
                            <div className="skill">React</div>
                        </div>
                    </div>
                    
                    <div className="indivSkillContain">
                        <h6 className="skillTitle">Backend</h6>
                        <div>
                            <div className="skill">Python</div>
                            <div className="skill">SQL</div>
                            <div className="skill">AWS</div>
                            <div className="skill">Azure</div>
                        </div>
                    </div>
                    
                    <div className="indivSkillContain">
                        <h6 className="skillTitle">Dev Tools</h6>
                        <div>
                            <div className="skill">Bitbucket</div>
                            <div className="skill">Git</div>
                            <div className="skill">Github</div>
                            <div className="skill">Jira</div>
                            <div className="skill">VSCode</div>
                        </div>
                    </div>

                    <div className="indivSkillContain">
                        <h6 className="skillTitle">Data</h6>
                        <ul>
                            <li className="skill">Snowflake</li>
                            <li className="skill">Databricks</li>
                            <li className="skill">Python</li>
                        </ul>
                    </div>
                    
                </div>
                
                {/* <div className="skillsList">
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

                    <div className="skillsIcons">
                    <i class="fab fa-python"></i>
                        <div>Python</div>
                    </div>

                </div> */}
            </div>
            

        </div>
            <hr className="lineBreak"></hr>
        </div>
    );
};

export default Skills;