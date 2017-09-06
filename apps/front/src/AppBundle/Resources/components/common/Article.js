var React = require("react");

class Article extends React.Component {
    constructor() {
        super();

        this.state = {
            article: [],
            article_id: localStorage.getItem('article_id'),
            comment: "",
            comments: [],
            logged: localStorage.getItem('logged'),
            nbComments: 0,
        };

        this.updateComment = this.updateComment.bind(this);
        this.confirmModal = this.confirmModal.bind(this);
        this.deleteComment = this.deleteComment.bind(this);
        this.editComment = this.editComment.bind(this);
        this.getArticle = this.getArticle.bind(this);
        this.getComments = this.getComments.bind(this);
        this.openList = this.openList.bind(this);
        this.sendComment = this.sendComment.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.getArticle();
        this.getComments();
    }

    updateComment(event) {
        var state = this.state;
        state.comment = event.target.value;
        state.nbCar = state.comment.length;
        this.setState(state);
    }

    // unset confirm modal
    closeConfirmModal() {
        localStorage.removeItem('comment_id');
        var title = document.getElementById('text-title-modal'),
            message = document.getElementById("message-content-modal"),
            modal = document.getElementById("confirm-modal");

        modal.style.visibility = 'hidden';
        modal.style.opacity = '0';
        message.innerHTML = "";
        title.innerHTML = "";
    }

    // set confirm modal
    confirmModal(comment_id) {
        localStorage.setItem('comment_id', comment_id);
        var me = this,
            state = me.state,
            title = document.getElementById('text-title-modal'),
            message = document.getElementById('message-content-modal'),
            modal = document.getElementById('confirm-modal');

        title.innerHTML = "Confirmer suppression ?";
        modal.style.visibility = 'visible';
        modal.style.opacity = '1';
        message.innerHTML = "Voulez-vous vraiment supprimmer ce commentaire ?";
    }

    deleteComment() {
        var me = this,
            comment_id = localStorage.getItem('comment_id'),
            comment_authorid = localStorage.getItem('user_id');

        $.ajax({
            url: 'http://localhost/blog/apps/back/api/controller' +'/Comment/delete.php',
            type: "POST",
            data: {
                comment_id: comment_id,
                comment_authorid: comment_authorid
            },
            success: function(response) {
                me.getComments();
                me.closeConfirmModal();
            },
            error: function(error) {
                console.log(error);
            },
            complete: function() {
                console.log('request done');
            }
        });
    }

    editComment(comment_id) {
        var me = this,
            comment_content = document.getElementById("textbox"+ comment_id).value;

        $.ajax({
            url: 'http://localhost/blog/apps/back/api/controller' +'/Comment/update.php',
            type: "POST",
            data: {
                comment_id: comment_id,
                comment_content: comment_content
            },
            success: function(response) {
                me.getComments();
            },
            error: function(error) {
                console.log(error);
            },
            complete: function() {
                console.log('request done');
            }
        });
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
                                <div className="col-12 col-lg-9">
                                    <p>{article_content}</p>
                                    <h5 className="text-right">Auteur - {user_firstname} {user_lastname}</h5>
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
                    for(var i = 0; i < response.length; i++) {
                        let comment_id = response[i].comment_id === "" ? "Pas d'identifiant" : response[i].comment_id,
                            comment_title = response[i].comment_title === "" ? "Pas de titre" : response[i].comment_title,
                            comment_content = response[i].comment_content === "" ? "Pas de titre" : response[i].comment_content,
                            comment_authorid = response[i].comment_authorid === "" ? "Pas de d'identifiant d'auteur" : response[i].comment_authorid,
                            comment_date = response[i].comment_date === "" ? "Pas de date" : response[i].comment_date,
                            user_firstname = response[i].user_firstname === "" ? "Pas de prénom" : response[i].user_firstname,
                            user_lastname = response[i].user_lastname === "" ? "Pas de nom" : response[i].user_lastname;

                        let t = comment_date.split(/[- :]/),
                            d = new Date(t[0], t[1]-1, t[2], t[3], t[4], t[5]),
                            date = new Date(d),
                            day = date.getDate() < 10 ? "0"+ date.getDate() : date.getDate(),
                            month = date.getMonth() < 10 ? "0"+ (date.getMonth() + 1) : (date.getMonth() + 1),
                            hours = date.getHours() < 10 ? "0"+ date.getHours() : date.getHours(),
                            minutes = date.getMinutes() < 10 ? "0"+ date.getMinutes() : date.getMinutes();

                        let current_date = "le "+ day +"/"+ month +"/"+ date.getFullYear() +", à "+ hours +":"+ minutes;

                        comments.push(
                            <div className="row justify-content-center" key={"comment"+ comment_id}>
                                <div className="col-12 col-lg-9 comment">
                                    <div className="wrap">
                                        <header>
                                            <p>{user_firstname +" "+ user_lastname +" "+ current_date}</p>
                                        </header>
                                        <div className="content">
                                            <p>{comment_content}</p>
                                            <div id={"edit-comment"+ comment_id} className="edit-mode toggle-edit text-right">
                                                <textarea id={"textbox"+ comment_id} className="lit-textbox" name="comment" defaultValue={comment_content} placeholder="Editer votre commentaire ici..."></textarea>
                                                <button onClick={ () => me.editComment(comment_id) } className="btn btn-blue fadein">Envoyer</button>
                                            </div>
                                        </div>
                                        { comment_authorid === localStorage.getItem('user_id') &&
                                            <div className="wrap-opts">
                                                <i onClick={ () => me.openEditMode(comment_id) } className="fa fa-pencil fadein" aria-hidden="true"></i>
                                                <i onClick={ () => me.confirmModal(comment_id) } className="fa fa-close fadein" aria-hidden="true"></i>
                                            </div>
                                        }
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

    openEditMode(id) {
        document.getElementById("edit-comment"+ id).classList.toggle('toggle-edit');
    }

    openList() {
        localStorage.removeItem('article_id');
        this.props.openList();
    }

    sendComment() {
        var me = this,
            comment = document.getElementById("comment"),
            comment_content = me.state.comment,
            comment_articleid = localStorage.getItem('article_id'),
            comment_authorid = localStorage.getItem('user_id');

        if(comment_content === "") {
            comment.style.borderColor = "red";
            console.log("Pas de commentaire");
        } else {
            comment.style.borderColor = "green";

            $.ajax({
                url: 'http://localhost/blog/apps/back/api/controller' +'/Comment/create.php',
                type: "POST",
                data: {
                    comment_content: comment_content,
                    comment_articleid: comment_articleid,
                    comment_authorid: comment_authorid
                },
                success: function(response) {
                    var response = response.records === undefined ? response : response.records[0];

                    comment.value = "";
                    comment.removeAttribute('style');
                    me.getComments();
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
        var me = this,
            state = me.state,
            article = state.article,
            comments = state.comments,
            logged = state.logged,
            nbCar = state.nbCar,
            nbComments = state.nbComments;

        return (
            <div id="article">
                <div id="confirm-modal">
                    <div className="container-modal">
                        <div className="title-modal">
                            <h3 id="text-title-modal"></h3>
                            <i onClick={this.closeConfirmModal} className="fa fa-close fa-3x close-modal goright fadein" aria-hidden="true"></i>
                        </div>
                        <div className="content-modal">
                            <span id="message-content-modal"></span>
                        </div>
                        <div className="footer-modal">
                            <button onClick={this.closeConfirmModal} className="btn btn-grey fadein">Annuler</button>
                            <button onClick={this.deleteComment} className="btn btn-blue fadein">Supprimer</button>
                        </div>
                    </div>
                </div>

                <section className="container-fluid">
                    <div className="row">
                        <div className="col-11">
                            <button onClick={this.openList} className="btn btn-blue fadein"><i className="fa fa-long-arrow-left" aria-hidden="true"></i> Articles</button>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <article className="col-11 col-lg-10">
                            {article}
                        </article>
                    </div>
                    <div className="row justify-content-center comments-space">
                        <div className="col-11 col-lg-10">
                            <div className="row justify-content-center">
                                <div className="col-12 col-lg-9">
                                    <h3>Commentaires</h3>
                                </div>
                            </div>
                            {nbComments > 0 && comments}
                            {nbComments <= 0 &&
                                <div className="row justify-content-center no-comment">
                                    <div className="col-12 col-lg-10 text-center">
                                        <h5>Pas de commentaires</h5>
                                    </div>
                                </div>
                            }
                            {logged === "true" &&
                                <div className="wrap">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-lg-9 add-comment">
                                            <p>Ajouter un commentaire</p>
                                            <textarea onInput={this.updateComment} id="comment" name="comment" placeholder="Taper votre commentaire ici..."></textarea>
                                        </div>
                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-lg-9 text-right send">
                                            <button onClick={this.sendComment} className="btn btn-blue fadein">Envoyer</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            {logged !== "true" &&
                                <div className="row justify-content-center">
                                    <div className="col-12 col-lg-9 text-center need-connect">
                                        <p>Connectez-vous pour ajouter un commentaire</p>
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
