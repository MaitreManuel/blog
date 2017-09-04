var React = require("react");

var List = React.createClass({
    render: function () {
        return (
            <div id="list">
                <section className="container-fluid">
                    <header className="row justify-content-center">
                        <div className="col-11">
                            <h3>List of articles</h3>

                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a className="fadein" href="#"><i className="fa fa-home" aria-hidden="true"></i> Home</a></li>
                                <li className="breadcrumb-item active"><i className="fa fa-list" aria-hidden="true"></i> List</li>
                            </ol>
                        </div>
                    </header>
                </section>
            </div>
        );
    }
});

module.exports = List;
