var React = require("react");

class Article extends React.Component {
    constructor() {
        super();

        this.state = {
            article: [],
            comments: [],
            nbComments: 0,
            article_id: localStorage.getItem('article_id'),
        };

        this.getArticle = this.getArticle.bind(this);
        this.getComments = this.getComments.bind(this);
        this.openList = this.openList.bind(this);
    }

    componentDidMount() {
        this.getArticle();
        this.getComments();
    }

    // use to get all articles from the server
    getArticle() {
        var me = this,
            id = me.state.article_id;

        // spin(true);

        $.ajax({
            url: 'http://localhost/blog/apps/back/api/controller' +'/Article/read.php',
            type: "POST",
            data: {
                sql: "SELECT_Article",
                article_id: id
            },
            success: function(response) {
                var article = [],
                    response = response.records === undefined ? response : response.records[0];

                if(response.message) {
                    console.log("Erreur de chargement");
                } else {
                    let article_id = response.article_id,
                        article_title = response.article_title === "" ? "Pas de titre" : response.article_title,
                        article_intro = response.article_intro === "" ? "Pas d'introduction" : response.article_intro,
                        article_content = response.article_content === "" ? "Pas de contenu" : response.article_content,
                        article_authorid = response.article_authorid === "" ? "Pas d'identifiant d'auteur" : response.article_authorid,
                        article_tagslist = response.article_tagslist === "" ? "Pas de liste de tags" : response.article_tagslist,
                        article_publicationdate = response.article_publicationdate === "" ? "Pas de date de publication" : response.article_publicationdate,
                        article_updatedate = response.article_updatedate === "" ? "Pas de date de mise à jour" : response.article_updatedate,
                        article_coverpath = response.article_coverpath === "" ? "http://ccwc.org/wp-content/themes/ccwc-theme/images/no-image-available.png" : response.article_coverpath,
                        user_firstname = response.user_firstname === "" ? "Pas de prénom" : response.user_firstname,
                        user_lastname = response.user_lastname === "" ? "Pas de nom" : response.user_lastname,
                        user_id = response.user_id === "" ? "Pas d'id" : response.user_id,
                        user_mail = response.user_mail === "" ? "Pas de mail" : response.user_mail,
                        user_pseudo = response.user_pseudo === "" ? "Pas de pseudo" : response.user_pseudo,
                        user_is_admin = response.user_is_admin === "" ? "Pas de statut admin" : response.user_is_admin;

                    article.push(
                        <div className="article-page" key={"article"+ article_id}>
                            <header>
                                <h1>{article_title}</h1>
                                <p>{article_intro}</p>
                                <div className="img">
                                    <img src={article_coverpath} alt="Test" className="img-fit img-fit-cover" />
                                </div>
                            </header>
                            <div className="row justify-content-center">
                                <div className="col-9">
                                    <p>{article_content}</p>
                                    <h5>Auteur - {user_firstname} {user_lastname}</h5>
                                </div>
                            </div>
                        </div>
                    );
                    // then set to the store and render use this to create his
                    // list
                    me.setState({ article: article });
                }
            },
            error: function(error) {
                console.log(error);
            },
            complete: function() {
                // spin(false);
            }
        });
    }

    getComments() {
        var me = this;

        var me = this,
            id = me.state.article_id;

        // spin(true);

        $.ajax({
            url: 'http://localhost/blog/apps/back/api/controller' +'/Comment/read.php',
            type: "POST",
            data: {
                sql: "SELECT_Comments",
                article_id: id
            },
            success: function(response) {
                var comments = [],
                    response = response.records === undefined ? response : response.records;

                if(response.message) {
                    console.log("Pas de commentaires");
                } else {
                    console.log(response.length)
                    console.log(response)
                    for(var i = 0; i < response.length; i++) {
                        let comment_title = response[i].comment_title === "" ? "Pas de titre" : response[i].comment_title,
                            comment_content = response[i].comment_content === "" ? "Pas de titre" : response[i].comment_content,
                            comment_date = response[i].comment_date === "" ? "Pas de titre" : response[i].comment_date,
                            user_firstname = response[i].user_firstname === "" ? "Pas de prénom" : response[i].user_firstname,
                            user_lastname = response[i].user_lastname === "" ? "Pas de nom" : response[i].user_lastname;

                        comments.push(
                            <div className="row justify-content-center" key={"comment"+ i}>
                                <div className="col-9 comment">
                                    <header>
                                        <p>{user_firstname +" "+ user_lastname +" "+ comment_date}</p>
                                    </header>
                                    <div className="content">
                                        <p>{comment_content}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                    // // then set to the store and render use this to create his
                    // // list
                    me.setState({ comments: comments, nbComments: response.length });
                }
            },
            error: function(error) {
                console.log(error);
            },
            complete: function() {
                // spin(false);
            }
        });
    }

    openList() {
        localStorage.removeItem('article_id');
        this.props.openList();
    }

    render() {
        var me = this,
            article = me.state.article,
            comments = me.state.comments,
            nbComments = me.state.nbComments;

        return (
            <div id="article">
                <section className="container-fluid">
                    <div className="row">
                        <div className="col-11">
                            <button onClick={this.openList} className="btn btn-blue fadein"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Retour à la liste</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <article className="col-10">
                            {article}
                        </article>
                    </div>
                    <div className="row justify-content-center comments-space">
                        <div className="col-10">
                            <div className="row justify-content-center">
                                <div className="col-9">
                                    <h3>Commentaires</h3>
                                </div>
                            </div>
                            {nbComments > 0 && comments}
                            {nbComments <= 0 &&
                                <div className="row justify-content-center no-comment">
                                    <div className="col-10 text-center">
                                        <h5>Pas de commentaires</h5>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

module.exports = Article;
