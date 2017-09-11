var React = require("react");

var EditorComponent = require("../tool/EditorComponent.js");

class New extends React.Component {
    constructor() {
        super();

        this.state = {

        };

    }

    render() {
        var me = this;

        return (
            <div id="new">
                <section className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-11">
                            <EditorComponent />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

module.exports = New;
