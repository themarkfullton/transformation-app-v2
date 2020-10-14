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
                    slogan="You know who you are; here's how to get the rest of the world in on the
        loop."
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default Identity;