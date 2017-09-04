var React = require("react");

var Header = React.createClass({
    render() {
        return (
            <header id="body-header" className="container-fluid">
                <div className="row m-auto">
                    <div className="col-12 d-inline-flex">
                        <a href="#" className="fadein">
                            <h2>ECV_blog</h2>
                        </a>
                        {
                            (true)
                            &&
                            <a href="#" className="logout fadein">
                                <i className="fa fa-power-off fa-2x" aria-hidden="true"></i>
                            </a>
                        }
                    </div>
                </div>
            </header>
        );
    }
});

module.exports = Header;
