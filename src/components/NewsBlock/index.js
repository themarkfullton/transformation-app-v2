import React from "react";

const Resource = (props) => {

    return props.resources.length === 0 ? (
        <div className="newsBlockWrapper">
            <p>Loading Resources ...</p>
        </div>
    ) : (
            <div className="newsBlockWrapper">
                {props.resources.map((resource) => {
                    // var resourceImage;

                    // switch (resource.target) {
                    //     case "mtf":
                    //         resourceImage = mtf;
                    //         break;
                    //     case "ftm":
                    //         resourceImage = ftm;
                    //         break;
                    //     case "nb":
                    //         resourceImage = nb;
                    //         break;
                    //     default:
                    //         resourceImage = na;
                    //         break;
                    // }

                    return (
                        <div className="newsContainer">
                            <div className="newsTitleContainer">
                                <p>{resource.title}</p>
                            </div>
                            <div className="newsSubHeadCont">
                                <p>{resource.author}</p>
                                <p>{resource.dateAdded}</p>
                            </div>
                            <div className="newsContentContainer">
                                <p>{resource.content}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
    )
}

export default Resource;