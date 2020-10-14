import React from "react";
import APIInstructions from "../../components/APIInstructions";

class About extends React.Component {
    render() {        
        return (
            <div className="aboutWrapper">
                <h1>The Transformation Project</h1>
                <h3>What is it?</h3>
                <p>The Transformation Project seeks to transform the world into a safer place for the Trans community.</p>
                <p>More than just a website, Transformation is an API containing a plethora of trans-friendly resources that can be used by anyone on any project.</p>

                <h3>Can I Add a Resource?</h3>
                <p>Of course! In time, we'd actually like to add more moderators to our team in order to ensure all content is up to date, as well.</p>
                <p>Unfortunately, due to malicious activity in the past, only a few moderators can add directly to the API.</p> 
                <p>However, if you have a resource you'd like to add, please fill out a form here. If our moderators approve, it will be added to the API.</p>

                <h3>Using the API</h3>
                <p>As stated above, the API is currently read only; but please do feel free to use it!</p>
                
                <APIInstructions />
            </div>
        )
    }
}

export default About;