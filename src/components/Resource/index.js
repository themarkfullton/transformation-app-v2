import React from "react";
import mtf from "../../assets/images/mtf.png";
import ftm from "../../assets/images/ftm.png";
import nb from "../../assets/images/nb.png";
import na from "../../assets/images/na.png";

const Resource = (props) => {
    return props.resources.length === 0 ? (
        <div className="resourcePage">
            <h1>{props.title}</h1>
            <h2>{props.slogan}</h2>
            <p>Loading Resources ...</p>
        </div>
    ) : (
            <div className="resourcePage">
                <h1>{props.title}</h1>
                <h2>{props.slogan}</h2>
                <div className="resourceDiv">
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
                        </div>
                    );
                })}
                </div>
            </div>
    )
}

export default Resource;