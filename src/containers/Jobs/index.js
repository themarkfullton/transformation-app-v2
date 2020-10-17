import React from "react";
import API from "../../utils/API";
import Resource from "../../components/Resource";

class Jobs extends React.Component {
    state = {
        resources: [],
    };

    componentDidMount() {
        API.getJobs().then((res) => {
            this.setState({ resources: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    render() {
        return (
            <div className="resourceWrapper">
                <Resource
                    title="Jobs"
                    slogan="Achieving that work-life balance on a whole new level."
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default Jobs;