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

        this.connection = this.connection.bind(this);
        this.updateUser = this.updateUser.bind(this);
    }

    // read all of text update on inputs and set to the store
    updateUser(event) {
        var user = this.state.user;
        user[event.target.name] = event.target.value;
        this.setState({user: user});
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
                    <section className="container-fluid window">
                        <div className="row justify-content-center">
                            <div className="col-11 col-md-7 col-xl-3 login-content">
                                <header>
                                    <h3><i className="fa fa-sign-in" aria-hidden="true"></i> Sign in</h3>
                                </header>

                                <div className="form-group">
                                    <h4>Adresse e-mail</h4>
                                    <input onInput={this.updateUser} id="name" name="name" type="email" className="form-control" placeholder="johndoe@example.com" />
                                </div>
                                <div className="form-group">
                                    <h4>Mot de passe</h4>
                                    <input onInput={this.updateUser} id="password" name="password" type="password" className="form-control" placeholder="Example123*" />
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
