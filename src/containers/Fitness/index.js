import React from "react";
import API from "../../utils/API";
import Resource from "../../components/Resource";

class Fitness extends React.Component {
    state = {
        resources: [],
    };

    componentDidMount() {
        API.getFitness().then((res) => {
            this.setState({ resources: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    render() {
        return (
            <div className="resourceWrapper">
                <Resource
                    title="Fitness"
                    slogan="Fitness Slogan Here"
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default Fitness;