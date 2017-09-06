var React = require("react");

var Content = require("./common/Content.js");
var Footer = require("./common/Footer.js");
var Header = require("./common/Header.js");

class Root extends React.Component {
    render() {
        return (
            <section id="Root">
                <Header />
                <Content />
                <Footer />
            </section>
        );
    }
}

module.exports = Root;
