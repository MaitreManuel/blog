var React = require("react");

var List = React.createClass({
    render() {
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
                        <div className="col-11">
                            <div className="row">
                                <article className="col-12 col-lg-6">
                                    <div className="article-entry">
                                        <header className="img">
                                            <img src="http://lorempixel.com/640/480/city/" alt="Test" className="img-fit img-fit-cover" />
                                        </header>
                                        <div className="article-content">
                                            <h2>Lorem ipsum dolor sit amet</h2>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin lectus mi, luctus eu nibh in,
                                                interdum tincidunt turpis. Vestibulum mattis ante quis risus consectetur pharetra. Fusce pulvinar,
                                                odio non fermentum semper, libero velit volutpat purus, sit amet fringilla libero quam at eros.
                                            </p>
                                            <a className="more fadein" href="#">Lire l''article</a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 col-lg-6">
                                    <div className="article-entry">
                                        <header className="img">
                                            <img src="http://lorempixel.com/640/480/city/" alt="Test" className="img-fit img-fit-cover" />
                                        </header>
                                        <div className="article-content">
                                            <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                                            <p>Comme dirait un compère "mais c'est dla merde, c'est dla merde !" - Jean-Pierre Coffe</p>
                                            <a className="more fadein" href="#">Lire l''article</a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 col-lg-6">
                                    <div className="article-entry">
                                        <header className="img">
                                            <img src="http://lorempixel.com/640/480/city/" alt="Test" className="img-fit img-fit-cover" />
                                        </header>
                                        <div className="article-content">
                                            <h2>Lorem ipsum dolor sit amet</h2>
                                            <p>Comme dirait un compère "mais c'est dla merde, c'est dla merde !" - Jean-Pierre Coffe</p>
                                            <a className="more fadein" href="#">Lire l''article</a>
                                        </div>
                                    </div>
                                </article>
                                <article className="col-12 col-lg-6">
                                    <div className="article-entry">
                                        <header className="img">
                                            <img src="http://lorempixel.com/640/480/city/" alt="Test" className="img-fit img-fit-cover" />
                                        </header>
                                        <div className="article-content">
                                            <h2>Lorem ipsum dolor sit amet</h2>
                                            <p>Comme dirait un compère "mais c'est dla merde, c'est dla merde !" - Jean-Pierre Coffe</p>
                                            <a className="more fadein" href="#">Lire l''article</a>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
});

module.exports = List;
