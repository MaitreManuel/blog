var React = require("react");

var Login = React.createClass({
    getInitialState() {
        return { user: { name: "", password: "", stay_connect: false }}
    },

    // read all of text update on inputs and set to the store
    updateUser(event) {
        var user = this.state.user;
        user[event.target.name] = event.target.value;
        console.log(user)
        this.setState({user: user});
    },

    render() {
        return (
            <div id="login">
                <section className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-11 col-md-7 col-xl-3 login-content">
                            <header>
                                <h3><i className="fa fa-sign-in" aria-hidden="true"></i> Sign in</h3>
                            </header>

                            <div className="form-group">
                                <h4>Adresse e-mail</h4>
                                <input onInput={this.updateUser} name="name" type="email" className="form-control" placeholder="johndoe@example.com" />
                            </div>
                            <div className="form-group">
                                <h4>Mot de passe</h4>
                                <input onInput={this.updateUser} name="password" type="password" className="form-control" placeholder="Example123*" />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input onChange={this.updateUser} type="checkbox" className="form-check-input" name="stay_connect" />
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
