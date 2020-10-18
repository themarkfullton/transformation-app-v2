import React from "react";
import mtf from "../../assets/images/mtf.png";
import ftm from "../../assets/images/ftm.png";
import nb from "../../assets/images/nb.png";
import na from "../../assets/images/na.png";
import TransBanner from "../../assets/images/transformation.png";
import TransFashion from "../../assets/images/transfashion.png";
import TransFitness from "../../assets/images/transfitness.png";
import TransHistory from "../../assets/images/transhistory.png";
import TransId from "../../assets/images/transid.png";
import TransJob from "../../assets/images/transjob.png";
import TransTravel from "../../assets/images/transtravel.png";

const Resource = (props) => {
    var headerImage;

    switch (props.title) {
        case "Fashion":
            headerImage = TransFashion;
            break;
        case "Fitness":
            headerImage = TransFitness;
            break;
        case "History":
            headerImage = TransHistory;
            break;
        case "Identity":
            headerImage = TransId;
            break;
        case "Jobs":
            headerImage = TransJob;
            break;
        case "Travel":
            headerImage = TransTravel;
            break;
        default:
            headerImage = TransBanner;
            break;
    }
    return props.resources.length === 0 ? (
        <div className="resourcePage">
            <h1>{props.title}</h1>
            <h2>{props.slogan}</h2>
            <div className="pageImage">
                <img className="pageImageImage" src={headerImage} />
            </div>
            <p>Loading Resources ...</p>
        </div>
    ) : (
            <div className="resourcePage">
                <h1>{props.title}</h1>
                <h2>{props.slogan}</h2>

                <div className="pageImage">
                    <img className="pageImageImage" src={headerImage} />
                </div>
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