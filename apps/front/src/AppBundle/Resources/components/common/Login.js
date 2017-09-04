var React = require("react");

var Login = React.createClass({
    render() {
        return (
            <div id="login">
                <section className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-7 col-lg-3 login-content">
                            <header>
                                <h3>Login</h3>
                            </header>

                            <div className="form-group">
                                <h4>Adresse E-mail</h4>
                                <input type="email" className="form-control" placeholder="johndoe@example.com" />
                            </div>
                            <div className="form-group">
                                <h4>Mot de passe</h4>
                                <input type="password" className="form-control" placeholder="Example123*" />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input type="checkbox" className="form-check-input" />
                                    <p>Rester connecté</p>
                                </label>
                            </div>

                            <footer>
                                <button className="btn btn-blue fadein">Connexion</button>
                            </footer>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
});

module.exports = Login;
