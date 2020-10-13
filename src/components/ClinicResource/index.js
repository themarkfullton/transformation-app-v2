import React, { useState, useEffect } from "react";

const ClinicResource = (props) => {
    const [clinics, setClinics] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredClinics, setFilteredClinics] = useState([]);

    useEffect(() => {
        setClinics(props.resources);
    }, [props.resources]);

    useEffect(() => {
        setFilteredClinics(clinics.filter((clinics) => clinics.state.toLowerCase().includes(search.toLowerCase())
        ));
    }, [search, clinics]);

    return props.resources.length === 0 ? (
        <div className="clinicPage">
            <h1>Find a Clinic</h1>
            <h2>Trans-Friendly clinics in your area!</h2>
            <p>Loading Resources ...</p>
        </div>
    ) : (
            <div className="clinicPage">
                <h1>Find a Clinic</h1>
                <h2>Select your state to see Trans-Friendly clinics in your area!</h2>

                <div className="clinicDropdown">
                    <select id="dropdown" onChange={(e) => setSearch(e.target.value) }>
                        {props.states.map((state, idx) => {
                            return(
                                <option id="dropOpt" key={idx} value={state.abbrev}>{state.name}</option>
                            )
                        })}
                    </select>
                </div>

            <div className="clinicsDiv">
            {filteredClinics.map((resource, idx) => {
                    var googleMapQuery = `https://maps.google.com/?q=${resource.street} ${resource.city} ${resource.state} ${resource.zip}`;

                    return (
            <div className="clinicContainer" key={idx}>
                <div className="clinicNameContainer">
                <p>{resource.name}</p>
                </div>
                <div className="clinicImageContainer">
                <img src={resource.image} alt={resource.state} />
                </div>
                <div className="clinicLinkContainer">
                <p>
                    <a href={resource.website} target="_blank" className="clinicWebsite">
                    Website Link
                    </a>
                </p>
                <p>{resource.phone}</p>
                </div>    
                <div className="clinicAddress"><a target="_blank" href={googleMapQuery}>
                    {resource.street}, {resource.city}, {resource.state}, {resource.zip} </a>
                </div>
                <div className="clinicDescription">
                <p>{resource.description}</p>
                </div>
                <div className="clinicDivider"></div>
            </div>
                    );
                })}
                </div>
            </div>
    )
}

export default ClinicResource;