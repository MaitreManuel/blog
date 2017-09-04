var React = require("react");

var Header = React.createClass({
    render: function () {
        return (
            <header id="body-header" className="container-fluid">
                <div className="row m-auto">
                    <div className="col-12 d-inline-flex">
                        <a href="#" className="fadein">
                            <h2>Blog</h2>
                        </a>
                        <a href="#" className="logout fadein">
                            <i className="fa fa-power-off fa-2x" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </header>
        );
    }
});

module.exports = Header;
