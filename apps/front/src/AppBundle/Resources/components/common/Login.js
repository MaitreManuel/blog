var React = require("react");

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            user: {
                name: "",
                password: "",
                stay_connect: false,
            }
        };

        this.cancelLog = this.cancelLog.bind(this);
        this.connection = this.connection.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    componentDidMount() {
        var me = this;
        document.getElementsByTagName("body")[0].id = "b-login";
        document.getElementById("b-login").addEventListener("keydown", function (e) {
            if (e.keyCode === 13) {
                me.connection();
            }
        });
    }

    // read all of text update on inputs and set to the store
    updateUser(event) {
        var user = this.state.user;
        if(event.target.value.length > 0) {
            event.target.nextSibling.nextSibling.nextSibling.classList.add("not-empty");
        } else {
            event.target.nextSibling.nextSibling.nextSibling.classList.remove("not-empty");
        }
        user[event.target.name] = event.target.value;
        this.setState({user: user});
    }

    cancelLog() {
        localStorage.removeItem('want_log');
        this.props.validate();
    }

    // use when user click on "Connexion"
    connection() {
        var me = this,
            user = this.state.user,
            name = document.getElementById("name"),
            password = document.getElementById("password");

        if(user.name === "") {
            name.style.borderColor = "red";
            console.log('Remplir champ mail');
            if(user.password === "") {
                password.style.borderColor = "red";
            } else {
                password.style.borderColor = "green";
            }
        } else if(user.password === "") {
            password.style.borderColor = "red";
            console.log('Remplir champ mot de passe');
            if(user.name === "") {
                name.style.borderColor = "red";
            } else {
                name.style.borderColor = "green";
            }
        } else {
            name.style.borderColor = "green";
            password.style.borderColor = "green";

            $.ajax({
                url: 'http://localhost/blog/apps/back/api/controller' +'/User/read.php',
                type: "POST",
                data: {
                    sql: "SELECT_User",
                    user_mail: user.name,
                    user_password: user.password
                },
                success: function(response) {
                    var response = response.records === undefined ? response : response.records[0];

                    if(response.message) {
                        console.log('Pas utilisateur')
                    } else {
                        localStorage.removeItem('want_log');
                        localStorage.setItem('logged', true);
                        localStorage.setItem('user_id', response.user_id);
                        localStorage.setItem('user_firstname', response.user_firstname);
                        localStorage.setItem('user_lastname', response.user_lastname);
                        localStorage.setItem('user_mail', response.user_mail);
                        localStorage.setItem('user_pseudo', response.user_pseudo);
                        localStorage.setItem('user_is_admin', response.user_is_admin === "1" ? true : false);
                        me.props.validate();
                    }
                },
                error: function(error) {
                    console.log(error);
                },
                complete: function() {
                    console.log('request done');
                }
            });
        }
    }

    render() {
        return (
            <div id="login">
                <div className="wrap">
                    <div onClick={this.cancelLog} className="flt-return">
                        <i className="fa fa-arrow-left fa-2x" aria-hidden="true"></i>
                        <p>Retour</p>
                    </div>
                    <section className="container-fluid window">
                        <div className="row justify-content-center">
                            <div className="col-11 col-md-7 col-xl-3 login-content">
                                <header>
                                    <h3>Sign in</h3>
                                </header>

                                <div className="group">
                                    <input onInput={this.updateUser} id="name" name="name" type="text" placeholder="john.doe@example.com" />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>E-mail</label>
                                </div>
                                <div className="group">
                                    <input onInput={this.updateUser} id="password" name="password" type="password" placeholder="*******" />
                                    <span className="highlight"></span>
                                    <span className="bar"></span>
                                    <label>Mot de passe</label>
                                </div>

                                { false &&
                                    <div className="form-check">
                                        <label className="form-check-label">
                                            <input onChange={this.updateUser} type="checkbox" className="form-check-input" name="stay_connect" />
                                            <p>Rester connecté</p>
                                        </label>
                                    </div>
                                }

                                <footer>
                                    <button onClick={this.connection} className="btn btn-blue fadein">Connexion</button>
                                </footer>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

module.exports = Login;
