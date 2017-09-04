var React = require("react");

var Content = require("./common/Content.js");
var Header = require("./common/Header.js");
var Footer = require("./common/Footer.js");

var Root = React.createClass({
    render() {
        return (
            <section id="Root">
                <Header />
                <Content />
                <Footer />
            </section>
        );
    }
});

module.exports = Root;
