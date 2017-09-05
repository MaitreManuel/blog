var React = require("react");

var Content = require("./common/Content.js");
var Footer = require("./common/Footer.js");
var Header = require("./common/Header.js");
var Spin = require("./common/Spin.js");

class Root extends React.Component {
    render() {
        return (
            <section id="Root">
                <Spin />
                <Header />
                <Content />
                <Footer />
            </section>
        );
    }
}

module.exports = Root;
