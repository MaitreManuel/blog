var React = require("react");

var Content = require("./common/Content.js");
var Header = require("./common/Header.js");
var PreHeader = require("./common/PreHeader.js");
var Footer = require("./common/Footer.js");

class Root extends React.Component {
    constructor() {
        super();

        this.state = {
            action: localStorage.getItem('logged'),
        };

        this.reload = this.reload.bind(this)
    }

    reload() {
        var state = this.state;
        state.action = localStorage.getItem('logged');
        this.setState(state);
    }

    render() {
        return (
            <section id="Root">
                <PreHeader/>
                <Header/>
                <Content reload={this.reload}/>
                <Footer />
            </section>
        );
    }
}

module.exports = Root;
