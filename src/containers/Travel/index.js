import React from "react";
import API from "../../utils/API";
import Resource from "../../components/Resource";

class Travel extends React.Component {
    state = {
        resources: [],
    };

    componentDidMount() {
        API.getTravel().then((res) => {
            this.setState({ resources: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    render() {
        return (
            <div className="travelWrapper">
                <Resource
                    title="Travel"
                    slogan="Travel Slogan Here"
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default Travel;