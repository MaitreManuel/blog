var React = require("react");

class Header extends React.Component {
    render() {
        return (
            <header id="body-header" className="container-fluid">
                <div className="row m-auto">
                    <div className="col-12 d-inline-flex">
                        <a href="#" className="fadein">
                            <h2>ECV_blog</h2>
                        </a>
                        {
                            (false)
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
}

module.exports = Header;
