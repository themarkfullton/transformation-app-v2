import React from "react";
import API from "../../utils/API";
import NewsBlock from "../../components/NewsBlock";

class Splash extends React.Component {
    state = {
        resources: [],
    };

    componentDidMount() {
        API.getNews().then((res) => {
            this.setState({ resources: res.data });
        }).catch((err) => this.setState({ error: err.items }));
    }

    render() {
        return (
            <div className="splashWrapper">
                <NewsBlock
                    resources={this.state.resources} />
            </div>
        )
    }
}

export default Splash;