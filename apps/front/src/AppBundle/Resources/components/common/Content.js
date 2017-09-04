var React = require("react");

var List = require("../list/List.js");

var Content = React.createClass({
    render: function () {
        return (
            <section id="content">
                <List />
            </section>
        );
    }
});

module.exports = Content;
