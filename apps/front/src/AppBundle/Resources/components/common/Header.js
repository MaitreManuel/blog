var React = require("react");

class Header extends React.Component {
    constructor() {
        super();

        this.openList = this.openList.bind(this);
        this.openLogin = this.openLogin.bind(this);
    }

    deconnection() {
        localStorage.clear();
        location.reload();
    }

    openList() {
        localStorage.removeItem('article_id');
        localStorage.removeItem('want_log');
        location.reload();
    }

    openLogin() {
        localStorage.setItem('want_log', true);
        location.reload();
    }

    render() {
        var first_name = localStorage.getItem('user_firstname'),
            last_name = localStorage.getItem('user_lastname');

        return (
            <header id="body-header" className="container-fluid">
                <div className="row m-auto">
                    <div className="col-12 d-inline-flex">
                        <a onClick={this.openList} href="javascript:void(0)" className="fadein">
                            <h2>ECV_blog</h2>
                        </a>
                        {(localStorage.getItem('want_log') !== "true" && localStorage.getItem('logged') !== "true") &&
                            <div onClick={this.openLogin} className="login fadein my-auto">
                                <span className="d-none d-sm-inline">Se connecter</span>
                                <i className="fa fa-user-circle-o fa-2x" aria-hidden="true"></i>
                            </div>
                        }
                        {(localStorage.getItem('want_log') !== "true" && localStorage.getItem('logged') === "true") &&
                            <div onClick={this.deconnection} className="login fadein my-auto">
                                <span className="d-none d-sm-inline">Se déconnecter</span>
                                <i className="fa fa-close fa-2x" aria-hidden="true"></i>
                            </div>
                        }
                    </div>
                </div>
            </header>
        );
    }
}

module.exports = Header;
