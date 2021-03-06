import React from "react";
import API from "../../utils/API";
import Resource from "../../components/Resource";

class History extends React.Component {
    state = {
        resources: [],
    };

    componentDidMount() {
        API.getHistory().then((res) => {
            this.setState({ resources: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    render() {
        return (
            <div className="resourceWrapper">
                <Resource
                    title="History"
                    slogan="Be proud of your roots; stories of the transgender community that came
        before us."
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default History;