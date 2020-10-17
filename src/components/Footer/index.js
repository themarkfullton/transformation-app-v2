import React from "react";

class Footer extends React.Component {
    render() {
        var year = new Date().getFullYear();

        return (
            <div className="footer">
                <div className="footerContainer">
                    <div className="titleContainer">
                        <h2>The Transformation Project</h2>
                    </div>
                    <div className="footerContentContainer">
                        
                            <p className="youAreHere">APP</p> <p>|</p> <p><a href="https://github.com/themarkfullton/transformation-api-v2" target="_blank">API</a></p> <p>|</p> <p><a href="https://transformation-app.herokuapp.com/" target="_blank">OLD</a>
                            </p>
                    </div>
                    <div className="footerCopyright">Copyright &copy; {year}</div>
                </div>
            </div>
        )
    }
}

export default Footer;