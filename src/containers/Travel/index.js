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
            <div className="resourceWrapper">
                <Resource
                    title="Travel"
                    slogan="See the world; let the world see you."
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default Travel;