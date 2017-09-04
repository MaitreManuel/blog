var React = require("react");

var Footer = React.createClass({
    render: function () {
        return (
            <footer id="body-footer" className="container-fluid">
                <div className="row m-auto">
                    <div className="col-12 justify-content-center">
                        <p><i className="fa fa-copyright" aria-hidden="true"></i> Trystan Eveno - ECV Digital</p>
                    </div>
                </div>
            </footer>
        );
    }
});

module.exports = Footer;
