import React from "react";
import API from "../../utils/API";
import ClinicResource from "../../components/ClinicResource";
import AllStates from "./states.json";

class Clinics extends React.Component {
    state = {
        resources: [],
    };

    componentDidMount() {
        API.getClinics().then((res) => {
            console.log(res);
            this.setState({ resources: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    render() {
        return (
            <div className="clinicsWrapper">
                <ClinicResource
                    states={AllStates}
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default Clinics;