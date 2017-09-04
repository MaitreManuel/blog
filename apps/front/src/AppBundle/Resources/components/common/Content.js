var React = require("react");

var List = require("../list/List.js");
var Login = require("./Login.js");

var Content = React.createClass({
    // if code is valid, then redirect it to the login page of the chose app
    renderLog() {
        return (
            <List />
        );
    },

    // if user is not logged, then return to App login page
    renderNotLog() {
        return (
            <Login />
        );
    },

    render() {
        if(true) {
			return this.renderNotLog();
		} else {
			return this.renderLog();
		}
    }
});

module.exports = Content;
