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
            user = this.state.user;

        if(false) {
            console.log('non')
        } else {
            $.ajax({
                url: 'http://localhost/blog/apps/back/api/controller' +'/User/read.php',
                type: "POST",
                data: {
                    sql: "SELECT_User",
                    login: user["name"],
                    password: user["password"]
                },
                success: function(result) {
                    if(false) {
                        console.log('non')
                    } else {
                        console.log(result.records)
                        // localStorage.setItem('logged', true);
                        // me.props.validate();
                    }
                },
                error: function(error) {
                    console.log(error);
                },
                complete: function() {
                    console.log('done');
                }
            });
        }
    }

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
                                <input onInput={this.updateUser} name="name_blog" type="email" className="form-control" placeholder="johndoe@example.com" />
                            </div>
                            <div className="form-group">
                                <h4>Mot de passe</h4>
                                <input onInput={this.updateUser} name="password_blog" type="password" className="form-control" placeholder="Example123*" />
                            </div>
                            <div className="form-check">
                                <label className="form-check-label">
                                    <input onChange={this.updateUser} type="checkbox" className="form-check-input" name="stay_connect_blog" />
                                    <p>Rester connecté</p>
                                </label>
                            </div>

                            <footer>
                                <button onClick={this.connection} className="btn btn-blue fadein">Connexion</button>
                            </footer>

                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

module.exports = Login;
