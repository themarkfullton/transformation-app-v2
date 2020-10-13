import React from "react";
import API from "../../utils/API";
import ClinicResource from "../../components/ClinicResource";

class Clinics extends React.Component {
    state = {
        location: "",
        resources: [],
    };

    componentDidMount() {
        API.getClinics().then((res) => {
            this.setState({ resources: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    render() {
        return (
            <div className="resourceWrapper">
                <ClinicResource
                    clinics={this.state.resources} />
            </div>
        )
    }
}

export default Clinics;