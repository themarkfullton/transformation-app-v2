import React from "react";
import API from "../../utils/API";
import Resource from "../../components/Resource";

class Fashion extends React.Component {
    state = {
        resources: [],
    };

    componentDidMount() {
        API.getFashion().then((res) => {
            this.setState({ resources: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    render() {
        return (
            <div className="resourceWrapper">
                <Resource
                    title="Fashion"
                    slogan="Fashion Slogan Here"
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default Fashion;