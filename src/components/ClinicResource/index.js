import React from "react";
import mtf from "";
import ftm from "";
import nb from "";
import na from "";

const Resource = (props) => {
    return props.resources.length === 0 ? (
        <div className="resourcePage">
            <h1>Find a Clinic</h1>
            <h2>Trans-Friendly clinics in your area!</h2>
            <p>Loading Resources ...</p>
        </div>
    ) : (
            <div className="resourcePage">
                <h1>Find a Clinic</h1>
                <h2>Select your state to see Trans-Friendly clinics in your area!</h2>
                {props.resources.map((resource) => {
                    var resourceImage;

                    switch (resource.target) {
                        case "mtf":
                            resourceImage = mtf;
                            break;
                        case "ftm":
                            resourceImage = ftm;
                            break;
                        case "nb":
                            resourceImage = nb;
                            break;
                        default:
                            resourceImage = na;
                            break;
                    }

                    return (
                        <div className="resourceContainer">
                            <div className="resourceNameContainer">
                                <p>{resource.name}</p>
                            </div>
                            <div className="resourceImageContainer">
                                <img src={resourceImage} alt={resource.name} />
                            </div>
                            <div className="resourceLinkContainer">
                                <p>
                                    <a href={resource.link} target="_blank">
                                        {resource.source}
                                    </a>
                                </p>
                            </div>
                            <div className="resourceDescription">
                                <p>{resource.description}</p>
                            </div>
                            <div className="resourceDivider"></div>
                        </div>
                    );
                })}
            </div>
    )
}

export default Resource;