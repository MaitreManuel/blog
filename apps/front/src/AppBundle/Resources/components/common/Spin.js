var React = require("react");

class Spin extends React.Component {
    // just a component to create the spinner, nothing to change here
    render() {
        return (
            <div id="Spin">
                <div id="overlay">
                    <div id="loader"></div>
                </div>
            </div>
        );
    }
}

module.exports = Spin;
