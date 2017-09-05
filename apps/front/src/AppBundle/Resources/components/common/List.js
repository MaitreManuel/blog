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
        this.getArticles();
    }

    // use to get all articles from the server
    getArticles() {
        var me = this;

        // spin(true);

        $.ajax({
            url: 'http://localhost/blog/apps/back/api/controller' +'/Article/read.php',
            type: "POST",
            data: {
                sql: "SELECT_Articles"
            },
            success: function(response) {
                var articles = [],
                    response = response.records === undefined ? response : response.records;

                if(response.message) {
                    console.log("Pas d'articles");
                } else {
                    // we generate a dynamic list of unsolve tickets
                    for(var i = 0; i < response.length; i++) {
                        let article_id = response[i].article_id,
                            article_title = response[i].article_title === "" ? "Pas de titre" : response[i].article_title,
                            article_intro = response[i].article_intro === "" ? "Pas d'introduction" : response[i].article_intro,
                            article_coverpath = response[i].article_coverpath === "" ? "http://ccwc.org/wp-content/themes/ccwc-theme/images/no-image-available.png" : response[i].article_coverpath;

                        articles.push(
                            <article className="col-12 col-lg-6" key={"article"+ i}>
                                <div className="article-entry">
                                    <header className="img">
                                        <img src={article_coverpath} alt="Test" className="img-fit img-fit-cover" />
                                    </header>
                                    <div className="article-content">
                                        <h2>{article_title}</h2>
                                        <p>{article_intro}</p>
                                        <a onClick={() => me.openArticle(article_id)} className="more fadein" href="#">Lire l&#039;article</a>
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
                    <header className="row justify-content-center">
                        <div className="col-11">
                            <h3>Articles</h3>
                        </div>
                    </header>
                </section>
                <section className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-11 col-xl-9">
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
