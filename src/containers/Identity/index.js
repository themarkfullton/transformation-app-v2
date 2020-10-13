import React from "react";
import API from "../../utils/API";
import Resource from "../../components/Resource";

class Identity extends React.Component {
    state = {
        resources: [],
    };

    componentDidMount() {
        API.getIdentity().then((res) => {
            this.setState({ resources: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    render() {
        return (
            <div className="resourceWrapper">
                <Resource
                    title="Identity"
                    slogan="Identity Slogan Here"
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default Identity;