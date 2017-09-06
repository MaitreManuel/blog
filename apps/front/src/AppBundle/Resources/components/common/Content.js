var React = require("react");

var Article = require("./Article.js");
var List = require("./List.js");
var Login = require("./Login.js");

class Content extends React.Component {
    constructor() {
        super();

        this.state = {
            want_log: localStorage.getItem('want_log'),
            article_id: localStorage.getItem('article_id')
        };

        this.openArticle = this.openArticle.bind(this)
        this.openList = this.openList.bind(this)
        this.renderToLog = this.renderToLog.bind(this)
        this.renderHome = this.renderHome.bind(this)
        this.validate = this.validate.bind(this)
    }

    openArticle() {
        var state = this.state;
        state.article_id = localStorage.getItem('article_id');
        this.setState(state);
    }

    openList() {
        var state = this.state;
        state.article_id = null;
        this.setState(state);
    }

    // props use to refresh component when user is logging
    validate() {
        var state = this.state;
        state.want_log = localStorage.getItem('want_log');
        this.setState(state);
        this.props.reload();
    }

    // if user is logged, then return to App login page
    renderHome() {
        if(this.state.article_id !== null) {
            return (
                <Article openList={this.openList}/>
            );
        } else {
            return (
                <List openArticle={this.openArticle}/>
            );
        }
    }

    // if user is not logged, then return to App login page
    renderToLog() {
        return (
            <Login validate={this.validate}/>
        );
    }

    render() {
        if(this.state.want_log === "true") {
			return this.renderToLog();
		} else {
            return this.renderHome();
		}
    }
}

module.exports = Content;
