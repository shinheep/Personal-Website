const Portfolio = () => {
    return (
        <div className="portfolio">
            <h1 className="title">Projects</h1>
            <div className="sectionSeparator"></div>
            <div className="portfolioContainer">
                
                <div className="petBuddies">
                    <h3 className="projectTitle">Pet Buddies</h3>
                    <div className="projectDescription">A front-end app utilizing React.js components, and The Dog API. Users can browse through the different animals, click to see Pop-up information about each, and decide which ones to "adopt."</div>
                    <img src="https://res.cloudinary.com/dxqwpud0l/image/upload/v1636348376/Pet_Buddies_Screenshot_jvpfvd.png" alt="petbuddies" className="projectPic"/>
                    
                    <div className="projectButtons">
                        <a target="blank" className="liveLinkButton" href="https://shinheep.github.io/PetBuddies/#/"><input className="linkButton" type="submit" value="Live Link"/></a>

                        <a target="blank" className="liveLinkButton" href="https://github.com/shinheep/PetBuddies"><input className="linkButton" type="submit" value="GitHub Link"/></a>
                    </div>
                </div>

                <div className="petBuddies">
                    <h3 className="projectTitle">TravelGram</h3>
                    <div className="projectDescription">Collaborated with a team of developers to create a full stack app with MERN. Users can sign in using Google Sign in, and post about their travels, as well as browse through their feed of other travelers' posts.</div>
                    <img src="https://res.cloudinary.com/dxqwpud0l/image/upload/v1638088962/Screen_Shot_2021-11-28_at_12.42.26_AM_wsobm7.png" alt="travelgram" className="projectPic"/>
                    
                    <div className="projectButtons">
                        <a target="blank" className="liveLinkButton" href="https://shinheep.github.io/PetBuddies/#/"><input className="linkButton" type="submit" value="Live Link"/></a>

                        <a target="blank" className="liveLinkButton" href="https://github.com/shinheep/travel-frontend"><input className="linkButton" type="submit" value="GitHub Link"/></a>
                    </div>
                </div>

                <div className="petBuddies">
                    <h3 className="projectTitle">Leafy</h3>
                    <div className="projectDescription">Collaborated with a team of developers to create a full stack app with MERN. Users can add plants to their list, browse through their plants, water them, and remove them from their list.</div>
                    <img src="https://res.cloudinary.com/dxqwpud0l/image/upload/v1638085698/Screen_Shot_2021-11-27_at_11.47.36_PM_klt4bz.png" alt="plant" className="projectPic"/>
                    
                    <div className="projectButtons">
                        <a target="blank" className="liveLinkButton" href="https://shinheep.github.io/PetBuddies/#/"><input className="linkButton" type="submit" value="Live Link"/></a>

                        <a target="blank" className="liveLinkButton" href="https://github.com/shinheep/PetBuddies"><input className="linkButton" type="submit" value="GitHub Link"/></a>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Portfolio;