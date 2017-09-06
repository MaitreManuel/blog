var React = require("react");

class Header extends React.Component {
    constructor() {
        super();

        this.state = {
            logged: localStorage.getItem('logged'),
        };
    }

    render() {
        return (
            <header id="body-header" className="container-fluid">
                <div className="row m-auto">
                    <div className="col-12 d-inline-flex">
                        <a href="#" className="fadein">
                            <h2>ECV_blog</h2>
                        </a>
                        <div className="login fadein my-auto">
                            <span className="d-none d-sm-inline">Se connecter</span>
                            <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

module.exports = Header;
