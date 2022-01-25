const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1 className="title">Projects</h1>
            <div className="sectionSeparator"></div>
            <div className="portfolioContainer">
                
                <div className="petBuddies">
                    <h3 className="projectTitle">Plantify</h3>
                    <div className="projectDescription">A front-end Plant Database page built with React.js. Users can browse through different plants, perform a controlled search, and click to view more info about the specific plant.</div>
                    <img src="https://res.cloudinary.com/dxqwpud0l/image/upload/v1640112883/Screen_Shot_2021-12-21_at_10.54.27_AM_b07khf.png" alt="plantify" className="projectPic"/>
                    
                    <div className="projectButtons">
                        <a target="blank" className="liveLinkButton" href="https://shinheep.github.io/Plantify/#/"><input className="linkButton" type="submit" value="Live Link"/></a>

                        <a target="blank" className="liveLinkButton" href="https://github.com/shinheep/Plantify"><input className="linkButton" type="submit" value="GitHub Link"/></a>
                    </div>
                </div>

                <div className="petBuddies">
                    <h3 className="projectTitle">TravelGram</h3>
                    <div className="projectDescription">Collaborated with a team of developers to create a full stack app with MERN. Users can sign in using Google Sign in, and post about their travels, as well as browse through their feed of other travelers' posts.</div>
                    <img src="https://res.cloudinary.com/dxqwpud0l/image/upload/v1638088962/Screen_Shot_2021-11-28_at_12.42.26_AM_wsobm7.png" alt="travelgram" className="projectPic"/>
                    
                    <div className="projectButtons">
                        <a target="blank" className="liveLinkButton" href="https://shinheep.github.io/travelgram/"><input className="linkButton" type="submit" value="Live Link"/></a>

                        <a target="blank" className="liveLinkButton" href="https://github.com/shinheep/travelgram"><input className="linkButton" type="submit" value="GitHub Link"/></a>
                    </div>
                </div>

                <div className="petBuddies">
                    <h3 className="projectTitle">Dictionary</h3>
                    <div className="projectDescription">A React.js app, built on a whim one free afternoon. A simple, but full stack dictionary, pulling data from the Dictionary API. The user can search a word to look up its definition.</div>
                    <img src="https://res.cloudinary.com/dxqwpud0l/image/upload/v1638344170/Screen_Shot_2021-11-30_at_11.35.51_PM_bthbjz.png" alt="plant" className="projectPic"/>
                    
                    <div className="projectButtons">
                        <a target="blank" className="liveLinkButton" href="https://shinheep.github.io/dictionary/"><input className="linkButton" type="submit" value="Live Link"/></a>

                        <a target="blank" className="liveLinkButton" href="https://github.com/shinheep/dictionary"><input className="linkButton" type="submit" value="GitHub Link"/></a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Portfolio;