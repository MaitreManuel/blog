var React = require("react");

class List extends React.Component {
    constructor() {
        super();

        this.state = {
             articles: [],
             nbArticle: 0,
        };

        this.openArticle = this.openArticle.bind(this)
    }

    componentDidMount() {
        document.getElementsByTagName("body")[0].id = "b-list";
        this.getArticles();
    }

    // use to get all articles from the server
    getArticles() {
        var me = this;

        // spin(true);

        $.ajax({
            url: 'http://localhost/blog/apps/back/api/controller' +'/Article/read.php',
            type: "GET",
            success: function(response) {
                var articles = [],
                    time = 0.3,
                    response = response.records === undefined ? response : response.records;

                if(response.message) {
                    console.log("Pas d'articles");
                } else {
                    // we generate a dynamic list of unsolve tickets
                    for(var i = 0; i < response.length; i++) {
                        time += 0.1;
                        let article_id = response[i].article_id,
                            article_title = response[i].article_title === "" ? "Pas de titre" : response[i].article_title,
                            article_intro = response[i].article_intro === "" ? "Pas d'introduction" : response[i].article_intro,
                            article_coverpath = response[i].article_coverpath === "" ? "http://ccwc.org/wp-content/themes/ccwc-theme/images/no-image-available.png" : response[i].article_coverpath;

                        articles.push(
                            <article onClick={() => me.openArticle(article_id)} className="col-12 col-lg-6 col-xl-4" key={"article"+ i}>
                                <div className="wrap-article">
                                    <div className="article-entry">
                                        <header className="img">
                                            <img src={article_coverpath} alt="Test" className="img-fit img-fit-cover" />
                                        </header>
                                        <div className="article-content">
                                            <h2>{article_title}</h2>
                                            <p>{article_intro}</p>
                                            <span className="read">Lire l&#039;article</span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        );
                    }
                    // then set to the store and render use this to create his
                    // list
                    me.setState({ articles: articles, nbArticles: response.length });
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

    openArticle(id) {
        localStorage.setItem('article_id', id);
        this.props.openArticle();
    }

    render() {
        var me = this,
            articles = me.state.articles;

        return (
            <div id="list">
                <section className="container-fluid">
                    <header className="row justify-content-center h-list">
                        <div className="col-11 col-md-2 my-auto title">
                            <h3>Articles</h3>
                        </div>
                        <div className="col-11 col-md-7 my-auto text-center">
                            { localStorage.getItem("logged") === "true" &&
                                <button className="btn btn-blue fadein">Nouvel article</button>
                            }
                        </div>
                        <div className="col-11 col-md-2 my-auto share">
                            <div className="share-list">
                                <ul>
                                    <li className="share-icon text-center fadein twitter"><a href="https://twitter.com/MDev_ECVNantes" target="_blank" className="fadein twitter"><i className="fa fa-twitter fa-2x"></i></a></li>
                                    <li className="share-icon text-center fadein github"><a href="https://github.com/MaitreManuel" target="_blank" className="fadein github"><i className="fa fa-github fa-2x"></i></a></li>
                                    <li className="share-icon text-center fadein linkedin"><a href="https://www.linkedin.com/school/9222115/" target="_blank" className="fadein linkedin"><i className="fa fa-linkedin fa-2x"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </header>
                </section>
                <section className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-xl-11">
                            <div className="row">
                                {articles}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

module.exports = List;
